import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTab from './bottomTab';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LoginScreen from '../Screens/LoginScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EditProfileScreen from '../Screens/EditProfileScreen';
import ChatHistory from '../Screens/ChatHistory';
import {RFValue} from 'react-native-responsive-fontsize';
import {setThemeBoolean} from '../storage/ThemeSlice';
import {darkTheme, lightTheme} from '../Utils/theme';
import {
  responsiveScreenWidth,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';
import Avatar from '../assets/svg/avatar.svg';
import {useDispatch, useSelector} from 'react-redux';
import { useNavigation } from '@react-navigation/native';
const Stack = createStackNavigator();
function MyStack() {
  const deviceTheme = useColorScheme();
  const dispatch = useDispatch();
  const theme = useSelector(state => state?.name);
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
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        options={{
          headerShown: false,
          headerStyle: {
            ...styles.headerStyle,
            backgroundColor: theme
              ? lightTheme?.colors?.WHITE
              : darkTheme?.colors?.LIGHT_BLACK,
          },
          headerLeft: () => {
            return (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <MaterialCommunityIcons name={'bell'} size={25} />
              </View>
            );
          },
        }}
        name="Home"
        component={BottomTab}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          // headerShown: false,
          headerStyle: {
            ...styles.headerStyle,
            backgroundColor: theme
              ? lightTheme?.colors?.WHITE
              : darkTheme?.colors?.BLACK,
          },
          headerTitleStyle: {
            color: !theme
              ? lightTheme?.colors?.WHITE
              : darkTheme?.colors?.LIGHT_BLACK,
          },
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{
          // headerShown: false,
          headerStyle: {
            ...styles.headerStyle,
            backgroundColor: theme
              ? lightTheme?.colors?.WHITE
              : darkTheme?.colors?.BLACK,
          },
          headerTitleStyle: {
            color: !theme
              ? lightTheme?.colors?.WHITE
              : darkTheme?.colors?.LIGHT_BLACK,
          },
        }}
      />
      <Stack.Screen
        name="ChatHistory"
        component={ChatHistory}
        options={({ navigation, route }) => ({
          headerShown: true,
          headerStyle: {
            ...styles.headerStyle,
            backgroundColor: theme
              ? lightTheme?.colors?.WHITE
              : darkTheme?.colors?.BLACK,
          },
          headerTitle: () => {
            return (
              <SafeAreaView style={styles.chatHistoryHeader}>
                <Avatar
                  height={responsiveScreenHeight(12)}
                  width={responsiveScreenWidth(12)}
                />
                <View style={styles.rowData}>
                  <Text style={styles.chatName}>{'name'}</Text>
                  <Text>{'last seen today at 2:56 PM'}</Text>
                </View>
              </SafeAreaView>
            );
          },
          headerRight: () => {
            return (
              <SafeAreaView style={styles.chatHistoryHeader}>
                <Feather
                  name={'video'}
                  size={RFValue(23)}
                  color={'#4682b4'}
                  style={styles.videoIcon}
                />
                <Ionicons
                  name={'call-outline'}
                  size={RFValue(23)}
                  color={'#4682b4'}
                />
              </SafeAreaView>
            );
          },
          headerLeft: () => {
            return (
              <SafeAreaView style={styles.chatHistoryHeader}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <MaterialIcons
                    name={'arrow-back-ios'}
                    size={RFValue(23)}
                    color={'#4682b4'}
                    style={styles.arrowIcon}
                  />
                </TouchableOpacity>
                <Text style={styles.MessageCountText}>{'114'}</Text>
              </SafeAreaView>
            );
          },
        })}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
const styles = StyleSheet.create({
  arrowIcon: {},
  headerStyle: {
    // backgroundColor: '#f4511e',
    height: responsiveScreenHeight(13),
  },
  chatHistoryHeader: {
    marginHorizontal: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '10%',
  },
  MessageCountText: {
    fontSize: RFValue(14),
    color: '#4682b4',
  },
  rowData: {
    // flexDirection:'column'
    marginHorizontal: '3%',
  },
  videoIcon: {
    marginRight: '10%',
  },
  chatName: {
    fontWeight: '700',
  },
});
