import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import 'react-native-gesture-handler';
import {RFValue} from 'react-native-responsive-fontsize';
import {bottomTab as BottomTab} from './src/Navigation/bottomTab';
import MyStack from './src/Navigation/Stack';
import {NavigationContainer} from '@react-navigation/native';
import Firebase from './Firebase';
const App = () => {
  return (
    // <View style={{flex: 1}}>
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
    // </View>
  );
};
const styles = StyleSheet.create({});
export default App;
