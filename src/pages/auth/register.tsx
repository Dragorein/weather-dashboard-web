import { BaseButton, BaseCard, BaseInputText, BaseText, PasswordInput } from "@/components/atoms";
import { TextAlignE, TextVariantE } from "@/enums";
import { useState } from "react";

const RegisterPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

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
                    onClickHandler={() => console.log('register is pressed')}
                >
                    <BaseText variant={TextVariantE.BUTTON}>Register</BaseText>
                </BaseButton>
            </BaseCard>
        </div>
    )
}

export default RegisterPage;