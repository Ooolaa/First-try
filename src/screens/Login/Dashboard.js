import React from "react";
import { Background, Logo, ExHeader, ExButton, Paragraph } from "../../components/External";


export default function Dashboard({ navigation }) {
  return (
    <Background>
      <Logo />
      <ExHeader>Let’s start</ExHeader>
      <Paragraph>
        Your amazing app starts here. Open you favorite code editor and start
        editing this project.
      </Paragraph>
      <ExButton
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Logout
      </ExButton>
    </Background>
  )
}