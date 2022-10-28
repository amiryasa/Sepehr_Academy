import * as React from 'react';
import { Avatar } from '@mui/material';
import "./index.scss"

export default function AvatarPhoto(props) {
    return (
        <>
            <Avatar
                className={`${props.size === "lg" ? "lg-avatar" : "sm-avatar"
                    } ${props.className} 
               `}
                src={props.src}
                sx={{ width: props.width, height: props.width }} />
            <div className="sidebarContainerInfoPictureIcon"></div>
        </>
    )
}