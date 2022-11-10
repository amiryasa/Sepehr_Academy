import React, { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { getItem } from "../../api/storage/storage";

import { PanelSidebar } from '../../components/PanelSidebar/PanelSidebar';
import { GeneralContext } from "../../providers/GeneralContext";

import './StudentPanel.css'

const StudentPanel = () => {
  const navigator = useNavigate();
  const userId = JSON.parse(getItem('id'))

  const { shoppCourse} = useContext(GeneralContext);


  return (
    <>
      {userId && <div className="studentPanelContainer">
        <PanelSidebar />
        <Outlet />

        {shoppCourse.length > 0 ? <div
          className="loginSearch"
          onClick={() => navigator("/shoppingCart")}
        >
          {shoppCourse.length > 0 && <p className="numberOfShopp">{shoppCourse && shoppCourse.length}</p>}
        </div> : ''}
      </div>}
    </>
  );
}

export { StudentPanel };