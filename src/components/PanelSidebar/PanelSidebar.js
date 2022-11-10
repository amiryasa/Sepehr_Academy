import React, { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { updateStudetInform } from "../../api/Core/Student_Manage";
import { removeItem } from "../../api/storage/storage";
import { GeneralContext } from "../../providers/GeneralContext";
import AvatarPhoto from "../common/avatar/AvatarPhoto";
import UploadPhoto from "../UploadPhoto/UploadPhoto";

import "./PanelSidebar.css";

const PanelSidebar = () => {
  const navigator = useNavigate();
  const location = useLocation();
  const { dataUser, onConfirmSetter, setConfirmPopupOpen, setDataUser, setShopCourse } = useContext(GeneralContext)
  const [show, setShow] = useState(false);

  const items = document.getElementsByClassName(
    "sidebarContainerItemContaineritems"
  );

  const handleItemClick = (index) => {
    items[0].style.backgroundColor = "#F7FDFF";
    items[1].style.backgroundColor = "#F7FDFF";
    items[2].style.backgroundColor = "#F7FDFF";
    items[3].style.backgroundColor = "#F7FDFF";
    items[4].style.backgroundColor = "#F7FDFF";

    items[index].style.backgroundColor = "#DEF6FF";
  };

  const updatePhoto = async (img) => {
    const dataUpdate = {
      fullName: dataUser.fullName,
      email: dataUser.email,
      phoneNumber: dataUser.phoneNumber,
      birthDate: dataUser.birthDate,
      nationalId: dataUser.nationalId,
      profile: img,
      id: dataUser._id
    }
    let response = await updateStudetInform(dataUpdate);
    setDataUser(response.data.result)
    setShow(!show)
  }


  return (
    <>
      <div className="sidebarContainer">
        <div
          className="sidebarContainerLogo"
          onClick={() => {
            navigator("/");
          }}
        >
          <p onClick={() => navigator("/")}>آموزشگاه کدنویسی بحر</p>
        </div>
        <div className="sidebarContainerInfo">
          <AvatarPhoto
            size="md"
            changePic={() => { setShow(true) }}
            activation={dataUser.isActive ? "active" : 'deAvtice'}
            className="sidebarContainerInfoPicture"
            src={dataUser.profile} />

          <p className="sidebarContainerInfoUser"> {dataUser.fullName} </p>
          <p className="sidebarContainerInfoRole"> {dataUser.role} </p>
        </div>
        <div className="sidebarContainerItemContainer">
          <div
            className="sidebarContainerItemContaineritems"
            onClick={() => {
              navigator("/studentPanel");
            }}

            style={location.pathname === '/studentPanel' ? {cursor:'default',backgroundColor:"#DEF6FF"} :
            {cursor:'pointer',backgroundColor:"#F7FDFF"}}
          >
            داشبورد
          </div>
          <div
            className="sidebarContainerItemContaineritems"
            onClick={() => {
              handleItemClick(1);
              navigator("/studentPanel/editInfo");
            }}

            style={location.pathname === '/studentPanel/editInfo' ? {cursor:'default',backgroundColor:"#DEF6FF"} :
            {cursor:'pointer',backgroundColor:"#F7FDFF"}}
          >
            ویرایش اطلاعات
          </div>
          <div
            className="sidebarContainerItemContaineritems"
            onClick={() => {
              handleItemClick(2);
              navigator("/studentPanel/myCourses");
            }}

            style={location.pathname === '/studentPanel/myCourses' ? {cursor:'default',backgroundColor:"#DEF6FF"} :
            {cursor:'pointer',backgroundColor:"#F7FDFF"}}
          >
            دوره‌های من
          </div>
          <div
            className="sidebarContainerItemContaineritems"
            onClick={() => {
              handleItemClick(3);
              navigator("/studentPanel/allCourses");
            }}

            style={location.pathname === '/studentPanel/allCourses' ? {cursor:'default',backgroundColor:"#DEF6FF"} :
            {cursor:'pointer',backgroundColor:"#F7FDFF"}}
          >
            لیست کل دوره‌ها
          </div>
          <div
            className="sidebarContainerItemContaineritems"
            onClick={() => {
              handleItemClick(4);
              navigator("/studentPanel/changePassword");
            }}

            style={location.pathname === '/studentPanel/changePassword' ? {cursor:'default',backgroundColor:"#DEF6FF"} :
            {cursor:'pointer',backgroundColor:"#F7FDFF"}}
          >
            تغییر رمز عبور
          </div>
        </div>
        <div className="sidebarContainerExit"
          onClick={() => {

            onConfirmSetter("آیا برای خروج اطمینان دارید؟",
              () => {
                removeItem('token');
                removeItem('id');
                navigator("/");
                setDataUser(null);
                setShopCourse([])
              },
              () => {
                setConfirmPopupOpen(false)
              })
            setConfirmPopupOpen(true)
          }}>
          خروج
        </div>
      </div>
      {show && <UploadPhoto
        src={dataUser.profile}
        showPop={show}
        handleClose={(img) => { updatePhoto(img) }} />}
    </>
  );
};

export { PanelSidebar };
