import {View, Text, StyleSheet, useColorScheme} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../Screens/HomeScreen';
import CallsScreen from '../Screens/CallsScreen';
import UpdatesScreen from '../Screens/UpdatesScreen';
import SettingScreen from '../Screens/SettingScreen';
import CommunitiesScreen from '../Screens/CommunitiesScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {RFValue} from 'react-native-responsive-fontsize';
import CustomSwitch from '../Utils/CustomSwitch';
import UpdateIcon from '../assets/svg/UpdateIcon.svg';
import BlueUpdateIcon from '../assets/svg/blueUpdateIcon.svg';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {darkTheme, lightTheme} from '../Utils/theme';
const Stack = createStackNavigator();
const onSelectSwitch = index => {
  console.log('Selected index: ' + index);
};
function headerTitle(textLabel1, textLabel2) {
  return (
    <View style={styles.headerLeftStyle}>
      <CustomSwitch
        selectionMode={1}
        roundCorner={true}
        option1={textLabel1}
        option2={textLabel2}
        onSelectSwitch={onSelectSwitch}
        selectionColor={'white'}
      />
    </View>
  );
}
function headerLeft(iconName, iconLibrary, textTitle) {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.headerLeftStyle}>
      {iconName ? (
        <MaterialCommunityIcons
          style={styles.headerIcon}
          name={iconName}
          color={'royalblue'}
          size={RFValue(25)}
        />
      ) : null}
      {textTitle ? (
        <Text style={styles.headerRightTextStyle}>{textTitle}</Text>
      ) : null}
    </View>
  );
}
function headerRight(iconName, iconName2, iconLibrary, svg) {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.headerRightStyle}>
      {iconName ? (
        iconLibrary == 'MaterialIcons' ? (
          <MaterialIcons
            style={styles.headerIcon}
            name={iconName}
            color={'royalblue'}
            size={RFValue(25)}
          />
        ) : (
          <MaterialCommunityIcons
            style={styles.headerIcon}
            name={iconName}
            color={'royalblue'}
            size={RFValue(25)}
          />
        )
      ) : null}
      {iconName2 ? (
        iconLibrary == 'AntDesign' ? (
          <AntDesign
            style={styles.headerIcon}
            name={iconName2}
            color={'royalblue'}
            size={RFValue(25)}
          />
        ) : (
          <MaterialCommunityIcons
            style={styles.headerIcon}
            name={iconName}
            color={'royalblue'}
            size={RFValue(25)}
          />
        )
      ) : null}
    </View>
  );
}
const HomeScreenNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      {/* <Stack.Screen name="AccountAddedScreen" component={AccountAddedScreen} /> */}
    </Stack.Navigator>
  );
};
const CallScreenNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="CallsScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="CallsScreen" component={CallsScreen} />
      {/* <Stack.Screen name="AccountAddedScreen" component={AccountAddedScreen} /> */}
    </Stack.Navigator>
  );
};
const UpdateScreenNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="UpdatesScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="UpdatesScreen" component={UpdatesScreen} />
    </Stack.Navigator>
  );
};
const SettingsScreenNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="SettingScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SettingScreen" component={SettingScreen} />
      {/* <Stack.Screen name="AccountAddedScreen" component={AccountAddedScreen} /> */}
    </Stack.Navigator>
  );
};
const CommunitiesScreenNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="CommunitiesScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="CommunitiesScreen" component={CommunitiesScreen} />
      {/* <Stack.Screen name="AccountAddedScreen" component={AccountAddedScreen} /> */}
    </Stack.Navigator>
  );
};
const BottomTab = () => {
  const Tab = createBottomTabNavigator();
  const colorScheme = useColorScheme();
  function tabBarIcon(focused, icon, IconLibrary, svg) {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {IconLibrary == 'MaterialCommunityIcons' && !svg ? (
          <MaterialCommunityIcons
            // style={styles.menuIcon}
            name={icon}
            color={focused ? 'royalblue' : '#999999'}
            size={RFValue(25)}
          />
        ) : IconLibrary == 'Ionicons' ? (
          <Ionicons
            // style={styles.menuIcon}
            name={icon}
            color={focused ? 'royalblue' : '#999999'}
            size={RFValue(25)}
          />
        ) : IconLibrary == 'Feather' ? (
          <Feather
            // style={styles.menuIcon}
            name={icon}
            color={focused ? 'royalblue' : '#999999'}
            size={RFValue(25)}
          />
        ) : IconLibrary == 'AntDesign' ? (
          <AntDesign
            // style={styles.menuIcon}
            name={icon}
            color={focused ? 'royalblue' : '#999999'}
            size={RFValue(25)}
          />
        ) : IconLibrary == 'MaterialIcons' ? (
          <MaterialIcons
            // style={styles.menuIcon}
            name={icon}
            color={focused ? 'royalblue' : '#999999'}
            size={RFValue(25)}
          />
        ) : !focused ? (
          <UpdateIcon
            width={responsiveScreenWidth(8)}
            height={responsiveScreenHeight(8)}
          />
        ) : (
          <BlueUpdateIcon
            width={responsiveScreenWidth(8)}
            height={responsiveScreenHeight(8)}
          />
        )}
      </View>
    );
  }
  return (
    <Tab.Navigator>
      <Tab.Screen
        screenOptions={{
          activeTintColor: 'blue',
          headerShown: false,
          tabBarActiveTintColor: 'blue',
        
        }}
        options={{
          tabBarStyle:{
            backgroundColor:
            colorScheme != 'dark'
              ? lightTheme?.colors?.WHITE
              : darkTheme?.colors?.BLACK, 
          },
          headerShown: true,
          headerTitleAlign: 'center',
          tabBarLabel: 'Updates',
          tabBarIcon: ({focused}) =>
            tabBarIcon(focused, 'update', '', 'UpdateIcon'),
          headerRight: () => headerRight('menu', '', ''),
        }}
        name="Updates"
        component={UpdateScreenNavigator}
      />
      <Tab.Screen
        options={{
          tabBarStyle:{
            backgroundColor:
            colorScheme != 'dark'
              ? lightTheme?.colors?.WHITE
              : darkTheme?.colors?.BLACK, 
          },
          headerShown: true,
          headerTitleAlign: 'center',
          tabBarLabel: 'Calls',
          tabBarBadge: '2',
          tabBarIcon: ({focused}) =>
            tabBarIcon(focused, 'call-outline', 'Ionicons'),
          headerLeft: () => headerLeft('', '', 'Edit'),
          headerRight: () => headerRight('add-call', '', 'MaterialIcons'),
          headerTitle: () => headerTitle('All', 'Missed'),
        }}
        name="Calls"
        component={CallScreenNavigator}
      />
      <Tab.Screen
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          tabBarLabel: 'Communities',
          tabBarIcon: ({focused}) =>
            tabBarIcon(focused, 'groups', 'MaterialIcons'),
            tabBarStyle:{
              backgroundColor:
              colorScheme != 'dark'
                ? lightTheme?.colors?.WHITE
                : darkTheme?.colors?.BLACK, 
            },
        }}
        name="Communities"
        component={CommunitiesScreenNavigator}
      />
      <Tab.Screen
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          tabBarLabel: 'Chats',
          tabBarBadge: '10',
          tabBarIcon: ({focused}) => tabBarIcon(focused, 'wechat', 'AntDesign'),
          headerLeft: () => headerLeft('menu', 'AntDesign'),
          headerRight: () => headerRight('camera', 'pluscircle', 'AntDesign'),
          tabBarStyle:{
            backgroundColor:
            colorScheme != 'dark'
              ? lightTheme?.colors?.WHITE
              : darkTheme?.colors?.BLACK, 
          },
          headerStyle: {
            backgroundColor:
              colorScheme != 'dark'
                ? lightTheme?.colors?.WHITE
                : darkTheme?.colors?.BLACK, // Specify the height of your custom header
          },
          headerTitleStyle: {
            color:
              colorScheme == 'dark'
                ? lightTheme?.colors?.WHITE
                : darkTheme?.colors?.LIGHT_BLACK,
          },
        }}
        name="Chats"
        component={HomeScreenNavigator}
      />
      <Tab.Screen
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          tabBarLabel: 'Settings',
          tabBarIcon: ({focused}) => tabBarIcon(focused, 'settings', 'Feather'),
          tabBarStyle:{
            backgroundColor:
            colorScheme != 'dark'
              ? lightTheme?.colors?.WHITE
              : darkTheme?.colors?.BLACK, 
          },
        }}
        name="Settings"
        component={SettingsScreenNavigator}
        
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  headerStyle: {
    marginHorizontal: '4%',
  },
  headerRightStyle: {
    flexDirection: 'row',
  },
  headerLeftStyle: {
    flexDirection: 'row',
  },
  headerRightTextStyle: {
    fontWeight: 'bold',
    fontSize: RFValue(15),
    color: '#87b8ea',
    marginHorizontal: '4%',
  },
  headerIcon: {
    marginHorizontal: '4%',
  },
});
export default BottomTab;
