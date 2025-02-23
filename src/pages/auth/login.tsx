import { BaseButton, BaseText, BaseInputText, PasswordInput, ClickableText, ErrorText, ErrorPopup } from "@/components/atoms";
import BaseCard from "@/components/atoms/Container/card";
import { TextAlignE, TextVariantE } from "@/common/enums";
import { LoginService } from "@/services";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { validateEmail } from "@/common/helper";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({ email: "", password: "" });
    const [errorMessage, setErrorMessage] = useState("");
    const [showError, setShowError] = useState(false);

    const router = useRouter();
    const token = typeof window !== "undefined" ? sessionStorage.getItem("token") : null;

    useEffect(() => {
        if (token) {
            router.replace('/weather')
        }
    })

    const registerUser = () => {
        router.push('/auth/register');
    }

    const loginHandler = async () => {
        const newErrors = { email: "", password: ""};
        if (!email) {
            newErrors.email = "Email is required";
        } else {
            if (!validateEmail(email)) {
                newErrors.email = "Input is not an email";
            } else {
                newErrors.email = "";
            }
        }

        if (!password) {
            newErrors.password = "Password is required";
        } else {
            newErrors.password = "";
        }

        setErrors(newErrors);

        if (Object.values(newErrors).some(error => error)) return;
        await LoginService({
            email : email,
            password : password
        })
        .then((result) => {
            
            sessionStorage.setItem('token', result.data.token);
            sessionStorage.setItem('name', result.data.name);
            router.replace('/weather');
        })
        .catch(error => {
            setErrorMessage(error.response?.data?.error || "An error occurred during login.");
            setShowError(true);
        });

    }

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
                {errors.email && <ErrorText>{errors.email}</ErrorText>}
                <PasswordInput
                    id="password"
                    name="Password"
                    onChangeHandler={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                    show={showPassword}
                    showHandler={() => setShowPassword((prev) => !prev)}
                />
                {errors.password && <ErrorText>{errors.password}</ErrorText>}
                <BaseButton
                    onClickHandler={loginHandler}
                >
                    <BaseText variant={TextVariantE.BUTTON}>Login</BaseText>
                </BaseButton>
                <Box sx={{display : 'flex', flexDirection:'row'}} gap={1}>
                    <BaseText>{`Don't have an account yet?`}</BaseText><ClickableText onClickHandler={registerUser}>Register</ClickableText>
                </Box>
                {showError && <ErrorPopup message={errorMessage} onClose={() => setShowError(false)} />}
            </BaseCard>
        </div>
    )
}

export default LoginPage;