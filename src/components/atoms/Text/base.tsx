import { TextAlignE, TextVariantE } from "@/common/enums";
import { baseTextI } from "@/common/interface/components/text.interface";
import { Typography } from "@mui/material";


const BaseText = ({ children, align = TextAlignE.LEFT, variant = TextVariantE.BODY1 } : baseTextI) => {
    return (
        <Typography
            align={align}
            variant={variant}
        >
            {children}
        </Typography>
    )
}

export default BaseText;