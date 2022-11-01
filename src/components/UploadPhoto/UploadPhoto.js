import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { FileUploader } from "react-drag-drop-files";
import { Btn } from "../common/Button/Btn.js";
import PopUp from "../common/PopUp/PopUp.js"
import * as fa from "../../constants/persianStrings"
import "./index.scss"
import AvatarCostomize from "../common/avatar/index.js";
import imagePicker from "./imagePicker"
import CropPhoto from "../common/CropPhoto/CropPhoto.js";
import { uploadPhotoDataBase } from "../../api/Core/Student_Manage.js";

const fileTypes = ["JPG", "PNG", "GIF"];

export default function UploadPhoto(props) {
    const [imgVolumeLimit, setImgVolumeLimit] = useState(1000000);
    const [imgLimitViolated, setImgLimitViolated] = useState(false);
    const [img, setImg] = useState(null);
    const upsertImgRef = useRef(null);
    const [imgRef, setImgRef] = useState(false);
    const [filesImg, setFileImg] = useState()
    const fileName = useRef('')
    const [optionPhoto, setOptionPhoto] = useState(false);

    useEffect(() => {
        if (props.src) {
            setImg(props.src)
            fileName.current = props.src.split('/')[7]
        }
    }, [])


    useEffect(() => {
        if (!imgRef) return;
        upsertImgRef.current.click();
    }, [imgRef]);

    const addImgOkHandler = () => {
        upsertImgRef.current.click();
    };

    const onUploadingImg = async (e) => {
        const files = e.target.files[0];
        fileName.current = files.name
        if (
            files.type === "image/png" ||
            files.type === "image/jpeg" ||
            files.type === "image/jpg"
        ) {
            let blob = await imagePicker(files);
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

    function dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);

        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }

        return new File([u8arr], filename, { type: mime });
    }

    const handleChange = async (file) => {
        let blob = await imagePicker(file);
        fileName.current = file.name
        setImgLimitViolated(false);
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
            (imgUpdateHandler(reader.result));
        };

    };

    const imgUpdateHandler = (img) => {
        if (imgLimitViolated) return;
        setImg(img);
        var fileImg = dataURLtoFile(img, fileName.current);
        setFileImg(fileImg)
    };



    const uploadImgToDatabase = async () => {
        let formData = new FormData();
        formData.append('image', filesImg);
        axios({
            method: "post",
            url: "https://api.noorgon.sepehracademy.ir/api/upload/image",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(function (response) {

                if (response.data.result)
                    props.handleClose(response.data.result)
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });

    }



    return (
        <>
            <PopUp
                open={props.showPop}
                handleClose={() => {
                    uploadImgToDatabase()
                }}
                title={"عکس پروفایل"}>

                {optionPhoto ?
                    <CropPhoto
                        className="crop_photo"
                        src={img}
                        onChange={(c) => {
                            setImg(c);
                            setOptionPhoto(false);
                            var fileImg = dataURLtoFile(c, fileName.current);
                            setFileImg(fileImg)
                        }} />
                    :
                    <div className="editPohotoForm">
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
                            <FileUploader handleChange={handleChange} name="file" accept="image/*" types={fileTypes} />
                            <Btn
                                text={fa.REMOVE_PHOTO}
                                color="warning"
                                variant="contained"
                                onChange={() => {
                                    setImg(null)
                                }} />
                        </div>
                        <Btn
                            text={fa.OPTIOANL_PHOTO}
                            color="info"
                            variant="contained"
                            onChange={() => {
                                if (img)
                                    setOptionPhoto(true)
                            }} />
                    </div>
                }
            </PopUp>
        </>)
}