
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
    const [weather, setWeather] = useState<resWeatherSearchI>({
        id: "",
        city: "",
        region: "",
        country: "",
        lon: 0,
        lat: 0,
        condition: "",
        condition_img: "",
        humidity: "",
        cloud: 0,
        precip_mm: 0,
        temp_c: 0,
        temp_f: 0,
        temp_feel_c: 0,
        temp_feel_f: 0,
        heat_index_c: 0,
        heat_index_f: 0,
        uv: 0,
        date: "",
        time: "",
    });
    const [forecast, setForecast] = useState<resForecastSearchI[]>([]);
    const [history, setHistory] = useState<resWeatherSearchI[]>([]);
    const [username, setUsername] = useState<string>('Guest');

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
        const name = sessionStorage.getItem('name');

        if (name) {
            setUsername(name);
        }

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
                <HeaderMenu name={username} />
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