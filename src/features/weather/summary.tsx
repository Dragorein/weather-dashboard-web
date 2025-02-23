import { BaseCard, BaseText } from "@/components/atoms"
import { TextVariantE } from "@/common/enums"
import { resWeatherSearchI } from "@/common/interface/service/weather/response.interface"
import { Box } from "@mui/material"
import Image from "next/image"

const SummaryWeather = ({data} : {data : resWeatherSearchI}) => {
    if (data) {
        return (
            <Box sx={{
                display:'flex',
                flexDirection : 'column',
                minWidth : '15vw',
            }}>
                <BaseCard>
                    <Box sx={{
                        paddingY : 2
                    }} >
                        <BaseText variant={TextVariantE.H5}>
                            {data?.city ?? ''}
                        </BaseText>
                    </Box>
                    <Box sx={{
                        display : 'flex',
                        flex : 1,
                        flexDirection : 'row'
                    }}>
                        <Box sx={{
                            display : 'flex',
                            flex : 7,
                            flexDirection : 'column',
                            padding : 1
                        }}>
                            <Box sx={{display : 'flex', justifyContent: 'space-between'}} >
                                <BaseText variant={TextVariantE.H5}>
                                    {data?.date.split(" ")[0] ?? ''}
                                </BaseText>
                                <BaseText variant={TextVariantE.H5}>
                                    {data?.date.split(" ")[1] ?? ''}
                                </BaseText>
                            </Box>
                            <Box sx={{
                                justifyItems : 'center'
                            }}>
                                {data?.condition_img &&
                                    (<Image
                                        src={data?.condition_img ? `https://${data.condition_img}` : ''}
                                        alt="weatherCondition"
                                        width={128}
                                        height={128}
                                    />)
                                }
                                <BaseText variant={TextVariantE.H6}>
                                    {data?.condition ?? ''}
                                </BaseText>
                            </Box>
                            <Box sx={{display : 'flex', justifyContent : 'center'}} >
                                <BaseText variant={TextVariantE.H6} >
                                    {`${data?.temp_c ?? ''} °C / ${data?.temp_f ?? ''} °F`}
                                </BaseText>
                            </Box>
                            <Box sx={{display : 'flex', marginTop: 1,justifyContent: 'space-between'}} >
                                <BaseText variant={TextVariantE.H5}>
                                    Rain
                                </BaseText>
                                <BaseText variant={TextVariantE.H5}>
                                    {`${data?.precip_mm}`}
                                </BaseText>
                            </Box>
                        </Box>
                    </Box>
                </BaseCard>
            </Box>
        )
    }
}

export default SummaryWeather