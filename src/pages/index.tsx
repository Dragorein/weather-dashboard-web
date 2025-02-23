import { TextAlignE, TextVariantE } from "@/common/enums";
import { BaseText } from "@/components/atoms";
import { Box } from "@mui/material";
import { useRouter } from "next/router"
import { useEffect } from "react";

 const Index = () => {
    const router = useRouter();

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (token) {
            router.replace("/weather")
        } else {
            router.replace("/auth/login")
        }
    })
    return(
        <Box sx={{
            display : 'flex',
            flex : 1,
            height : '100vh',
            justifyContent : 'center',
            alignItems : 'center',
        }}>
            <BaseText align={TextAlignE.CENTER} variant={TextVariantE.H1}>
                Your Not Suppose to be here
            </BaseText>
        </Box>
    )
}

export default Index;