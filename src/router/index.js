import {
    Route,
    Routes,
} from "react-router-dom";
import { useContext } from "react";
import { CourseDetail } from "../screens/courseDetail";
import { NewsDetail } from "../screens/newsDetail";
import { Courses } from "../screens/courses/Courses";
import { News } from "../screens/news/News";
import { NotFound } from "../screens/notFound/NotFound";
import { PageLayout } from "../components/pageLayout/PageLayout";
import { MainbarEditInfo } from "../components/MainbarEditInfo/MainbarEditInfo";
import { MainbarMyCourses } from "../components/MainbarMyCourses/MainbarMyCourses";
import { MainbarAllCourses } from "../components/MainbarAllCourses/MainbarAllCourses";
import { MainbarPassword } from "../components/MainbarPassword/MainbarPassword";
import { MainbarDashboard } from "../components/MainbarDashboard/MainbarDashboard";
import { Home } from "../screens/home/Home";
import { Login } from "../screens/login/Login";
import { Register } from "../screens/register/Register";
import { ForgotPass } from "../screens/forgotPass/ForgotPass";
import * as path from './path'
import { Tooltips } from "../components/Tooltive/Tooltips";
import { Compair } from "../components/Compair/Compair";
import { SelectBox } from "../components/common/SelectBox/SelectBox";
import ShoppingCart from "../screens/shoppingCart/shoppingCart";
import Translate from "../screens/translate/Translate";
import { getItem } from "../api/storage/storage";
import ProtectedRoute from "./ProtectedRoute"
import { GeneralContext } from "../providers/GeneralContext";
import { NotAllow } from "../screens/notAllow/NotAllow";
import { ChatBox } from "../components/ChatBox/ChatBox";
import { AboutUs } from "../screens/AboutUs/AboutUs";
import { ContactUs } from "../screens/ContactUs/ContactUs";

export default function OurRoutes() {
    const storageUser = getItem("id")
    const { dataUser } = useContext(GeneralContext)

    return (
        <Routes>
            <Route path={path.LAYOUT_PAGE} element={<PageLayout />}>
                <Route index element={<Home />} />
                <Route path={path.LOGIN} element={<Login />} />
                <Route path={path.REGISTER} element={<Register />} />
                <Route path={path.FORGET_PASS} element={<ForgotPass />} />
                <Route path={path.COURSES} element={<Courses />} />
                <Route path={path.NEWS} element={<News />} />
                <Route path={path.COURSE_DETAIL} element={<CourseDetail />} />
                <Route path={path.NEWS_DETAIL} element={<NewsDetail />} />
                <Route path={path.COMPAIR} element={<Compair />} />
                <Route path={path.SHOPPING_CART} element={<ShoppingCart />} />
                <Route path={path.TRANSLATE} element={<Translate />} />
                <Route path={path.ABOUT_US} element={<AboutUs/>} />
                <Route path={path.CONTACT_US} element={<ContactUs/>} />
            </Route>

            <Route path={path.STIDENT_PANEL} element={<ProtectedRoute isAllowed={storageUser} dataUser={dataUser} />} >

                <Route index element={<MainbarDashboard />} />
                <Route path={path.EDIT_INFO} element={<MainbarEditInfo />} />
                <Route path={path.MY_COURSE} element={<MainbarMyCourses />} />
                <Route path={path.ALL_COURSES} element={<MainbarAllCourses />} />
                <Route path={path.CHANGE_PASS} element={<MainbarPassword />} />
            </Route>
            <Route path={path.TEST} element={<SelectBox />} />
            <Route path={'/405'} element={<NotAllow/>} />
            <Route path={'/chat'} element={<ChatBox/>} />
            <Route path={path.TEST} element={<Tooltips />} />
            <Route path={path.ANOTHER_URL} element={<NotFound />} />

        </Routes>
    )
}