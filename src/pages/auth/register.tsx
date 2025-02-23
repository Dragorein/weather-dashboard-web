import { BaseButton, BaseCard, BaseInputText, BaseText, ClickableText, PasswordInput } from "@/components/atoms";
import { TextAlignE, TextVariantE } from "@/common/enums";
import { RegisterService } from "@/services";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const RegisterPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

    const router = useRouter();

    const token = typeof window !== "undefined" ? sessionStorage.getItem("token") : null;
    useEffect(() => {
        if (token) {
            router.replace('/weather')
        }
    })

    const registerHandler = async () => {
        const data = await RegisterService({
            name : name,
            email : email,
            password : password
        });

        router.push('/auth/login');
    }

    const backToLogin = () => {
        router.push('/auth/login');
    }

    return (
        <div style={{
            display : 'flex',
            height : "100vh",
            justifyContent : 'center',
            alignItems : 'center',
        }}>
            <BaseCard>
                <BaseText align={TextAlignE.CENTER} variant={TextVariantE.H4}>Register</BaseText>
                <BaseInputText
                    id="name"
                    name="Name"
                    onChangeHandler={(e) => setName(e.target.value)}
                    value={name}
                    required
                />
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
                <PasswordInput
                    id="password-confirmation"
                    name="Password Confirmation"
                    onChangeHandler={(e) => setPasswordConfirm(e.target.value)}
                    value={passwordConfirm}
                    required
                    show={showPasswordConfirm}
                    showHandler={() => setShowPasswordConfirm((prev) => !prev)}
                />
                <BaseButton
                    onClickHandler={registerHandler}
                >
                    <BaseText variant={TextVariantE.BUTTON}>Register</BaseText>
                </BaseButton>
                <Box sx={{display : 'flex', flexDirection:'row'}} gap={1}>
                    <BaseText>Already have an account?</BaseText><ClickableText onClickHandler={backToLogin}>Login</ClickableText>
                </Box>
            </BaseCard>
        </div>
    )
}

export default RegisterPage;