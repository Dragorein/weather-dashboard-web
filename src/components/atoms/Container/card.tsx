import { baseCardI } from "@/common/interface/components/container.interface"
import colors from "@/styles/colors";
import { Card } from "@mui/material"

const BaseCard = ({children, background = colors.secondary} : baseCardI) => {
    return (
        <Card
            style={{
                display : 'flex',
                flexDirection : 'column',
                padding : 24,
                minWidth : 150,
                gap : 12,
                backgroundColor: background,
                color : colors.white,
                borderRadius : 12,
            }}
        >
            {children}
        </Card>
    )
};

export default BaseCard;