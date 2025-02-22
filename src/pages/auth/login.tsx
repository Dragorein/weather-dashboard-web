import { BaseButton, BaseText, BaseInputText, PasswordInput } from "@/components/atoms";
import BaseCard from "@/components/atoms/Container/card";
import { TextAlignE, TextVariantE } from "@/enums";
import { useState } from "react";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div style={{
            display : 'flex',
            height : "100vh",
            justifyContent : 'center',
            alignItems : 'center',
        }}>
            <BaseCard>
                <BaseText align={TextAlignE.CENTER} variant={TextVariantE.H4}>Login</BaseText>
                <BaseInputText
                    id="email"
                    name="Email"
                    onChangeHandler={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                />
                <PasswordInput
                    id="password"
                    name="Password"
                    onChangeHandler={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                    show={showPassword}
                    showHandler={() => setShowPassword((prev) => !prev)}
                />
                <BaseButton
                    onClickHandler={() => console.log('login is pressed')}
                >
                    <BaseText variant={TextVariantE.BUTTON}>Login</BaseText>
                </BaseButton>
            </BaseCard>
        </div>
    )
}

export default LoginPage;