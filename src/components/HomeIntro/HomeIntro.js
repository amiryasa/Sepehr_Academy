import { useContext, useEffect, useState } from "react";
import { Btn } from '../../components/common/Button/Btn';
import { Scrool } from '../../components/Scrool/Scrool';
import * as fa from "../../constants/persianStrings";
import { GeneralContext } from "../../providers/GeneralContext"
import { Input } from "../common/Input/Input";
import PopUp from "../common/PopUp/PopUp";
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import _ from "lodash";

import './HomeIntro.css';
import { getAllCourse } from "../../api/Core/Course";
import { trackPromise } from "react-promise-tracker";
import { useNavigate } from "react-router-dom";

const HomeIntro = () => {
    const navigator = useNavigate();
    const { language, themePage } = useContext(GeneralContext);
    const [openPopUp, setOpenPopUp] = useState(false)
    const [courseData, setCoursesData] = useState();
    const [searchResult, setSearchResult] = useState()
    const [search, setSearch] = useState();
    const [isTouch, setIsTouch] = useState(false)

    useEffect(() => {
        trackPromise(getCourses());
    }, []);

    const getCourses = async () => {
        let response = await getAllCourse();

        let rightData = response.data.result.map((item) => ({
            image: item.lesson.image,
            title: item.title,
            topics: item.lesson.topics,
            id: item._id,
        }));

        setCoursesData(rightData);

    }

    const isResult = (items, token) => {
        let result = 0;
        items.forEach(item => {
            if (_.startsWith(item, token)) {
                result = result + 1;
            }
        })
        return result;
    }

    const searchHandler = (even) => {

        const result = courseData.filter((item) => {
            return (isResult(item.topics, even.target.value) === 1)
        })

        setSearchResult(result);


        setIsTouch(true);

    }


    return (
        <div className={language === 'fa' ? "introContainer" : "introContainerEn"}>
            <h1 className={`${themePage}Intro`} > {language === 'fa' ? fa.TITLE_HOME_PAGE : fa.TITLE_HOME_PAGE_EN}</h1>
            <hr></hr>
            <p> {language === 'fa' ? fa.MAIN_HOME_INTRO : fa.MAIN_HOME_INTRO_EN} </p>
            <div className='btn-home'>
                <Btn
                    color='goal'
                    text={language === 'fa' ? fa.START_LEARN : fa.START_LEARN_EN}
                    elementClass='largeBtn'
                    variant="contained"
                    onChange={() => { setOpenPopUp(true) }}
                />
                <Btn
                    color='info'
                    text={language === 'fa' ? fa.SHOW_COURSE : fa.SHOW_COURSE_EN}
                    margin='0 -65px 0 0'
                    elementClass='largeBtn'
                    variant="contained"
                    onChange={() => {
                        navigator('/courses');
                    }}
                />
            </div>

            <Scrool />
            {openPopUp &&
                <PopUp
                    handleClose={() => { setOpenPopUp(false) }}
                    open={openPopUp}
                    className='popUpSearch'
                    closeBtn
                    title="به دنبال چه دوره‌ای هستید؟"
                    handleCloseWithOutSave={() => { setOpenPopUp(false) }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <Input title="جستجو" value={search} onChange={(event) => searchHandler(event)} variant="standard" />
                    </Box>
                    <div className="searchResultHolder">

                        {searchResult ? searchResult.map((item, key) => (
                            <div className="searchResultItem" onClick={() => { navigator(`/courseDetail/${item.id}`) }}> <img src={item.image} alt="" /> <p> {item.title} </p></div>
                        )) : ''}

                        {isTouch && searchResult.length === 0 ? <p className="noResultInSearch"> دوره‌ای یافت نشد!</p> : ''}

                    </div>
                </PopUp>
            }
        </div>
    );


}

export { HomeIntro };