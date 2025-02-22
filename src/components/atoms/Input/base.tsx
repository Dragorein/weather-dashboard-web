import { baseInputI } from "@/interface/components/input.interface";
import colors from "@/styles/colors";
import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import { useState } from "react";

const BaseInputText = ({ id, name, onChangeHandler, value, placeholder, required = false, rows = 1 } : baseInputI) => {
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
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                style={{
                    backgroundColor : focus ? colors.tertiary : colors.secondary,
                    color : colors.white,
                    borderRadius : 12,
                }}
            />
        </FormControl>
    )
}

export default BaseInputText;