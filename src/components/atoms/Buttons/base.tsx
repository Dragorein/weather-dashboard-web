import { ButtonVariantE } from "@/common/enums"
import { baseButtonI } from "@/common/interface/components/buttons.interface"
import { Button } from "@mui/material"

const BaseButton = ({ children, onClickHandler, disabled = false, variant = ButtonVariantE.CONTAINED } : baseButtonI) => {
    return (
        <Button
            variant={variant}
            onClick={onClickHandler}
            disabled={disabled}
        >
            {children}
        </Button>
    )
}

export default BaseButton;