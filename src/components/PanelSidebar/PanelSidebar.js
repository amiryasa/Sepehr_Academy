
import { useNavigate } from 'react-router-dom';

import "./PanelSidebar.css";

const PanelSidebar = () => {

  const items = document.getElementsByClassName("sidebarContainerItemContaineritems");

  const handleItemClick = (index) => {
    items[0].style.backgroundColor = '#F7FDFF';
    items[1].style.backgroundColor = '#F7FDFF';
    items[2].style.backgroundColor = '#F7FDFF';
    items[3].style.backgroundColor = '#F7FDFF';
    items[4].style.backgroundColor = '#F7FDFF';

    items[index].style.backgroundColor = '#DEF6FF';
  }

  const navigator = useNavigate();


  return (  
      <div className="sidebarContainer">
        <div className="sidebarContainerLogo"> <p>آموزشگاه کدنویسی بحر</p> </div>
        <div className="sidebarContainerInfo">
          <div className="sidebarContainerInfoPicture"> <div className="sidebarContainerInfoPictureIcon"></div> </div>
          <p className="sidebarContainerInfoUser"> MohammadRZ </p>
          <p className="sidebarContainerInfoRole"> Student </p>
        </div>
        <div className="sidebarContainerItemContainer">
          <div className="sidebarContainerItemContaineritems" 
          onClick={() => {
            handleItemClick(0);
            navigator('/studentPanel');
          }}
          > داشبورد </div>
          <div className="sidebarContainerItemContaineritems" 
          onClick={() => {
            handleItemClick(1);
            navigator('/studentPanel/editInfo');
          }}
          > ویرایش اطلاعات </div>
          <div className="sidebarContainerItemContaineritems" 
          onClick={() => {
            handleItemClick(2);
            navigator('/studentPanel/myCourses');
          }}
          > دوره‌های من </div>
          <div className="sidebarContainerItemContaineritems" 
          onClick={() => {
            handleItemClick(3);
            navigator('/studentPanel/allCourses');
          }}
          > لیست کل دوره‌ها </div>
          <div className="sidebarContainerItemContaineritems" 
          onClick={() => {
            handleItemClick(4);
            navigator('/studentPanel/changePassword');
          }}
          > تغییر رمز عبور</div>
        </div>
        <div className="sidebarContainerExit"
          onClick={() => navigator('/')}
        > خروج </div>
      </div>
  );
};

export { PanelSidebar };
