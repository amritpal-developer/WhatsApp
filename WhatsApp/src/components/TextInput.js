import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {RFValue} from 'react-native-responsive-fontsize';
const CommonTextInput = ({value, style, label, setValue}) => {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.TextInput}
        label={label}
        value={value}
        onChangeText={text => setValue(text)}
        mode="outlined"
        activeOutlineColor="#25D366"
      />
    </SafeAreaView>
  );
};

export default CommonTextInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  TextInput: {
    height: responsiveScreenHeight(6),
    width: responsiveScreenWidth(80),
  },
});
