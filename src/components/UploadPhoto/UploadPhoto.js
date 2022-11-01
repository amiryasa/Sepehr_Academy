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

    const [optionPhoto, setOptionPhoto] = useState(false);

    useEffect(() => {
        if (props.src) {
            setImg(props.src)
        }
    }, [])


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
        const files = e.target.files[0];
        setFileImg(e.target.files[0])
        if (
            files.type === "image/png" ||
            files.type === "image/jpeg" ||
            files.type === "image/jpg"
        ) {
            console.log(files, "files");
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

    // const [file, setFile] = useState(null);
    const handleChange = async (file) => {
        setFileImg(file)
        let blob = await imagePicker(file);

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

    };

    const uploadImgToDatabase = async () => {
        let formData = new FormData();
        console.log(filesImg, "img");
        formData.append('image', filesImg);

        axios({
            method: "post",
            url: "https://api.noorgon.sepehracademy.ir/api/upload/image",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(function (response) {
                //handle success
                console.log(response.data.result);
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
                            setOptionPhoto(false)
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