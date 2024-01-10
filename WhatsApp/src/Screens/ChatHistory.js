import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  useColorScheme,
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
const ChatHistory = ({navigation}) => {
  const {colors} = useTheme();
  const [message, setMessage] = useState('');
  const colorScheme = useColorScheme();
  const image = require('../assets/images/whatsAppBG.jpg');
  const darkImage = require('../assets/images/whatsAppBGDark.jpg');
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={colorScheme == 'dark' ? darkImage : image}
        resizeMode="cover"
        style={styles.chatContainer}></ImageBackground>
      <View style={styles.bottomContainer}>
        <MaterialCommunityIcons
          style={styles.archiveIcon}
          name="plus"
          color={'#4682b4'}
          size={RFValue(23)}
        />
        <TextInput
          style={styles.input}
          onChangeText={text => setMessage(text)}
          value={message}
          numberOfLines={4}
          multiline={true}
          inputMode="text"
        />
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
      </View>
    </SafeAreaView>
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
  },
  input: {
    height: responsiveScreenHeight(5),
    width: responsiveScreenWidth(65),
    margin: '2%',
    padding: '2%',
    borderWidth: RFValue(1),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RFValue(15),
    backgroundColor: '#fdfdf9',
    borderColor: '#f3efef',
  },
  cameraIcon: {
    marginHorizontal: '3%',
  },
});
