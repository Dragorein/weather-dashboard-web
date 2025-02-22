import { SearchInputI } from "@/interface/components/input.interface";
import { Search } from "@mui/icons-material";
import { IconButton, InputAdornment, OutlinedInput, } from "@mui/material";

const SearchInput = ({ id, onChangeHandler, value, searchHandler } : SearchInputI) => {
    return(
        <OutlinedInput
            id={id}
            onChange={onChangeHandler}
            value={value}
            placeholder={'Search City'}
            endAdornment={
                <InputAdornment position="end">
                    <IconButton
                        onClick={searchHandler}
                    >
                        <Search />
                    </IconButton>
                </InputAdornment>
            }
        />
    )
}

export default SearchInput;