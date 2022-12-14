import { useEffect, useState, useRef, useContext } from "react";
import { trackPromise } from "react-promise-tracker";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { addStudentToCourse, getCourseById } from "../../api/Core/Course";
import { getStudentById } from "../../api/Core/Student_Manage";
import { getItem } from "../../api/storage/storage";
import { Btn } from "../../components/common/Button/Btn";
import { ShoppingList } from "../../components/ShoppingList/ShoppingList";
import * as fa from "../../constants/persianStrings"
import { GeneralContext } from "../../providers/GeneralContext";
import "./index.css"


export default function ShoppingCart() {
    const { shoppCourse, setShopCourse } = useContext(GeneralContext)
    const userId = JSON.parse(getItem('id'))
    const role = getItem('role')
    const [totalPay, setTotalPay] = useState(0);
    const navigator = useNavigate();
    const data = useRef([])
    const [showShop, setShowShop] = useState([])
    const oldData = useRef([])
    const { setConfirmPopupOpen, onConfirmSetter, setBackShop } = useContext(GeneralContext)

    useEffect(() => {
        getCoursesById();
        if (userId && role === 'student') trackPromise(getMyOldCourse(userId))
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
                trackPromise(getDetailShopp(item))
            })
        }
    }

    const getDetailShopp = async (item) => {
        let response = await getCourseById(item);
        if (response.data.result) {
            if (data.current.length != shoppCourse.length) {
                if (oldData.current && oldData.current.length > 0) {
                    if (oldData.current.includes(response.data.result._id)) {
                        toast.warning('???????? ???????????? ?????? ???????? ?????????????? ?????? ??????!');
                        setShopCourse([])
                        return
                    }
                    else data.current.push(response.data.result)
                } else
                    data.current.push(response.data.result)
            }

        }
    }

    const GetTotalPay = (showShop01) => {

        let total = 0;
        // data.current.map((item) => {
        //     total += item.cost
        // })

        showShop01.forEach((item) => {
            total += item.cost
        })

        return (total);
    }

    const removeCourse = (course) => {
        onConfirmSetter("?????? ???????? ?????? ???????? ?????????????? ????????????", () => {
            let newCourseToShop = showShop.filter(item => item._id != course._id);
            setShowShop(newCourseToShop)
            let newShop = shoppCourse.filter(item => item != course._id)
            setShopCourse(newShop)

            toast.success(' ???????? ???? ???????????? ?????? ????.')
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
            toast.success('???????? ???????? ???? ???????????? ?????????? ????!');
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
                    <p className="emptyShoppingTitle">?????? ???????? ?????? ???????? ??????!</p>
                    <p className="insertInShoppingCart" onClick={() => navigator('/courses')}>???????????? ???? ?????? ????????...</p>
                </>
                :
                <>
                    <div className="shoppingCardTitle">
                        <p>?????? ????????</p>
                        <hr></hr>
                    </div>
                    <div className="detailShoppingCart">

                        <div className="listShoppingCourse">
                            <ShoppingList myData={showShop} removeCourse={removeCourse} />
                        </div>
                        <div className="totalShopping">
                            <div className="describeShopping">
                                <p>???????????? ???????? ????????</p>
                                <hr></hr>
                                <div className="allCoursePay">
                                    <p>?????????? ????:</p>
                                    <p>{showShop && showShop.length}</p>
                                </div>
                                <div className="allSaleCourse">
                                    <p>??????????</p>
                                    <p>0%</p>
                                </div>
                                <hr></hr>
                                <div className="totalPay">
                                    <p>?????? ????</p>
                                    <p>{GetTotalPay(showShop)} ??</p>
                                </div>
                            </div>
                            <div className="payShoppingCart">
                                <Btn
                                    color="info"
                                    text={fa.PAY}
                                    elementClass="mediumBtnCh"
                                    variant="contained"
                                    onChange={() => {
                                        if (userId) {
                                            submitCourseToStudent()
                                            navigator('/courses');
                                        }

                                        else {

                                            onConfirmSetter('???????????? ???? ???????? ?????????????????? ???????? ???????????? ???? ????????????? ???????? ???????????? ', () => {
                                                setBackShop(true);
                                                navigator('/login');
                                            })
                                            setConfirmPopupOpen(true)

                                        }
                                    }} />
                            </div>
                        </div>
                    </div>
                </>}

        </div>
    )
}