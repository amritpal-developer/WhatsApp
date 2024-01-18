import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {RFValue} from 'react-native-responsive-fontsize';
const InputBox = () => {
  return (
    <View style={styles.container}>
      <AntDesign name="plus" size={RFValue(24)} color={'royalblue'} />
      <TextInput style={styles.input} placeholder="type the message" />
      <MaterialIcons
        name="send"
        size={RFValue(22)}
        color={'white'}
        style={styles.sendBtn}
      />
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: '2%',
    paddingHorizontal: '2%',
    alignItems:'center'
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    padding: '2%',
    paddingHorizontal: '2%',
    borderRadius: RFValue(50),
    borderWidth: StyleSheet.hairlineWidth,
    marginHorizontal: '2%',
  },
  sendBtn: {
    backgroundColor: 'royalblue',
    padding: '2%',
    borderRadius: RFValue(20),
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
