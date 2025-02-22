import { baseCardI } from "@/interface/components/container.interface"
import { Card } from "@mui/material"

const BaseCard = ({children} : baseCardI) => {
    return (
        <Card
            style={{
                width : '25%',
                minHeight : '30vh',
                display : 'flex',
                flexDirection : 'column',
                padding : 24,
                gap : 12
            }}
        >
            {children}
        </Card>
    )
};

export default BaseCard;