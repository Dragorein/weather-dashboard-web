import { TextAlignE, TextVariantE } from "@/enums";
import { ClickableTextI } from "@/interface/components/text.interface";
import colors from "@/styles/colors";
import { Typography } from "@mui/material";


const ClickableText = ({ children, align = TextAlignE.LEFT, variant = TextVariantE.BODY1, onClickHandler} : ClickableTextI) => {
    return (
        <Typography
            align={align}
            variant={variant}
            onClick={onClickHandler}
            style={{
                cursor : 'pointer',
                color : '#1565C0',
                fontWeight : 700
            }}
        >
            {children}
        </Typography>
    )
}

export default ClickableText;