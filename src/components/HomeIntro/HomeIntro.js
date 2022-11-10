import { useContext, useState } from "react";
import { Btn } from '../../components/common/Button/Btn';
import { Scrool } from '../../components/Scrool/Scrool';
import * as fa from "../../constants/persianStrings";
import { GeneralContext } from "../../providers/GeneralContext"
import { Input } from "../common/Input/Input";
import PopUp from "../common/PopUp/PopUp";
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';

import './HomeIntro.css';

const HomeIntro = () => {
    const { language, themePage } = useContext(GeneralContext);
    const [openPopUp, setOpenPopUp] = useState(false)
    const [search, setSearch] = useState()


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
                    click='courses'
                />
            </div>

            <Scrool />
            {openPopUp &&
                <PopUp
                    handleClose={() => { setOpenPopUp(false) }}
                    open={openPopUp}
                    className='popUpSearch'
                    closeBtn
                    title="جستجو سریع">
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <Input title="جستجو" value={search} onChange={setSearch} variant="standard" />
                    </Box>
                </PopUp>}
        </div>
    );


}

export { HomeIntro };