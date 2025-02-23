import { ButtonVariantE } from "@/common/enums";
import { headerMenuI } from "@/common/interface/components/header.interface";
import colors from "@/styles/colors";
import { Button, Menu, MenuItem } from "@mui/material"
import { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Logout from '@mui/icons-material/Logout';
import { useRouter } from "next/router";

const HeaderMenu = ({ name, }: headerMenuI) => {
    const router = useRouter();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); 
    const open = Boolean(anchorEl);

    const openHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
      };
      const closeHandler = () => {
        setAnchorEl(null);
      };

    const onLogoutHandler = () => { 
        sessionStorage.clear();
        router.replace('/auth/login');
    };
    
    return (
        <>
        <Button
            onClick={openHandler}
            variant={ButtonVariantE.CONTAINED}
            sx={{
                backgroundColor : colors.secondary,
                padding : 2,
                borderRadius : 999,
                width : '15rem',
                justifyContent : 'space-between',
                paddingX : 3
            }}
            endIcon={<KeyboardArrowDownIcon />}
        >
            {name}
        </Button>
        <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={closeHandler}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem onClick={onLogoutHandler}>
                <Logout /> Logout
            </MenuItem>
        </Menu>
        </>
    )
}

export default HeaderMenu