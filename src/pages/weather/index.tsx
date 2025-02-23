
import { SearchInput } from "@/components/atoms";
import { HeaderMenu } from "@/components/molecules";
import { ForecastWeather, HistoryWeather, SummaryWeather } from "@/features";
import { resForecastSearchI, resWeatherSearchI } from "@/common/interface/service/weather/response.interface";
import { GetWeather, SearchWeather } from "@/services/weather.service";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const WeatherPage = () => {
    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState<resWeatherSearchI>();
    const [forecast, setForecast] = useState<resForecastSearchI[]>([]);
    const [history, setHistory] = useState<resWeatherSearchI[]>([]);

    
    const router = useRouter();
    
    const findWeather = async (location : string) => {
        const data = await SearchWeather({
            location : location
        });
        setWeather(data.data.weather);
        setForecast(data.data.forecast);
    }

    const getInitialData = async () => {
        const token = sessionStorage.getItem('token');
        if (token) {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;
                        if (latitude && longitude) {
                            findWeather(`${latitude},${longitude}`);
                        }
                    }
                );
            }

        } else {
            router.replace('/auth/login')
        }
    }
    const searchHandler = async () => {
        await findWeather(search);
    }
    
    const getHistory = async () => {
        const data = await GetWeather();
        setHistory(data.data);
    }
    
    useEffect(() => {
        getInitialData()
    },[]);

    useEffect(() => {
        getHistory()
    }, [weather])

    return (
        <Box sx={{
            display : 'flex',
            flex : 1,
            flexDirection : 'column',
            paddingX : 2
        }}>
            <Box sx={{
                 display:'flex',
                 paddingY : 1,
                 justifyContent : 'space-between',
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
                    flex : 1,
                    gap: 2,
                    paddingY : 1,
                }}>
                    <Box sx={{
                        display : 'flex',
                        flex : 2
                    }}>
                        <SummaryWeather data={weather} />
                    </Box>
                    <Box sx={{
                        display : 'flex',
                        flex : 10
                    }}>
                        <ForecastWeather data={forecast}/>
                    </Box>
                </Box>
                <Box sx={{
                    display:'flex',
                    gap: 2,
                    paddingY : 1,
                }}>
                    <HistoryWeather data={history} />
                </Box>
            </Box>
        </Box>
    )
}

export default WeatherPage;