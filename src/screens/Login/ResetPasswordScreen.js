import React, { useState } from "react";
import { render } from "react-dom";
import {
  BackButton,
  Background,
  Logo,
  ExHeader,
  TextInput,
  ExButton,
} from "../../components/External";
import { emailValidator } from "../../helpers/emailValidator";

export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })

  const sendResetPasswordEmail = () => {
    const emailError = emailValidator(email.value)
    if (emailError) {
      setEmail({ ...email, error: emailError })
      return
    }
    navigation.navigate('LoginScreen')
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <ExHeader>Restore Password</ExHeader>
      <TextInput
        label="E-mail address"
        returnKeyType="done"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        description="You will receive email with password reset link."
      />
      <ExButton
        mode="contained"
        onPress={sendResetPasswordEmail}
        style={{ marginTop: 16 }}
      >
        Send Instructions
      </ExButton>
    </Background>
  )
}