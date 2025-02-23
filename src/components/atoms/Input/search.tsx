import { SearchInputI } from "@/common/interface/components/input.interface";
import colors from "@/styles/colors";
import { Search } from "@mui/icons-material";
import { IconButton, InputAdornment, OutlinedInput, } from "@mui/material";
import { useState } from "react";

const SearchInput = ({ id, onChangeHandler, value, searchHandler } : SearchInputI) => {
    const [focus, setFocus] = useState(false);

    return(
        <OutlinedInput
            id={id}
            onChange={onChangeHandler}
            value={value}
            placeholder={'Search City'}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            endAdornment={
                <InputAdornment position="end">
                    <IconButton
                        onClick={searchHandler}
                    >
                        <Search style={{
                            color : colors.white
                        }} />
                    </IconButton>
                </InputAdornment>
            }
            style={{
                backgroundColor : focus ? colors.tertiary : colors.secondary,
                color : colors.white,
                borderRadius : 12,
                width : '20rem'
            }}
        />
    )
}

export default SearchInput;