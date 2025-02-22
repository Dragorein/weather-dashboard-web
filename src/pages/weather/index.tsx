
import { SearchInput } from "@/components/atoms";
import { HighlightWeather, HistoryWeather, SummaryWeather } from "@/features";
import { Box } from "@mui/material";
import { useState } from "react";

const WeatherPage = () => {
    const [search, setSearch] = useState("");

    const searchHandler = () => {
        console.log("search : ", search);
        
    }

    return (
        <>
            <Box>
                <SearchInput id="search" onChangeHandler={(e) => setSearch(e.target.value)} value={search} searchHandler={searchHandler} />
            </Box>
            <Box sx={{
                minHeight : '100%',
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
                    <SummaryWeather/>
                    <HighlightWeather/>
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
        </>
    )
}

export default WeatherPage;