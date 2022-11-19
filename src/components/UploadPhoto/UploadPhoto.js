import React, { useState, useRef, useEffect, useContext } from "react";
import axios from "axios";
import { FileUploader } from "react-drag-drop-files";
import { Btn } from "../common/Button/Btn.js";
import PopUp from "../common/PopUp/PopUp.js"
import * as fa from "../../constants/persianStrings"
import "./index.scss"
import AvatarCostomize from "../common/avatar/index.js";
import imagePicker from "./imagePicker"
import CropPhoto from "../common/CropPhoto/CropPhoto.js";
import { GeneralContext } from "../../providers/GeneralContext.js";
import { toast } from "react-toastify";
import { trackPromise } from "react-promise-tracker";

const fileTypes = ["JPG", "PNG", "GIF"];

export default function UploadPhoto(props) {
    const { dataUser } = useContext(GeneralContext)
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
        if (!filesImg) toast.warning('لطفا عکس انتخاب کنید!')
        else {

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
                    else toast.warning('لطفا فایل با پسوند های jpg,png آپلود کنید.')
                })
                .catch(function (response) {
                    console.log(response);
                });
        }


    }



    return (
        <>
            <PopUp
                open={props.showPop}
                handleClose={() => {
                    trackPromise(uploadImgToDatabase())
                }}
                closeBtn
                title={"عکس پروفایل"}
                handleCloseWithOutSave={props.handleCloseWithOutSave}>

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
                        <AvatarCostomize
                            option
                            name={dataUser.fullName}
                            size="lg"
                            className="avaratPic"
                            src={img}
                            optionClick={() => {
                                if (img)
                                    setOptionPhoto(true)
                            }} />

                        <div className="btnEditPhoto">
                            <input
                                hidden
                                type="file"
                                accept="image/*"
                                onChange={onUploadingImg}
                                ref={upsertImgRef}
                            />
                            <Btn
                                text={fa.INSERT_NEW_CHANGES}
                                color="goal"
                                variant="contained"
                                onChange={() => {
                                    trackPromise(uploadImgToDatabase())
                                }}
                                elementClass="smallBtn"
                            />
                            <Btn
                                text={fa.EDIT_PHOTO}
                                color="restore"
                                variant="contained"
                                onChange={() => {
                                    setImgRef(false);
                                    addImgOkHandler()
                                }}
                                elementClass="smallBtn"
                            />
                            <FileUploader handleChange={handleChange} name="file" accept="image/*" types={fileTypes} />
                            {/* <Btn
                                text={fa.REMOVE_PHOTO}
                                color="warning"
                                variant="contained"
                                onChange={() => {
                                    setImg(null)
                                }}
                                elementClass="smallBtn"
                            /> */}

                            {/* <Btn
                                text={fa.OPTIOANL_PHOTO}
                                color="info"
                                variant="contained"
                                onChange={() => {
                                    if (img)
                                        setOptionPhoto(true)
                                }}
                                elementClass="smallBtn" */}

                        </div>





                    </div>
                }
            </PopUp>
        </>)
}