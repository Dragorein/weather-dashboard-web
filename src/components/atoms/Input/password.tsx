import { PasswordInputI } from "@/interface/components/input.interface";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"

const PasswordInput = ({ id, name, onChangeHandler, value, placeholder, showHandler, required = false, rows = 1, show = false } : PasswordInputI) => {
    return(
        <FormControl>
            <InputLabel htmlFor={id}>{name}</InputLabel>
            <OutlinedInput
                id={id}
                onChange={onChangeHandler}
                value={value}
                required={required}
                placeholder={placeholder}
                rows={rows}
                label={name}
                type={show ? "text" : 'password'}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            onClick={showHandler}
                        >
                            {show ? <Visibility /> : <VisibilityOff/>}
                        </IconButton>
                    </InputAdornment>
                }
            />
        </FormControl>
    )
}

export default PasswordInput;