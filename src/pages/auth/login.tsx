import { BaseButton, BaseText, BaseInputText } from "@/components/atoms";
import BaseCard from "@/components/atoms/Container/card";
import { TextAlignE, TextVariantE } from "@/enums";
import { useState } from "react";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    return (
        <BaseCard>
            <BaseText align={TextAlignE.CENTER} variant={TextVariantE.H4}>Login</BaseText>
            <BaseInputText
                id="email"
                onChangeHandler={(e) => setEmail(e.target.value)}
                value={email}
                required
            />
            {email}
            <BaseButton
                onClickHandler={() => console.log('login is pressed')}
            >
                <BaseText variant={TextVariantE.BUTTON}>Login</BaseText>
            </BaseButton>
        </BaseCard>
    )
}

export default LoginPage;