import { BaseCard } from "@/components/atoms"
import { Box } from "@mui/material";

const ForecastWeather = () => {
    return (
        <Box sx={{
            display:'flex',
            flexDirection : 'column',
            flex : 1,
            backgroundColor: 'blue'
        }}>
            <BaseCard>
                Forecast
            </BaseCard>
        </Box>
    )
}

export default ForecastWeather;