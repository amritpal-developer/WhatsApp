import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  useColorScheme,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {RFValue} from 'react-native-responsive-fontsize';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import Feather from 'react-native-vector-icons/Feather';
import {useTheme} from '@react-navigation/native';
import {darkTheme, lightTheme} from '../Utils/theme';
import {TextInput} from 'react-native-paper';
import InputBox from '../components/InputBox';
const ChatHistory = ({navigation}) => {
  const {colors} = useTheme();
  const [message, setMessage] = useState('');
  const colorScheme = useColorScheme();
  const image = require('../assets/images/whatsAppBG.jpg');
  const darkImage = require('../assets/images/whatsAppBGDark.jpg');
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <SafeAreaView
        style={[
          styles.container,
          {
            backgroundColor:
              colorScheme != 'dark'
                ? lightTheme?.colors?.WHITE
                : darkTheme?.colors?.BLACK,
          },
        ]}>
        <ImageBackground
          source={colorScheme == 'dark' ? darkImage : image}
          resizeMode="cover"
          style={styles.chatContainer}></ImageBackground>
        {/* <View
        style={[
          styles.bottomContainer,
          {
            backgroundColor:
              colorScheme != 'dark'
                ? lightTheme?.colors?.WHITE
                : darkTheme?.colors?.BLACK,
          },
        ]}>
        <MaterialCommunityIcons
          style={styles.archiveIcon}
          name="plus"
          color={'#4682b4'}
          size={RFValue(23)}
        />
        <View style={{}}>
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor:
                  colorScheme != 'dark'
                    ? lightTheme?.colors?.WHITE
                    : darkTheme?.colors?.LIGHT_BLACK,
              },
            ]}
            textColor={
              colorScheme == 'dark'
                ? lightTheme?.colors?.WHITE
                : darkTheme?.colors?.LIGHT_BLACK
            }
            right={<TextInput.Icon icon="eye" />}
            onChangeText={text => setMessage(text)}
            value={message}
            numberOfLines={4}
            activeUnderlineColor={
              colorScheme != 'dark'
                ? lightTheme?.colors?.WHITE
                : darkTheme?.colors?.LIGHT_BLACK
            }
            outlineStyle={{borderRadius: 100}}
            multiline={true}
            inputMode="text"
          />
        </View>
        <Feather
          name={'camera'}
          size={RFValue(21)}
          style={styles.cameraIcon}
          color={'#4682b4'}
        />
        <MaterialIcons
          name={'mic-none'}
          size={RFValue(24)}
          color={'#4682b4'}
          style={styles.arrowIcon}
        />
      </View> */}
        <InputBox />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default React.memo(ChatHistory);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatContainer: {
    flex: 1,
    height: responsiveScreenHeight(80),
    width: responsiveScreenWidth(100),
  },
  bottomContainer: {
    top: '1%',
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '8%',
    height: responsiveScreenHeight(30),
  },
  input: {
    width: responsiveScreenWidth(65),
    borderRadius: RFValue(10),
  },
  cameraIcon: {
    marginHorizontal: '3%',
  },
});
