import { useEffect, useState, useRef, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { addStudentToCourse, getCourseById } from "../../api/Core/Course";
import { getItem, removeItem, setItem } from "../../api/storage/storage";
import { Btn } from "../../components/common/Button/Btn";
import ShoppingList from "../../components/ShoppingList/ShoppingList";
import * as fa from "../../constants/persianStrings"
import { GeneralContext } from "../../providers/GeneralContext";
import "./index.css"

const ShoppingCourses = [
    {
        id: "01",
        name: "دوره پیشرفته  Front-End",
        teacher: "دکتر محمد بحرالعلوم",
        cost: "500000",
        img: require("../../assets/images/Courses/react.png"),
        sale: "40%",
        date: "1401/01/02"
    },
    {
        id: "02",
        name: "دوره پیشرفته  Front-End",
        teacher: "دکتر محمد بحرالعلوم",
        cost: "200000",
        img: require("../../assets/images/Courses/react.png"),
        sale: "0%",
        date: "1401/01/02"
    },
    {
        id: "03",
        name: "دوره پیشرفته  Front-End",
        teacher: "دکتر محمد بحرالعلوم",
        cost: "2000000",
        img: require("../../assets/images/Courses/react.png"),
        sale: "40%",
        date: "1401/01/02"
    },
    {
        id: "04",
        name: "دوره پیشرفته  Front-End",
        teacher: "دکتر محمد بحرالعلوم",
        cost: "450000",
        img: require("../../assets/images/Courses/react.png"),
        sale: "40%",
        date: "1401/01/02"
    },
    {
        id: "05",
        name: "دوره پیشرفته  Front-End",
        teacher: "دکتر محمد بحرالعلوم",
        cost: "300000",
        img: require("../../assets/images/Courses/react.png"),
        sale: "40%",
        date: "1401/01/02"
    },
];

export default function ShoppingCart() {
    const NewCourse = JSON.parse(getItem('NewCourse'))
    const userId = JSON.parse(getItem('id'))

    const [totalPay, setTotalPay] = useState(0);
    const navigator = useNavigate();
    const data = useRef([])
    const { setConfirmPopupOpen, onConfirmSetter } = useContext(GeneralContext)

    useEffect(() => {
        getCoursesById()
    }, [])

    //    useEffect(() => {
    //         GetTotalPay()
    //     }, []);

    const getCoursesById = () => {
        if (NewCourse && data.current.length != NewCourse.length) {
            NewCourse.map(async (item) => {
                getDetailShopp(item)
            })
        }
    }

    const getDetailShopp = async (item) => {
        let response = await getCourseById(item);
        if (response.data.result) {
            if (data.current.length != NewCourse.length) {
                data.current.push(response.data.result)
            }
        }
    }

    const GetTotalPay = () => {
        data.current.map((item) => {
            setTotalPay((Prev) => Prev + (item.cost * 1))
        })
    }

    const removeCourse = (course) => {
        onConfirmSetter("آیا برای حذف دوره اطمینان دارید؟", () => {
            let oldCourse = NewCourse;
            let New = oldCourse.filter(item => item != course._id)
            setItem('NewCourse', JSON.stringify(New));
            let NewRef = data.current.filter(item => item._id != course._id);
            data.current = NewRef
        })
        setConfirmPopupOpen(true)
    }

    const submitCourseToStudent = () => {
        data.current.map(async (item) => {
            const data = {
                userId: userId,
                courseId: item._id
            }
            let response = await addStudentToCourse(data);
            if (response.data.message) {
                // let NewRef = data.current.filter(id => id._id != item._id);
                // data.current = NewRef
                removeItem('NewCourse')
            }
        })
        data.current = null;

    }

    console.log(data.current.values);


    return (
        <div className="shoppingCart">

            {data.current.length === 0 ?
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
                            <ShoppingList myData={data.current} removeCourse={removeCourse} />
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
                                        submitCourseToStudent()
                                    }} />
                            </div>
                        </div>
                    </div>
                </>}

        </div>
    )
}