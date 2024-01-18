import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ImageBackground,
  Dimensions,
  Image,
  Platform,
  KeyboardAvoidingView,
  useColorScheme,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Arrow from '../assets/svg/arrow.svg';
import DarkArrow from '../assets/svg/darkArrow.svg';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import PhoneInput from 'react-native-phone-number-input';
import PhoneNumberAuth from '../Utils/PhoneNumberAuth';
import {RFValue} from 'react-native-responsive-fontsize';
import FirebaseSetup from '../../Firebase';
import {OtpInput} from 'react-native-otp-entry';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {setThemeBoolean} from '../storage/ThemeSlice';
import {darkTheme, lightTheme} from '../Utils/theme';
const LoginScreen = ({navigation}) => {
  const deviceTheme = useColorScheme();
  const dispatch = useDispatch();
  const theme = useSelector(state => state?.name);
  const phoneInput = useRef(null);
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(false);
  const [value, setValue] = useState('');
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');
  const [validateNumber, setValidateNumber] = useState(false);
  const {auth} = FirebaseSetup();
  const [otp, setOTP] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [errorDetails, setErrorDetails] = useState({
    valid: false,
    errorMessage: '',
  });
  function themeSwitch() {
    if (deviceTheme == 'light') {
      dispatch(setThemeBoolean(true));
    } else {
      dispatch(setThemeBoolean(false));
    }
  }
  useEffect(() => {
    themeSwitch();
  }, [deviceTheme]);
  async function verifyPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    console.log('confirmation', confirmation);
    setConfirm(confirmation);
  }
  async function confirmCode() {
    try {
      const credential = auth.PhoneAuthProvider.credential(
        confirm.verificationId,
        code,
      );
      let userData = await auth().currentUser.linkWithCredential(credential);
      setUser(userData.user);
    } catch (error) {
      if (error.code == 'auth/invalid-verification-code') {
        console.log('Invalid code.');
      } else {
        console.log('Account linking error');
      }
    }
  }
  function validate() {
    if (!value || value.length < 10) {
      setErrorDetails({
        valid: false,
        errorMessage: 'Enter the valid Phone Number',
      });
      setValidateNumber(false);
    } else {
      setErrorDetails({
        valid: true,
        errorMessage: '',
      });
      setValidateNumber(true);
    }
  }
  function validateOTP() {
    if (otp == '123456') {
      setErrorDetails({
        valid: true,
        errorMessage: '',
      });
      navigationHandle();
    } else {
      setErrorDetails({
        valid: false,
        errorMessage: 'Enter the valid OTP',
      });
    }
  }
  function navigationHandle() {
    navigation.navigate('EditProfile', {
      phoneNumber: '+91 ' + value,
    });
  }
  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: theme
            ? lightTheme?.colors?.WHITE
            : darkTheme?.colors?.BLACK,
        },
      ]}>
      <KeyboardAvoidingView
        style={[
          styles.container,
          {
            backgroundColor: theme
              ? lightTheme?.colors?.WHITE
              : darkTheme?.colors?.BLACK,
          },
        ]}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Image
          style={styles.bg}
          source={require('../assets/images/bg.jpg')}></Image>
        <View
          style={[
            styles.innerContainer,
            {
              backgroundColor: theme
                ? lightTheme?.colors?.WHITE
                : darkTheme?.colors?.BLACK
            },
          ]}>
          <Text
            style={[
              styles.txt,
              {
                color: !theme
                  ? lightTheme?.colors?.WHITE
                  : darkTheme?.colors?.LIGHT_BLACK,
              },
            ]}>
            {!validateNumber
              ? 'Enter your Mobile Number to login or register'
              : 'Enter the OTP received with the Number'}
          </Text>
          {!validateNumber ? (
            <View style={styles.phoneInput}>
              <PhoneInput
                ref={phoneInput}
                layout="second"
                containerStyle={[
                  styles.textInputContainer,
                  {
                    backgroundColor: theme
                      ? lightTheme?.colors?.WHITE
                      : darkTheme?.colors?.BACKGROUND_GREY,
                  },
                ]}
                textInputStyle={{
                  color: !theme
                    ? lightTheme?.colors?.WHITE
                    : darkTheme?.colors?.BACKGROUND_GREY,
                }}
                //  defaultValue={value}
                textContainerStyle={[
                  styles.textContainer,
                  {
                    backgroundColor: theme
                      ? lightTheme?.colors?.WHITE
                      : darkTheme?.colors?.BACKGROUND_GREY,
                  },
                ]}
                codeTextStyle={{
                  color: !theme
                    ? lightTheme?.colors?.WHITE
                    : darkTheme?.colors?.BACKGROUND_GREY,
                }}
                value={value}
                textInputProps={{maxLength: 10}}
                defaultCode="IN"
                onChangeCountry={code => {
                  setCountryCode(code);
                }}
                onChangeText={text => {
                  setValue(text);
                  setErrorDetails({
                    valid: true,
                    errorMessage: '',
                  });
                }}
                onChangeFormattedText={text => {
                  setFormattedValue(text);
                }}
                withDarkTheme
                withShadow
                autoFocus
              />
              <Text style={styles.error}>{errorDetails?.errorMessage}</Text>
            </View>
          ) : (
            <View style={styles.phoneInput}>
              <OtpInput
                numberOfDigits={6}
                focusColor="#25D366"
                onTextChange={text => {
                  setOTP(text);
                  setErrorDetails({
                    valid: true,
                    errorMessage: '',
                  });
                }}
                theme={{
                  pinCodeContainerStyle: styles.pinCodeContainer,
                  pinCodeTextStyle: {
                    color: !theme
                      ? lightTheme?.colors?.WHITE
                      : darkTheme?.colors?.BACKGROUND_GREY,
                  },
                  focusStickStyle: styles.focusStick,
                }}
              />
              <Text style={styles.error}>{errorDetails?.errorMessage}</Text>
            </View>
          )}
          {validateNumber && (
            <View style={styles.textGroup}>
              <Text
                style={[
                  styles.codeText,
                  {
                    color: !theme
                      ? lightTheme?.colors?.WHITE
                      : darkTheme?.colors?.BACKGROUND_GREY,
                  },
                ]}>
                Didn't recieved the code?{' '}
              </Text>
              <TouchableOpacity
                // style={styles.btn}
                onPress={() => verifyPhoneNumber('+91 ' + value)}>
                <Text style={styles.codeTextBtn}>RESEND CODE</Text>
              </TouchableOpacity>
            </View>
          )}
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              validateNumber ? validateOTP() : validate();
            }}>
            {theme ? (
              <Arrow
                height={responsiveScreenHeight(14)}
                width={responsiveScreenWidth(14)}
              />
            ) : (
              <DarkArrow
                height={responsiveScreenHeight(14)}
                width={responsiveScreenWidth(14)}
              />
            )}
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default React.memo(LoginScreen);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  phoneInput: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  txt: {
    color: 'black',
    fontWeight: '700',
    fontSize: RFValue(15),
    marginVertical: '3%',
    flex: 0.2,
  },
  error: {
    color: 'red',
    padding: '2%',
    alignSelf: 'flex-start',
  },
  btn: {
    flex: 1,
    bottom: 0,
    borderRadius: RFValue(7),
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },
  codeText: {
    fontWeight: '500',
    fontSize: RFValue(12),
    marginVertical: '3%',
  },
  codeTextBtn: {
    fontWeight: '700',
    color: '#25D366',
  },
  bg: {
    height: Dimensions.get('screen').height * 0.3,
    width: Dimensions.get('screen').width,
    resizeMode: 'cover',
  },
  innerContainer: {
    flex: 1,
    width: Dimensions.get('screen').width,
    borderTopLeftRadius: RFValue(15),
    borderTopRightRadius: RFValue(15),
    alignItems: 'center',
    top: -20,
    padding: '3%',
  },
  textGroup: {
    flexDirection: 'row',
    // alignItems:'baseline',
    alignItems: 'center',
    textAlign: 'center',
    width: responsiveScreenWidth(90),
    flex: 0.3,
  },
  textInputContainer: {
    height:
      Platform.OS == 'android'
        ? responsiveScreenHeight(8.5)
        : responsiveScreenHeight(7.5),
  },
  textContainer: {
    alignItems: 'center',
    color: 'red',
  },
  OTPcontainer: {
    height: responsiveScreenHeight(7),
  },
  pinCodeContainer: {
    height: responsiveScreenHeight(2),
  },
});
