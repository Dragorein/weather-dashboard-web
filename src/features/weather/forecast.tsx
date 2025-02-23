import { TextVariantE } from "@/common/enums";
import { resForecastSearchI } from "@/common/interface/service/weather/response.interface";
import { BaseCard, BaseText } from "@/components/atoms"
import colors from "@/styles/colors";
import { Box } from "@mui/material";
import Image from "next/image";

const ForecastWeather = ({ data } : {data : resForecastSearchI[]}) => {
    if (data.length) {
        return (
            <BaseCard background={colors.tertiary}>
                <Box sx={{
                    display: "flex",
                    whiteSpace: "nowrap",
                    maxWidth : '77vw',
                    gap: 2,
                    overflow : 'auto',
                    paddingBottom : 2,
                    "&::-webkit-scrollbar": { height: 6 },
                    "&::-webkit-scrollbar-thumb": { background: "#888", borderRadius: 3 }
                }}>
                    {data.map(item => {
                        console.log("item", item);
                        return (<BaseCard key={item.id}>
                            <Box sx={{display : 'flex', justifyContent: 'space-between'}} >
                                <BaseText variant={TextVariantE.H5}>
                                    {item?.time.split(" ")[1] ?? ''}
                                </BaseText>
                            </Box>
                            <Box sx={{
                                justifyItems : 'center',
                                height : 150
                            }}>
                                {item?.condition_img &&
                                    (<Image
                                        src={item?.condition_img ? `https://${item.condition_img}` : ''}
                                        alt="weatherCondition"
                                        width={128}
                                        height={128}
                                    />)
                                }
                                <BaseText variant={TextVariantE.BODY2}>
                                    {item?.condition ?? ''}
                                </BaseText>
                            </Box>
                            <Box sx={{display : 'flex', justifyContent : 'center'}} >
                                <BaseText variant={TextVariantE.SUB1} >
                                    {`${item?.temp_c ?? ''} °C / ${item?.temp_f ?? ''} °F`}
                                </BaseText>
                            </Box>
                            <Box sx={{display : 'flex', marginTop: 1,justifyContent: 'space-between'}} >
                                <BaseText variant={TextVariantE.SUB1}>
                                    Rain
                                </BaseText>
                                <BaseText variant={TextVariantE.SUB1}>
                                    {`${item?.precip_mm}`}
                                </BaseText>
                            </Box>
                        </BaseCard>)
                    })}
                </Box>
            </BaseCard>
        )
    } else {
        return null;
    }
}

export default ForecastWeather;