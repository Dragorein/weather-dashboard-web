import { baseInputI } from "@/interface/components/input.interface";
import { FormControl, InputLabel, OutlinedInput } from "@mui/material";

const BaseInputText = ({ id, name, onChangeHandler, value, placeholder, required = false, rows = 1 } : baseInputI) => {
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
            />
        </FormControl>
    )
}

export default BaseInputText;