import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  Modal,
  Image,
  TouchableOpacity,
  TextInput,
  useColorScheme,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import CommonTextInput from '../components/TextInput';
import Arrow from '../assets/svg/arrow.svg';
import {Avatar} from 'react-native-paper';
import DarkArrow from '../assets/svg/darkArrow.svg';
import AvatarIcon from '../assets/svg/avatar.svg';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  responsiveScreenWidth,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';
import Feather from 'react-native-vector-icons/Feather';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {setThemeBoolean} from '../storage/ThemeSlice';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {darkTheme, lightTheme} from '../Utils/theme';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import uuid from 'react-native-uuid';
import firestore from '@react-native-firebase/firestore';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
const EditProfileScreen = ({navigation, route}) => {
  const number = route?.params?.phoneNumber;
  const deviceTheme = useColorScheme();
  const dispatch = useDispatch();
  const theme = useSelector(state => state?.name);
  const [imageResult, setImageResult] = useState();
  const [focus, setFocus] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [nameCount, setNameCount] = useState(25);
  const [about, setAbout] = useState('');
  useEffect(() => {
    if ((name && number && about) || imageResult?.assets[0]?.uri) {
      setDataOnCloud();
    }
  }, []);
  function themeSwitch() {
    if (deviceTheme == 'light') {
      dispatch(setThemeBoolean(true));
    } else {
      dispatch(setThemeBoolean(false));
    }
  }
  useEffect(() => {
    themeSwitch();
  }, [deviceTheme]);
  function setDataOnCloud() {
    // const userID = uuid.v4();
    firestore()
      .collection('Users')
      .doc(route?.params?.phoneNumber)
      .set({
        phoneNumber: route?.params?.phoneNumber
          ? route?.params?.phoneNumber
          : '',
        name: name ? name : '',
        image: imageResult?.assets[0]?.uri ? imageResult?.assets[0]?.uri : '',
        about: about ? about : '',
        userId: route?.params?.phoneNumber,
      })
      .then(response => {
        console.log('cloudResponse', response);
      })
      .catch(Exception => {
        console.log('error', Exception);
      });
  }
  async function OpenCamera() {
    launchCamera();
    const result = await launchCamera();
    setImageResult(result);
    console.log('camera ', result);
    setModalVisible(false);
  }
  async function OpenGallery() {
    launchImageLibrary();
    const result = await launchImageLibrary();
    setImageResult(result);
    console.log('gallery ', result);
    setModalVisible(false);
  }
  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: theme
            ? lightTheme?.colors?.WHITE
            : darkTheme?.colors?.BLACK,
        },
      ]}>
      <ScrollView
        style={[
          styles.container,
          {
            backgroundColor: theme
              ? lightTheme?.colors?.WHITE
              : darkTheme?.colors?.BLACK,
          },
        ]}
        showsVerticalScrollIndicator={false}>
        <Text
          style={[
            styles.headerText,
            {
              color: !theme
                ? lightTheme?.colors?.WHITE
                : darkTheme?.colors?.LIGHT_BLACK,
            },
          ]}>
          Edit Profile
        </Text>
        <View
          style={[
            styles.ProfileData,
            {
              backgroundColor: theme
                ? lightTheme?.colors?.WHITE
                : darkTheme?.colors?.LIGHT_BLACK,
            },
          ]}>
          <View style={styles.row}>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
              {!imageResult ? (
                <View style={styles.ImagePickerEmpty}>
                  <Text
                    style={[
                      styles.ImagePickerEdit,
                      {
                        color: !theme
                          ? lightTheme?.colors?.WHITE
                          : darkTheme?.colors?.LIGHT_BLACK,
                      },
                    ]}>
                    add Photo
                  </Text>
                </View>
              ) : (
                <View style={styles.ImagePicker}>
                  <Avatar.Image
                    size={RFValue(50)}
                    source={{uri: imageResult?.assets[0]?.uri}}
                  />
                  <Text
                    style={[
                      styles.ImagePickerEdit2,
                      {
                        color: !theme
                          ? lightTheme?.colors?.WHITE
                          : darkTheme?.colors?.LIGHT_BLACK,
                      },
                    ]}>
                    Edit
                  </Text>
                </View>
              )}
            </TouchableWithoutFeedback>
            <Text
              style={[
                styles.MessageText,
                {
                  color: !theme
                    ? lightTheme?.colors?.WHITE
                    : darkTheme?.colors?.LIGHT_BLACK,
                },
              ]}>
              {'Enter the name and add an optional profile picture'}
            </Text>
          </View>
          <View style={styles.column}>
            <View style={styles.dash}></View>
            <View style={styles.TextInputView}>
              <TextInput
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                style={[styles.input,{
                  color: !theme
                  ? lightTheme?.colors?.WHITE
                  : darkTheme?.colors?.LIGHT_BLACK,
                }]}
                placeholderTextColor={{
                  color: !theme
                    ? lightTheme?.colors?.WHITE
                    : darkTheme?.colors?.LIGHT_BLACK,
                }}
                maxLength={25}
                onChangeText={text => {
                  setName(text);
                  setNameCount(25 - text.length);
                }}
                value={name}
                placeholder="Name"
              />
              {focus ? (
                <Text
                  style={{
                    color: !theme
                      ? lightTheme?.colors?.WHITE
                      : darkTheme?.colors?.LIGHT_BLACK,
                  }}>
                  {nameCount}
                </Text>
              ) : null}
            </View>
            <View style={styles.dash}></View>
          </View>
        </View>
        <Text
          style={[
            styles.phoneNumber,
            {
              color: !theme
                ? lightTheme?.colors?.WHITE
                : darkTheme?.colors?.LIGHT_BLACK,
            },
          ]}>
          PHONE NUMBER
        </Text>
        <View
          style={[
            styles.ProfileData,
            {
              backgroundColor: theme
                ? lightTheme?.colors?.WHITE
                : darkTheme?.colors?.LIGHT_BLACK,
            },
          ]}>
          <Text
            style={[
              styles.Number,
              {
                color: !theme
                  ? lightTheme?.colors?.WHITE
                  : darkTheme?.colors?.LIGHT_BLACK,
              },
            ]}>
            {number}
          </Text>
        </View>
        <Text
          style={[
            styles.phoneNumber,
            {
              color: !theme
                ? lightTheme?.colors?.WHITE
                : darkTheme?.colors?.LIGHT_BLACK,
            },
          ]}>
          ABOUT
        </Text>
        <TouchableOpacity
          style={[
            styles.ProfileData,
            {
              backgroundColor: theme
                ? lightTheme?.colors?.WHITE
                : darkTheme?.colors?.LIGHT_BLACK,
            },
          ]}>
          <View style={styles.aboutRow}>
            <Text
              style={[
                styles.aboutText,
                {
                  color: !theme
                    ? lightTheme?.colors?.WHITE
                    : darkTheme?.colors?.LIGHT_BLACK,
                },
              ]}>
              {'#WMk'}
            </Text>
            <MaterialIcons
              style={styles.archiveIcon}
              name="keyboard-arrow-right"
              color={!theme ? 'white' : 'black'}
              size={RFValue(25)}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Home')}>
          {theme ? (
            <Arrow
              height={responsiveScreenHeight(14)}
              width={responsiveScreenWidth(14)}
            />
          ) : (
            <DarkArrow
              height={responsiveScreenHeight(14)}
              width={responsiveScreenWidth(14)}
            />
          )}
        </TouchableOpacity>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={styles.modal}>
          <View style={styles.ImagePickerModal}>
            <View style={styles.ModalHeader}>
              <Text style={styles.ModalHeaderText}>Edit Profile Picture</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <MaterialIcons
                  style={styles.Icon}
                  name={'cancel'}
                  color={'white'}
                  size={RFValue(30)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.modalContainer}>
              <TouchableOpacity style={styles.rowBtn} onPress={OpenCamera}>
                <View style={styles.ModalRow}>
                  <Text style={styles.RowText}>Take Photo</Text>
                  <Feather
                    style={styles.Icon}
                    name={'camera'}
                    color={'white'}
                    size={RFValue(25)}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.rowBtn} onPress={OpenGallery}>
                <View style={styles.ModalRow}>
                  <Text style={styles.RowText}>Choose Photo</Text>
                  <EvilIcons
                    style={styles.Icon}
                    name={'image'}
                    color={'white'}
                    size={RFValue(30)}
                  />
                </View>
              </TouchableOpacity>
              {imageResult && (
                <TouchableOpacity
                  style={styles.rowBtn}
                  onPress={() => {
                    setImageResult();
                    setModalVisible(false);
                  }}>
                  <View style={styles.ModalRow}>
                    <Text style={styles.RowTextDelete}>Delete Photo</Text>
                    <AntDesign
                      style={styles.Icon}
                      name={'delete'}
                      color={'red'}
                      size={RFValue(25)}
                    />
                  </View>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default React.memo(EditProfileScreen);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '3%',
    backgroundColor: 'white',
  },
  aboutRow: {
    flexDirection: 'row',
  },
  btn: {
    flex: 1,
    bottom: 0,
    borderRadius: RFValue(7),
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },
  Number: {
    color: 'black',
    fontSize: RFValue(13),
    fontWeight: '700',
    marginStart: '2%',
    textAlign: 'left',
    alignSelf: 'flex-start',
    paddingVertical: '2%',
  },
  aboutText: {
    color: 'black',
    fontSize: RFValue(13),
    fontWeight: '700',
    marginStart: '2%',
    textAlign: 'left',
    alignSelf: 'flex-start',
    paddingVertical: '2%',
    flex: 1,
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  phoneNumber: {
    color: 'black',
    fontSize: RFValue(13),
    fontWeight: '700',
    marginStart: '5%',
    marginTop: '5%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '5%',
  },

  headerText: {
    textAlign: 'center',
    fontSize: RFValue(15),
    marginVertical: '2%',
  },
  input: {
    width: responsiveScreenWidth(80),
    height: responsiveScreenHeight(4),
    alignItems: 'center',
  },
  ProfileData: {
    // flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    borderRadius: RFValue(8),
    padding: '3%',
    marginVertical: '2%',
  },
  dash: {
    borderWidth: RFValue(1),
    borderStyle: 'solid',
    borderColor: 'white',
    width: responsiveScreenWidth(90),
    marginVertical: '2%',
    marginStart: '5%',
  },
  ImagePicker: {
    justifyContent: 'center',
    alignItems: 'center',
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
  ImagePickerEdit2: {
    top: RFValue(8),
    fontSize: RFValue(13),
    fontWeight: '700',
    color: 'blue',
  },
  TextInputView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  MessageText: {
    marginHorizontal: '4%',
    flexWrap: 'wrap',
    width: '75%',
    textAlignVertical: 'top',
  },
  ImagePickerModal: {
    backgroundColor: 'grey',
    borderTopRightRadius: RFValue(13),
    borderTopLeftRadius: RFValue(13),
    flex: 0.34,
    padding: '3%',
  },
  modal: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  ModalHeader: {
    // flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '8%',
  },
  ModalHeaderText: {
    fontSize: RFValue(15),
    color: 'white',
    textAlign: 'center',
    flex: 1,
  },
  ModalRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowBtn: {
    borderBottomWidth: RFValue(1),
    paddingVertical: '3%',
    borderColor: 'white',
  },
  RowText: {
    flex: 1,
    fontSize: RFValue(15),
    color: 'white',
  },
  RowTextDelete: {
    flex: 1,
    fontSize: RFValue(15),
    color: 'red',
  },
  modalContainer: {
    // flex: 0.2,
    backgroundColor: 'black',
    borderRadius: RFValue(13),
    padding: '3%',
    // bottom: '10%',
    justifyContent: 'center',
  },
});
