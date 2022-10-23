import React, { useEffect, useRef } from "react";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import "./index.css"

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function PopUp(props) {
    const openPopUp = useRef(props.open);

    useEffect(() => {
        window.addEventListener("popstate", (event) => {
            if (openPopUp.current) {
                openPopUp.current = false;
                window.history.go(1);
            }
        });
    }, [openPopUp.current]);

    useEffect(() => {
        if (props.open) {
            openPopUp.current = true;
        } else openPopUp.current = false;
    }, [props.open]);

    return (
        <Dialog
            onClose={props.handleClose}
            open={props.open}
            TransitionComponent={Transition}
            keepMounted
            aria-describedby="alert-dialog-slide-description"
        >
            {props.handleClose ? (
                <IconButton
                    aria-label="close"
                    onClick={props.handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
            <DialogTitle>{props.title}</DialogTitle>
            <DialogContent>{props.children}</DialogContent>
        </Dialog>
    )
}