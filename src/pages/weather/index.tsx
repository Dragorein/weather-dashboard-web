
import { SearchInput } from "@/components/atoms";
import { HeaderMenu } from "@/components/molecules";
import { ForecastWeather, HistoryWeather, SummaryWeather } from "@/features";
import { Box } from "@mui/material";
import { useState } from "react";

const WeatherPage = () => {
    const [search, setSearch] = useState("");

    const searchHandler = () => {
        console.log("search : ", search);
    }

    return (
        <Box sx={{
            display : 'flex',
            flex : 1,
            flexDirection : 'column',
            backgroundColor : 'yellow',
            paddingX : 2
        }}>
            <Box sx={{
                 display:'flex',
                 paddingY : 1,
                 justifyContent : 'space-between',
                 backgroundColor: 'green',
            }}>
                <SearchInput id="search" onChangeHandler={(e) => setSearch(e.target.value)} value={search} searchHandler={searchHandler} />
                <HeaderMenu name="USER" />
            </Box>
            <Box sx={{
                display : 'flex',
                flex : 1,
                flexDirection : 'column'
            }}>
                <Box sx={{
                    display:'flex',
                    gap: 2,
                    paddingY : 1,
                    backgroundColor: 'red'
                }}>
                    <Box sx={{
                        display : 'flex',
                        flex : 4
                    }}>
                        <SummaryWeather/>
                    </Box>
                    <Box sx={{
                        display : 'flex',
                        flex : 8
                    }}>
                        <ForecastWeather/>
                    </Box>
                </Box>
                <Box sx={{
                    display:'flex',
                    gap: 2,
                    paddingY : 1,
                    backgroundColor: 'blue'
                }}>
                    <HistoryWeather />
                </Box>
            </Box>
        </Box>
    )
}

export default WeatherPage;