import React, { useContext, useEffect, useRef } from "react";
import Slide from '@mui/material/Slide';
import DialogContent from '@mui/material/DialogContent';
import Dialog from '@mui/material/Dialog';
import { Btn } from "../Button/Btn";
import * as fa from "../../../constants/persianStrings"
import "./ConfirmPopUp.css"
import { GeneralContext } from "../../../providers/GeneralContext";
import PopUp from "../PopUp/PopUp";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ConfirmPopUp() {
    const { confirmMsg,
        confirmCallback,
        rejectCallback,
        confirmPopupOpen,
        setConfirmPopupOpen, } = useContext(GeneralContext)

    useEffect(() => {
        window.addEventListener("popstate", (event) => {
            setConfirmPopupOpen(false);
        });
    }, [confirmPopupOpen]);

    const onConfirm = () => {
        confirmCallback();
        setConfirmPopupOpen(false);
    };

    const onReject = () => {
        if (rejectCallback) rejectCallback();
        setConfirmPopupOpen(false);
    };

    return (
        <PopUp
            open={confirmPopupOpen}
            onClose={() => {
                setConfirmPopupOpen(false);
            }}
            className="confirm-popup">
            <p className="confirm-popup-content">
                {confirmMsg}
            </p>
            <div className="confirm-popup-btns-wrapper">
                <Btn
                    onChange={onConfirm}
                    variant="contained"
                    color="goal"
                    text={fa.ACCEPT_ACT}
                    elementClass="smallBtnCh" />
                <Btn
                    onChange={onReject}
                    color="warning"
                    variant="contained"
                    text={fa.CANCEL_ACT}
                    className="btnRejecet"
                    elementClass="smallBtnCh" />

            </div>
        </PopUp>
    )
}