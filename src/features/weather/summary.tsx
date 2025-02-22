import { BaseCard } from "@/components/atoms"
import Text from "@/components/atoms/Text/base"
import { TextVariantE } from "@/enums"
import { Box } from "@mui/material"
import Image from "next/image"

const SummaryWeather = () => {
    return (
        <Box sx={{
            display:'flex',
            flexDirection : 'column',
            flex : 1,
            backgroundColor: 'blue'
        }}>
            <BaseCard>
                <Box sx={{backgroundColor : 'green'}} >
                    Location
                </Box>
                <Box
                    sx={{
                        display : 'flex',
                        flex : 1,
                        flexDirection : 'row'
                    }}
                >
                    <Box sx={{
                        display : 'flex',
                        flex : 7,
                        flexDirection : 'column',
                        backgroundColor : 'red',
                        padding : 2
                    }}>
                        <Box sx={{backgroundColor : 'blue'}} >
                            <Text variant={TextVariantE.H3} >
                                Day
                            </Text>
                            <Text variant={TextVariantE.H4}>
                                Date
                            </Text>
                        </Box>
                        <Box sx={{backgroundColor : 'magenta'}} >
                            <Box>
                                <Text variant={TextVariantE.H2} >
                                    temp
                                </Text>
                                <Text variant={TextVariantE.H5} >
                                    high low
                                </Text>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{
                            display : 'flex',
                            flex : 5,
                            flexDirection : 'column',
                            backgroundColor : 'teal',
                            padding : 2,
                            alignItems : 'end'
                        }}>
                        <Box>
                            <Image
                                src="https://cdn.weatherapi.com/weather/64x64/night/116.png"
                                alt="weatherCondition"
                                width={128}
                                height={128}
                            />
                        </Box>
                        <Text variant={TextVariantE.H4}>
                            condition
                        </Text>
                        <Text variant={TextVariantE.H5}>
                            feel
                        </Text>
                    </Box>
                </Box>
            </BaseCard>
        </Box>
    )
}

export default SummaryWeather