import { TextAlignE, TextVariantE } from "@/common/enums";
import { baseTextI } from "@/common/interface/components/text.interface";
import { Typography } from "@mui/material";


const ErrorText = ({ children, align = TextAlignE.LEFT, variant = TextVariantE.CAPTION } : baseTextI) => {
    return (
        <Typography
            align={align}
            variant={variant}
            color="red"
        >
            {children}
        </Typography>
    )
}

export default ErrorText;