import { popupErrorI } from "@/common/interface/components/error.interface";
import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";

const ErrorPopup = ({ message, onClose } : popupErrorI) => {
    const [open, setOpen] = useState<boolean>(true);

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === "clickaway") return;
        setOpen(false);
        if (onClose) onClose();
    };

    return (
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
            <Alert sx={{ minWidth : '25vw'}} onClose={handleClose} severity="error" variant="filled">
                {message}
            </Alert>
        </Snackbar>
    );
};

export default ErrorPopup;