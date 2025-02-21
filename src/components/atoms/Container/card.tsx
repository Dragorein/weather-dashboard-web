import { baseCardI } from "@/interface/components/container.interface"
import { Card } from "@mui/material"

const BaseCard = ({children} : baseCardI) => {
    return (
        <Card
            style={{
                width : '25%',
                height : '25vh',
                display : 'flex',
                flexDirection : 'column'
            }}
        >
            {children}
        </Card>
    )
};

export default BaseCard;