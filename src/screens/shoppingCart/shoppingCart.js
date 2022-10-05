import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Btn } from "../../components/common/Button/Btn";
import ShoppingList from "../../components/ShoppingList/ShoppingList";
import * as fa from "../../constants/persianStrings"
import "./index.css"

const ShoppingCourses = [
    {
        id: "01",
        name: "دوره پیشرفته  Front-End",
        teacher: "دکتر محمد بحرالعلوم",
        cost: "50",
        img: require("../../assets/images/Courses/react.png"),
        sale: "40%",
        date: "1401/01/02"
    },
    {
        id: "02",
        name: "دوره پیشرفته  Front-End",
        teacher: "دکتر محمد بحرالعلوم",
        cost: "20",
        img: require("../../assets/images/Courses/react.png"),
        sale: "0%",
        date: "1401/01/02"
    },
    {
        id: "03",
        name: "دوره پیشرفته  Front-End",
        teacher: "دکتر محمد بحرالعلوم",
        cost: "20",
        img: require("../../assets/images/Courses/react.png"),
        sale: "40%",
        date: "1401/01/02"
    },
    {
        id: "04",
        name: "دوره پیشرفته  Front-End",
        teacher: "دکتر محمد بحرالعلوم",
        cost: "40",
        img: require("../../assets/images/Courses/react.png"),
        sale: "40%",
        date: "1401/01/02"
    },
    {
        id: "05",
        name: "دوره پیشرفته  Front-End",
        teacher: "دکتر محمد بحرالعلوم",
        cost: "30",
        img: require("../../assets/images/Courses/react.png"),
        sale: "40%",
        date: "1401/01/02"
    },
];

export default function ShoppingCart() {
    const [totalPay, setTotalPay] = useState(0);
    const [data, setData] = useState(ShoppingCourses);
    const navigator = useNavigate();

    useEffect(() => {
        GetTotalPay()
    }, [data]);

    const GetTotalPay = () => {
        data.map((item) => {
            setTotalPay((Prev) => Prev + (item.cost * 1))
        })
    }

    const removeCourse = (course) => {
        const newData = data.filter(item => item.id != course.id)
        setData(newData)
    }


    return (
        <div className="shoppingCart">

            {data.length === 0 ?
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
                            <ShoppingList myData={data} removeCourse={removeCourse} />
                        </div>
                        <div className="totalShopping">
                            <div className="describeShopping">
                                <p>مدیریت صورت حساب</p>
                                <hr></hr>
                                <div className="allCoursePay">
                                    <p>تعداد کل:</p>
                                    <p>{data.length}</p>
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
                                    type="submit" />
                            </div>
                        </div>
                    </div>
                </>}

        </div>
    )
}