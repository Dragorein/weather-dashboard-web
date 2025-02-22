import { baseCardI } from "@/interface/components/container.interface"
import colors from "@/styles/colors";
import { Card } from "@mui/material"

const BaseCard = ({children} : baseCardI) => {
    return (
        <Card
            style={{
                display : 'flex',
                flexDirection : 'column',
                minWidth : '30rem',
                padding : 24,
                gap : 12,
                backgroundColor: colors.secondary,
                color : colors.white,
                borderRadius : 12,
            }}
        >
            {children}
        </Card>
    )
};

export default BaseCard;