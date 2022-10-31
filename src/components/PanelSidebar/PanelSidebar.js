import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateStudetInform } from "../../api/Core/Student_Manage";
import { removeItem } from "../../api/storage/storage";
import { GeneralContext } from "../../providers/GeneralContext";
import AvatarPhoto from "../common/avatar/AvatarPhoto";
import UploadPhoto from "../UploadPhoto/UploadPhoto";

import "./PanelSidebar.css";

const PanelSidebar = () => {
  const navigator = useNavigate();
  const { dataUser, onConfirmSetter, setConfirmPopupOpen, setDataUser } = useContext(GeneralContext)
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
      id:dataUser._id
    }
    let response =await updateStudetInform(dataUpdate);
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
              handleItemClick(0);
              navigator("/studentPanel");
            }}
          >
            داشبورد
          </div>
          <div
            className="sidebarContainerItemContaineritems"
            onClick={() => {
              handleItemClick(1);
              navigator("/studentPanel/editInfo");
            }}
          >
            ویرایش اطلاعات
          </div>
          <div
            className="sidebarContainerItemContaineritems"
            onClick={() => {
              handleItemClick(2);
              navigator("/studentPanel/myCourses");
            }}
          >
            دوره‌های من
          </div>
          <div
            className="sidebarContainerItemContaineritems"
            onClick={() => {
              handleItemClick(3);
              navigator("/studentPanel/allCourses");
            }}
          >
            لیست کل دوره‌ها
          </div>
          <div
            className="sidebarContainerItemContaineritems"
            onClick={() => {
              handleItemClick(4);
              navigator("/studentPanel/changePassword");
            }}
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
                setDataUser(null)
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
