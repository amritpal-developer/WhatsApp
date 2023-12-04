import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import CommonTextInput from '../components/TextInput';
import { Avatar } from 'react-native-paper';

const SignUpScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.headerText}>Edit your Profile</Text>
       <Avatar.Image size={RFValue(30)}
        source={require('../assets/images/Avatar.jpeg')}
      />
        <CommonTextInput
        label={"Name"}
        
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(SignUpScreen);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '3%',
    backgroundColor:'white'
  },
  headerText: {
    textAlign: 'center',
    fontSize: RFValue(15),
  },
});
