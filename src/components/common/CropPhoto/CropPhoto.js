import React, { useState, useRef } from 'react'
import 'react-image-crop/dist/ReactCrop.css'
import ReactCrop from 'react-image-crop'
import { canvasPreview } from "./canvasPreview"
import "./index.css"

export default function (props) {
    const [crop, setCrop] = useState({ aspect: 16 / 9 });
    const [scale, setScale] = useState(1)
    const [rotate, setRotate] = useState(0)
    const imgRef = useRef(null)
    const previewCanvasRef = useRef(null);
    const [completedCrop, setCompletedCrop] = useState(null)




    const cropImageNow = () => {
        if (imgRef.current.src.includes('base64')) {
            var newSize = canvasPreview(
                imgRef.current,
                previewCanvasRef.current,
                completedCrop,
                scale,
                rotate,
            )
            props.onChange(newSize)
        }
        else {
            toDataURL(imgRef.current.src, function (dataUrl) {
                imgRef.current.src = dataUrl;
                var newSize = canvasPreview(
                    imgRef.current,
                    previewCanvasRef.current,
                    completedCrop,
                    scale,
                    rotate,
                )
                props.onChange(newSize)

            })

        }

    }

    function toDataURL(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            var reader = new FileReader();
            reader.onloadend = function () {
                callback(reader.result);
            }
            reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
    }



    return (
        <div className={props.className}>
            <ReactCrop
                crop={crop}
                className={"crop"}
                onChange={(_, percentCrop) => setCrop(percentCrop)}
                onComplete={(c) => setCompletedCrop(c)}>
                <img src={props.src} ref={imgRef} width="100%" style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }} />
            </ReactCrop>

            <div className='btn_crop'>
                <button onClick={() => {
                    setRotate(Math.min(180, Math.max(-180, Number(90))))
                }}>Rotate 90</button>
                <button onClick={() => {
                    setRotate(Math.min(180, Math.max(-180, Number(0))))
                }}>Rotate 0</button>
                <button onClick={() => {
                    setScale(Number(2))
                }}>Scale 2</button>
                <button onClick={() => {
                    setScale(Number(1))
                }}>Scale 1</button>
            </div>
            <div>

                <canvas
                    ref={previewCanvasRef}
                    style={{
                        objectFit: 'contain',

                        display: "none"
                    }}
                />
            </div>
            <div className='crop'>
                <button onClick={cropImageNow}>Crop</button>
            </div>


        </div>
    )
}