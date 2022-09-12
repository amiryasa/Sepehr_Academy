import { Outlet } from "react-router-dom";

import { PanelSidebar } from '../../components/PanelSidebar/PanelSidebar';

import './StudentPanel.css'

const StudentPanel = () => {
  return (
    <div className="studentPanelContainer">
      <PanelSidebar />
      <Outlet />
    </div>
  );
}

export { StudentPanel };