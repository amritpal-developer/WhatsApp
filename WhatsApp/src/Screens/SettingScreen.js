import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {RFValue} from 'react-native-responsive-fontsize';
import {Avatar} from 'react-native-paper';
import Scan from '../assets/svg/scan.svg';
import Male from '../assets/svg/maleAvatar.svg';
import Female from '../assets/svg/femaleAvatar.svg';
import BroadCast from '../assets/svg/BroadcastIcon.svg';
import Star from '../assets/svg/StarIcon.svg';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
const SettingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.profileBox}>
          <View style={styles.profileRow}>
            <Avatar.Image
              size={RFValue(50)}
              source={require('../assets/images/avatar.png')}
            />
            <View style={styles.column}>
              <Text style={styles.name}>{'Amritpal'}</Text>
              <Text style={styles.status}>{'Status'}</Text>
            </View>
            <View style={styles.circleView}>
              <Scan
                width={responsiveScreenWidth(5)}
                height={responsiveScreenHeight(5)}></Scan>
            </View>
          </View>
          <View style={styles.dash}></View>
          <View style={styles.avatarSection}>
            {true ? (
              <Male
                width={responsiveScreenWidth(7)}
                height={responsiveScreenHeight(7)}></Male>
            ) : (
              <Female
                width={responsiveScreenWidth(7)}
                height={responsiveScreenHeight(7)}></Female>
            )}
            <View style={styles.avatarTextView}>
              <Text style={styles.avatarText}>{'Avatar'}</Text>
            </View>
            <MaterialIcons
              style={styles.headerIcon}
              name={'keyboard-arrow-right'}
              color={'white'}
              size={RFValue(25)}
            />
          </View>
        </View>
        <View style={styles.profileBox}>
          <View style={styles.avatarSection}>
            <BroadCast
              width={responsiveScreenWidth(7)}
              height={responsiveScreenHeight(7)}></BroadCast>

            <View style={styles.avatarTextView}>
              <Text style={styles.avatarText}>{'Broadcast Lists'}</Text>
            </View>
            <MaterialIcons
              style={styles.headerIcon}
              name={'keyboard-arrow-right'}
              color={'white'}
              size={RFValue(25)}
            />
          </View>
          <View style={styles.dash}></View>
          <View style={styles.avatarSection}>
            <Star
              width={responsiveScreenWidth(7)}
              height={responsiveScreenHeight(7)}></Star>

            <View style={styles.avatarTextView}>
              <Text style={styles.avatarText}>{'Starred Messages'}</Text>
            </View>
            <MaterialIcons
              style={styles.headerIcon}
              name={'keyboard-arrow-right'}
              color={'white'}
              size={RFValue(25)}
            />
          </View>
          <View style={styles.dash}></View>
          <View style={styles.avatarSection}>
            <Male
              width={responsiveScreenWidth(7)}
              height={responsiveScreenHeight(7)}></Male>

            <View style={styles.avatarTextView}>
              <Text style={styles.avatarText}>{'Linked Devices'}</Text>
            </View>
            <MaterialIcons
              style={styles.headerIcon}
              name={'keyboard-arrow-right'}
              color={'white'}
              size={RFValue(25)}
            />
          </View>
        </View>
        <View style={styles.profileBox}>
          <View style={styles.avatarSection}>
            <BroadCast
              width={responsiveScreenWidth(7)}
              height={responsiveScreenHeight(7)}></BroadCast>

            <View style={styles.avatarTextView}>
              <Text style={styles.avatarText}>{'Account'}</Text>
            </View>
            <MaterialIcons
              style={styles.headerIcon}
              name={'keyboard-arrow-right'}
              color={'white'}
              size={RFValue(25)}
            />
          </View>
          <View style={styles.dash}></View>
          <View style={styles.avatarSection}>
            <Star
              width={responsiveScreenWidth(7)}
              height={responsiveScreenHeight(7)}></Star>

            <View style={styles.avatarTextView}>
              <Text style={styles.avatarText}>{'Privacy'}</Text>
            </View>
            <MaterialIcons
              style={styles.headerIcon}
              name={'keyboard-arrow-right'}
              color={'white'}
              size={RFValue(25)}
            />
          </View>
          <View style={styles.dash}></View>
          <View style={styles.avatarSection}>
            <Star
              width={responsiveScreenWidth(7)}
              height={responsiveScreenHeight(7)}></Star>

            <View style={styles.avatarTextView}>
              <Text style={styles.avatarText}>{'Chats'}</Text>
            </View>
            <MaterialIcons
              style={styles.headerIcon}
              name={'keyboard-arrow-right'}
              color={'white'}
              size={RFValue(25)}
            />
          </View>

          <View style={styles.dash}></View>
          <View style={styles.avatarSection}>
            <Male
              width={responsiveScreenWidth(7)}
              height={responsiveScreenHeight(7)}></Male>

            <View style={styles.avatarTextView}>
              <Text style={styles.avatarText}>{'Notifications'}</Text>
            </View>
            <MaterialIcons
              style={styles.headerIcon}
              name={'keyboard-arrow-right'}
              color={'white'}
              size={RFValue(25)}
            />
          </View>

          <View style={styles.dash}></View>
          <View style={styles.avatarSection}>
            <Male
              width={responsiveScreenWidth(7)}
              height={responsiveScreenHeight(7)}></Male>

            <View style={styles.avatarTextView}>
              <Text style={styles.avatarText}>{'Payments'}</Text>
            </View>
            <MaterialIcons
              style={styles.headerIcon}
              name={'keyboard-arrow-right'}
              color={'white'}
              size={RFValue(25)}
            />
          </View>

          <View style={styles.dash}></View>
          <View style={styles.avatarSection}>
            <Male
              width={responsiveScreenWidth(7)}
              height={responsiveScreenHeight(7)}></Male>

            <View style={styles.avatarTextView}>
              <Text style={styles.avatarText}>{'Storage and Data'}</Text>
            </View>
            <MaterialIcons
              style={styles.headerIcon}
              name={'keyboard-arrow-right'}
              color={'white'}
              size={RFValue(25)}
            />
          </View>
        </View>
        <View style={styles.profileBox}>
          <View style={styles.avatarSection}>
            <Star
              width={responsiveScreenWidth(7)}
              height={responsiveScreenHeight(7)}></Star>

            <View style={styles.avatarTextView}>
              <Text style={styles.avatarText}>{'Help'}</Text>
            </View>
            <MaterialIcons
              style={styles.headerIcon}
              name={'keyboard-arrow-right'}
              color={'white'}
              size={RFValue(25)}
            />
          </View>
          <View style={styles.dash}></View>
          <View style={styles.avatarSection}>
            <View style={styles.redSquare}>
            <AntDesign
              style={styles.headerIcon}
              name={'heart'}
              color={'white'}
              size={RFValue(15)}
            />
            </View>
            <View style={styles.avatarTextView}>
              <Text style={styles.avatarText}>{'Tell a friend'}</Text>
            </View>
            <MaterialIcons
              style={styles.headerIcon}
              name={'keyboard-arrow-right'}
              color={'white'}
              size={RFValue(25)}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(SettingScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: '2%',
    marginVertical: '4%',
  },
  profileBox: {
    flex: 1,
    padding: '2%',
    backgroundColor: 'grey',
    borderRadius: RFValue(10),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '4%',
    marginVertical: '2%',
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  column: {
    flex: 1,
    marginHorizontal: '3%',
    flexDirection: 'column',
  },
  name: {
    color: 'white',
    fontSize: RFValue(20),
    fontWeight: '700',
  },
  status: {
    color: 'white',
    fontSize: RFValue(18),
    fontWeight: '500',
  },
  dash: {
    borderWidth: RFValue(1),
    borderStyle: 'solid',
    borderColor: 'white',
    width: '100%',
    marginVertical: '2%',
  },
  avatarSection: {
    height: responsiveScreenHeight(4),
    flexDirection: 'row',
    alignItems: 'center',
  },
  redSquare: {
    borderRadius: RFValue(5),
    height: responsiveScreenHeight(3.5),
    aspectRatio:1,
    backgroundColor: 'red',
    justifyContent:'center',
    alignItems:'center'
  },
  avatarTextView: {
    flex: 1,
    marginHorizontal: '4%',
  },
  avatarText: {
    fontSize: RFValue(15),
    color: 'white',
  },
  circleView: {
    borderRadius: RFValue(100),
    width: responsiveScreenWidth(10),
    aspectRatio: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Box2: {
    flex: 1,
    backgroundColor: 'grey',
    marginVertical: '2%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
