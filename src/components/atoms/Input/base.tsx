import { baseInputI } from "@/interface/components/input.interface";
import { TextField } from "@mui/material";

const BaseInputText = ({ id, onChangeHandler, value, placeholder, required = false, rows = 1 } : baseInputI) => {
    return(
        <TextField
            id={id}
            onChange={onChangeHandler}
            value={value}
            required={required}
            placeholder={placeholder}
            rows={rows}
        />
    )
}

export default BaseInputText;