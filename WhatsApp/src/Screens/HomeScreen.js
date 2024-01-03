import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import 'react-native-gesture-handler';
import {RFValue} from 'react-native-responsive-fontsize';
import {FlatList} from 'react-native-gesture-handler';
import Avatar from '../assets/svg/avatar.svg';
import {
  responsiveScreenWidth,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';
import moment from 'moment';
const HomeScreen = ({navigation}) => {
  let localTime = moment().format('h:mm A');
  const DATA = [
    {
      id: '1',
      name: 'First Item',
      lastMessage: 'hi tom',
      image: '',
      time: localTime,
    },
    {
      id: '2',
      name: 'Second Item',
      lastMessage: 'ok g',
      image: '',
      time: localTime,
    },
    {
      id: '3',
      name: 'Third Item',
      lastMessage: 'hello',
      image: '',
      time: localTime,
    },
  ];

  const Item = ({item}) => (
    <TouchableOpacity
      style={styles.chatBox}
      onPress={() => navigation.navigate('ChatHistory')}>
      <Avatar
        height={responsiveScreenHeight(12)}
        width={responsiveScreenWidth(12)}
      />
      <View style={styles.chatContent}>
        <View style={styles.chatRow}>
          <Text style={styles.userName}>{item?.name}</Text>
          <Text style={styles.chatLastMessage}>{item?.time}</Text>
        </View>
        <Text style={styles.chatLastMessage}>{item?.lastMessage}</Text>
      </View>
    </TouchableOpacity>
  );
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
        <Text style={styles.archivedText}>Archived</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.id}
      />
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
  chatRow: {
    flexDirection: 'row',
  },
  chatLastMessage: {
    fontSize: RFValue(12),
  },
  userName: {
    width: '70%',
    fontSize: RFValue(14),
    fontWeight: '600',
  },
  chatBox: {
    // backgroundColor: 'grey',
    borderTopWidth: RFValue(1),
    padding: '2%',
    // paddingVertical: '2%',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#AAAAAA',
  },
  chatContent: {
    flexDirection: 'column',
    marginHorizontal: '3%',
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
  ImagePickerEmpty: {
    justifyContent: 'center',
    alignItems: 'center',
    height: responsiveScreenHeight(8),
    aspectRatio: 1,
    borderRadius: RFValue(100),
    borderColor: 'white',
    borderWidth: RFValue(1),
    marginStart: '5%',
  },
  ImagePickerEdit: {
    // bottom: RFValue(18),
    fontSize: RFValue(12),
    fontWeight: '600',
    color: 'blue',
    textAlign: 'center',
    padding: '5%',
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
