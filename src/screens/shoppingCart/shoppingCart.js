import { useEffect, useState, useRef, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { addStudentToCourse, getCourseById } from "../../api/Core/Course";
import { getStudentById } from "../../api/Core/Student_Manage";
import { getItem } from "../../api/storage/storage";
import { Btn } from "../../components/common/Button/Btn";
import ShoppingList from "../../components/ShoppingList/ShoppingList";
import * as fa from "../../constants/persianStrings"
import { GeneralContext } from "../../providers/GeneralContext";
import "./index.css"


export default function ShoppingCart() {
    const { shoppCourse, setShopCourse } = useContext(GeneralContext)
    const userId = JSON.parse(getItem('id'))
    const [totalPay, setTotalPay] = useState(0);
    const navigator = useNavigate();
    const data = useRef([])
    const [showShop, setShowShop] = useState([])
    const oldData = useRef([])
    const { setConfirmPopupOpen, onConfirmSetter, setBackShop } = useContext(GeneralContext)

    useEffect(() => {
        getCoursesById();
        if (userId) getMyOldCourse(userId)
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setShowShop(data.current);
            GetTotalPay()
        }, 1000);

    }, [data.current.length])

    const getMyOldCourse = async (userId) => {
        let response = await getStudentById(userId);
        let holder = response.data.result.courses;
        oldData.current = holder.map(item => item._id);
    }

    const getCoursesById = () => {
        if (shoppCourse && data.current.length != shoppCourse.length) {
            shoppCourse.map(async (item) => {
                getDetailShopp(item)
            })
        }
    }

    const getDetailShopp = async (item) => {
        let response = await getCourseById(item);
        if (response.data.result) {
            if (data.current.length != shoppCourse.length) {
                if (oldData.current && oldData.current.length > 0) {
                    if (oldData.current.includes(response.data.result._id)) { toast.warning('دوره انتخاب شده قبلا خریداری شده بود!'); return }
                    else data.current.push(response.data.result)
                } else
                    data.current.push(response.data.result)
            }
        }
    }

    const GetTotalPay = () => {
        data.current.map((item) => {
            setTotalPay((Prev) => Prev + (item.cost))
        })
    }

    const removeCourse = (course) => {
        onConfirmSetter("آیا برای حذف دوره اطمینان دارید؟", () => {
            let newCourseToShop = showShop.filter(item => item._id != course._id);
            setShowShop(newCourseToShop)
            let newShop = shoppCourse.filter(item => item != course._id)
            setShopCourse(newShop)
        })
        setConfirmPopupOpen(true)
    }

    const submitCourseToStudent = () => {
        showShop.map(async (item) => {
            const data = {
                userId: userId,
                courseId: item._id
            }
            await addStudentToCourse(data);

        })
        setShowShop([]);
        setShopCourse([]);
        data.current = null

    }


    return (
        <div className="shoppingCart">

            {!showShop || showShop.length === 0 ?
                <>
                    <div className="emptyShopping"></div>
                    <p className="emptyShoppingTitle">سبد خرید شما خالی است!</p>
                    <p className="insertInShoppingCart" onClick={() => navigator('/courses')}>افزودن به سبد خرید...</p>
                </>
                :
                <>
                    <div className="shoppingCardTitle">
                        <p>سبد خرید</p>
                        <hr></hr>
                    </div>
                    <div className="detailShoppingCart">

                        <div className="listShoppingCourse">
                            <ShoppingList myData={showShop} removeCourse={removeCourse} />
                        </div>
                        <div className="totalShopping">
                            <div className="describeShopping">
                                <p>مدیریت صورت حساب</p>
                                <hr></hr>
                                <div className="allCoursePay">
                                    <p>تعداد کل:</p>
                                    <p>{data.current && data.current.length}</p>
                                </div>
                                <div className="allSaleCourse">
                                    <p>تخفیف</p>
                                    <p>30%</p>
                                </div>
                                <hr></hr>
                                <div className="totalPay">
                                    <p>جمع کل</p>
                                    <p>{totalPay}ت</p>
                                </div>
                            </div>
                            <div className="payShoppingCart">
                                <Btn
                                    color="info"
                                    text={fa.PAY}
                                    elementClass="mediumBtnCh"
                                    variant="contained"
                                    onChange={() => {
                                        if (userId)
                                            submitCourseToStudent()
                                        else {
                                            toast.error('ابتدا وارد شوید!');
                                            setBackShop(true)
                                            navigator('/login');
                                        }
                                    }} />
                            </div>
                        </div>
                    </div>
                </>}

        </div>
    )
}