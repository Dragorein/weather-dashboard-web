import { BaseCard } from "@/components/atoms"
import { Box } from "@mui/material"

const HistoryWeather = () => {
    return (
        <Box sx={{
            display:'flex',
            flexDirection : 'column',
            flex : 4,
            gap: 2,
            backgroundColor: 'blue'
        }}>
            <BaseCard>
                History
            </BaseCard>
        </Box>
    )
}

export default HistoryWeather;