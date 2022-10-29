import * as React from 'react';
import { Avatar } from '@mui/material';
import { Tooltips } from "../../Tooltive/Tooltips";
import "./index.scss"
import photo from "../../../assets/images/Register/photo.png"

export default function AvatarPhoto(props) {

    return (
        <div className={props.className}>
            <Tooltips color={props.activation === 'active' ? "#04A641" : "red"} message={props.activation === 'active' ? 'کاربری فعال' : "کاربر غیر فعال"} >
                <Avatar
                    className={`${props.size === "lg" ? "lg-avatar" :
                        props.size === "md" ? "md-avatar" :
                            props.size === "xl" ? "xl-avatar" : "sm-avatar"
                        } ${props.classNameAvatar} 
               `}
                    src={props.src}
                    style={{
                        borderColor: `${props.activation === 'active' ? "green" : "red"}`,
                        borderStyle: "solid",
                        borderWidth: "1.5px"
                    }}
                    sx={{
                        width: props.width,
                        height: props.width
                    }}
                />
            </Tooltips>
            <div
                className={`${props.size === 'xl' ? "sidebarContainerInfoPictureIconXL" :
                    props.size === 'lg' ? "sidebarContainerInfoPictureIconLG" : "sidebarContainerInfoPictureIcon"} ${props.classNameAddPic} `}
                onClick={props.changePic}>
            </div>
        </div>
    )
}