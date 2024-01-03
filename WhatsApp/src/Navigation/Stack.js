import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTab from './bottomTab';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LoginScreen from '../Screens/LoginScreen';
import EditProfileScreen from '../Screens/EditProfileScreen';
import ChatHistory from '../Screens/ChatHistory';
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        options={{
          headerShown: false,
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
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="ChatHistory" component={ChatHistory} />
    </Stack.Navigator>
  );
}

export default MyStack;
