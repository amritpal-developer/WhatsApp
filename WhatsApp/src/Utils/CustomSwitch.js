import React, {useState} from 'react';

import {StyleSheet, Text, View, TouchableOpacity, SafeAreaView} from 'react-native';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { RFValue } from 'react-native-responsive-fontsize';

const CustomSwitch = ({
  navigation,
  selectionMode,
  roundCorner,
  option1,
  option2,
  onSelectSwitch,
  selectionColor,
}) => {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);
  const [getRoundCorner, setRoundCorner] = useState(roundCorner);

  const updatedSwitchData = val => {
    setSelectionMode(val);
    onSelectSwitch(val);
  };

  return (
    <SafeAreaView>
      <View
        style={{
          height:responsiveScreenHeight(4),
          width: responsiveScreenWidth(40),
          backgroundColor: '#999999',
          borderRadius: getRoundCorner ? RFValue(8) : 0,
          borderWidth: RFValue(1),
          borderColor: selectionColor,
          flexDirection: 'row',
          justifyContent: 'center',
          padding: "2%",
        }}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => updatedSwitchData(1)}
          style={{
            flex: 1,

            backgroundColor: getSelectionMode == 1 ? selectionColor : '#999999',
            borderRadius: getRoundCorner ?  RFValue(5) : 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
                color: "black",
                fontWeight:'700'
            }}>
            {option1}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          TouchableOpacity
          activeOpacity={1}
          onPress={() => updatedSwitchData(2)}
          style={{
            flex: 1,
            backgroundColor: getSelectionMode == 2 ? selectionColor : '#999999',
            borderRadius: getRoundCorner ?  RFValue(5) : 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: "black",
              fontWeight:'700'
            }}>
            {option2}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default CustomSwitch;
