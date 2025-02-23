import { ButtonVariantE } from "@/common/enums"
import { iconButtonI } from "@/common/interface/components/buttons.interface"
import { Button } from "@mui/material"

const iconButton = ({
    children,
    onClickHandler,
    disabled = false,
    icon,
    variant = ButtonVariantE.CONTAINED
} : iconButtonI) => {
    return (
        <Button
            variant={variant}
            onClick={onClickHandler}
            disabled={disabled}
            endIcon={icon}
        >
            {children}
        </Button>
    )
}

export default iconButton;