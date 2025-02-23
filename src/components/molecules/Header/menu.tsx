import { ButtonVariantE } from "@/common/enums";
import { headerMenuI } from "@/common/interface/components/header.interface";
import colors from "@/styles/colors";
import { Button, Menu, MenuItem } from "@mui/material"
import { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Avatar from '@mui/material/Avatar';
import Logout from '@mui/icons-material/Logout';

const HeaderMenu = ({ name }: headerMenuI) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); 
    const open = Boolean(anchorEl);

    const openHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
      };
      const closeHandler = () => {
        setAnchorEl(null);
      };

    const onProfileHandler = () => {console.log("go to profile"); };
    
    const onLogoutHandler = () => { console.log("logout");};
    
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
        >
            <MenuItem onClick={onProfileHandler}><Avatar /> Profile</MenuItem>
            <MenuItem onClick={onLogoutHandler}><Logout /> Logout</MenuItem>
        </Menu>
        </>
    )
}

export default HeaderMenu