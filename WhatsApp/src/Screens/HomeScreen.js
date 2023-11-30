import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import 'react-native-gesture-handler';
import {RFValue} from 'react-native-responsive-fontsize';
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Chats</Text>
      <View style={styles.ArchiveSection}>
        <MaterialCommunityIcons
          style={styles.archiveIcon}
          name="plus"
          color={'grey'}
          size={RFValue(25)}
        />
        <Text style={styles.archivedText}>Archieved</Text>
      </View>
      <View style={styles.bottomLine}></View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  headerIcons: {
    flexDirection: 'row',
  },
  menuIcon: {
    flex: 1,
  },
  container: {
    flex: 1,
    margin: '3%',
  },
  headerText: {
    // flex:1,
    marginTop: '4%',
    marginBottom: '10%',
    fontSize: RFValue(20),
    fontWeight: '900',
  },
  cameraIcon: {
    flex: 0.2,
  },
  ArchiveSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  archivedText: {
    fontSize: RFValue(14),
    color: 'black',
    fontWeight: '700',
  },
  archiveIcon: {
    marginHorizontal: '3%',
    flex: 0.1,
  },
  bottomLine: {
    borderWidth: 1,
    borderBottomColor: 'grey',
    marginVertical: '3%',
    marginStart: '14%',
  },
});
export default React.memo(HomeScreen);
