import React, { useState, useRef, useEffect } from "react";
import { Btn } from "../common/Button/Btn.js";
import PopUp from "../common/PopUp/PopUp.js"
import * as fa from "../../constants/persianStrings"
import "./index.scss"
import AvatarCostomize from "../common/avatar/index.js";
import imagePicker from "./imagePicker"

export default function UploadPhoto(props) {
    const [imgVolumeLimit, setImgVolumeLimit] = useState(100000);
    const [imgLimitViolated, setImgLimitViolated] = useState(false);
    const [img, setImg] = useState(null);
    const upsertImgRef = useRef(null);
    const [imgRef, setImgRef] = useState(false);

    useEffect(() => {
        if (!imgRef) return;
        upsertImgRef.current.click();
    }, [imgRef]);

    const addImgOkHandler = () => {

        //   if (img != null) {



        //     //   toast.info(msg);
        //       upsertImgRef.current.value = "";
        //       setImgRef(true);
        //       return;


        // toast.info(msg);
        upsertImgRef.current.click();


    };

    const onUploadingImg = async (e) => {
        debugger
        const files = e.target.files[0];
        if (
            files.type === "image/png" ||
            files.type === "image/jpeg" ||
            files.type === "image/jpg"
        ) {
            let blob = await imagePicker(files);

            if (blob === undefined) return;
            if (blob.size > imgVolumeLimit) {

                setImgLimitViolated(true);
                // toast.error("حجم عکس بیش از حد مجاز است.");
                return;
            }

            setImgLimitViolated(false);
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
                (imgUpdateHandler(reader.result));
            };
        } else {
            // toast.error("فرمت فایل درست نیست.");
            return;
        }
    };

    const imgUpdateHandler = (img) => {
        // if (storageUser != null) {
        //     const data = {
        //         id: storageUser?.Id,
        //         picture: img,
        //     };

        if (imgLimitViolated) return;
        setImg(img);

        //     // await service.imgUpdate(data);
        //     setImg(img);
        // }
    };

    return (
        <>
            <PopUp
                open={props.showPop}
                handleClose={props.handleClose}
                title={"عکس پروفایل"}>
                <div className="editPohotoForm">
                    {/* <div className="Photo"></div> */}
                    <AvatarCostomize name="naghme" size="lg" className="avaratPic" src={img} />
                    <div className="btnEditPhoto">
                        <input
                            hidden
                            type="file"
                            accept="image/*"
                            onChange={onUploadingImg}
                            ref={upsertImgRef}
                        />
                        <Btn text={fa.EDIT_PHOTO}
                            color="restore"
                            variant="contained"
                            onChange={() => {
                                setImgRef(false);
                                addImgOkHandler()
                            }} />
                        <Btn text={fa.REMOVE_PHOTO} color="warning" variant="contained" />
                    </div>
                </div>
            </PopUp>
        </>)
}