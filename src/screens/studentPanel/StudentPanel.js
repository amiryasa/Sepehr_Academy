import React from "react";
import { Outlet } from "react-router-dom";
import { getItem } from "../../api/storage/storage";

import { PanelSidebar } from '../../components/PanelSidebar/PanelSidebar';

import './StudentPanel.css'

const StudentPanel = () => {
  const userId = JSON.parse(getItem('id'))

  return (
    <>
      {userId && <div className="studentPanelContainer">
        <PanelSidebar />
        <Outlet />
      </div>}
    </>
  );
}

export { StudentPanel };