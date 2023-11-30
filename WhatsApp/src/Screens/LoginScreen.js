import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React,{useRef,useState} from 'react';
import Chat from '../assets/svg/whatsapp.svg';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import PhoneInput from "react-native-phone-number-input";
const LoginScreen = () => {
  const phoneInput = useRef(null);
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [value, setValue] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <Chat
        width={responsiveScreenWidth(20)}
        height={responsiveScreenHeight(20)}></Chat>
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="IN"
            layout="first"
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            withDarkTheme
            withShadow
            autoFocus
          />
    </SafeAreaView>
  );
};

export default React.memo(LoginScreen);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal:'4%'
  },
});
