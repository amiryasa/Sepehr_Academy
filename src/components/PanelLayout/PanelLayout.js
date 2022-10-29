import { Outlet } from "react-router-dom";
import { PanelSidebar } from "./../PanelSidebar/PanelSidebar";

import "./PanelLayout.css";


const PanelLayout = () => {

  return (
    <div className="panelLayout">
      <PanelSidebar />
      <Outlet />
    </div>
  );
};

export { PanelLayout };
