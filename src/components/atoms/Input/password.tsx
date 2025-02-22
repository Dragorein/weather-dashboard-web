import { PasswordInputI } from "@/interface/components/input.interface";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import colors from "@/styles/colors";
import { useState } from "react";

const PasswordInput = ({ id, name, onChangeHandler, value, placeholder, showHandler, required = false, rows = 1, show = false } : PasswordInputI) => {
    const [focus, setFocus] = useState(false);

    return(
        <FormControl>
            <InputLabel
                htmlFor={id}
                style={{
                    color : colors.white
                }}
            >{name}</InputLabel>
            <OutlinedInput
                id={id}
                onChange={onChangeHandler}
                value={value}
                required={required}
                placeholder={placeholder}
                rows={rows}
                label={name}
                type={show ? "text" : 'password'}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            onClick={showHandler}
                        >
                            {show ?
                                <Visibility style={{
                                    color : colors.white
                                }} /> 
                                :
                                <VisibilityOff style={{
                                    color : colors.white
                                }} />}
                        </IconButton>
                    </InputAdornment>
                }
                style={{
                    backgroundColor : focus ? colors.tertiary : colors.secondary,
                    color : colors.white,
                    borderRadius : 12,
                }}
            />
        </FormControl>
    )
}

export default PasswordInput;