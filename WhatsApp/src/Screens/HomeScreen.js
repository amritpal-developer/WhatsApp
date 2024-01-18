import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Image,
  useColorScheme,
} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import 'react-native-gesture-handler';
import {RFValue} from 'react-native-responsive-fontsize';
import {darkTheme, lightTheme} from '../Utils/theme';
import {FlatList} from 'react-native-gesture-handler';
import Avatar from '../assets/svg/avatar.svg';
import {
  responsiveScreenWidth,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';
import moment from 'moment';
import DATA from '../data/chats.json';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
const HomeScreen = ({navigation}) => {
  const colorScheme = useColorScheme();
  const Item = ({item}) => (
    <TouchableOpacity
      style={styles.chatBox}
      onPress={() => navigation.navigate('ChatHistory')}>
      <Image source={{uri: item?.user?.image}} style={styles.image} />
      <View style={styles.chatContent}>
        <View style={styles.chatRow}>
          <Text
            numberOfLines={1}
            style={[
              styles.userName,
              {
                color:
                  colorScheme == 'dark'
                    ? lightTheme?.colors?.WHITE
                    : darkTheme?.colors?.LIGHT_BLACK,
              },
            ]}>
            {item?.user?.name}
          </Text>
          <Text
            style={[
              styles.timeStamp,
              {
                color:
                  colorScheme == 'dark'
                    ? lightTheme?.colors?.WHITE
                    : darkTheme?.colors?.LIGHT_BLACK,
              },
            ]}>
            {dayjs(item?.lastMessage?.createdAt).fromNow(true)}
          </Text>
        </View>
        <Text
          numberOfLines={2}
          style={[
            styles.chatLastMessage,
            {
              color:
                colorScheme == 'dark'
                  ? lightTheme?.colors?.WHITE
                  : darkTheme?.colors?.LIGHT_BLACK,
            },
          ]}>
          {item?.lastMessage?.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor:
            colorScheme != 'dark'
              ? lightTheme?.colors?.WHITE
              : darkTheme?.colors?.BLACK,
        },
      ]}>
      {/* <Text style={styles.headerText}>Chats</Text> */}
      <View style={styles.ArchiveSection}>
        <FontAwesome
          style={styles.archiveIcon}
          name="archive"
          color={'grey'}
          size={RFValue(20)}
        />
        <Text
          style={[
            styles.archivedText,
            {
              color:
                colorScheme == 'dark'
                  ? lightTheme?.colors?.WHITE
                  : darkTheme?.colors?.LIGHT_BLACK,
            },
          ]}>
          Archived
        </Text>
      </View>
      <FlatList
        contentContainerStyle={{
          padding: '2%',
        }}
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
  timeStamp: {
    flex: 1,
    textAlign: 'right',
    fontSize: RFValue(12),
  },
  container: {
    flex: 1,
  },
  chatRow: {
    width: responsiveScreenWidth(60),
    flexDirection: 'row',
  },
  chatLastMessage: {
    flex: 1,
    fontSize: RFValue(12),
    width: responsiveScreenWidth(50),
    flexWrap: 'wrap',
    // backgroundColor:'red'
  },
  userName: {
    // width: '70%',
    fontSize: RFValue(14),
    fontWeight: '600',
  },
  chatBox: {
    // backgroundColor: 'grey',
    borderTopWidth: StyleSheet.hairlineWidth,
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
    marginVertical: '4%',
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
  image: {
    width: responsiveScreenWidth(20),
    aspectRatio: 1,
    borderRadius: RFValue(100),
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
