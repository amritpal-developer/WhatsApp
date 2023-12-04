// import auth from '@react-native-firebase/auth';
// import Firebase from './Firebase';
// import {useState} from 'react';
// import {Alert} from 'react-native';
// // async function PhoneNumberAuth(phoneNumber) {
// //   console.log(phoneNumber,"hhhhhh")
// //   const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
// //    console.log(confirmation);
// // }
// async function PhoneNumberAuth (phoneNumber ) {

//     const confirmation = await auth().verifyPhoneNumber(phoneNumber);
//     setConfirm(confirmation);
  

//   // Handle confirm code button press
//   async function confirmCode() {
//     try {
//       const credential = auth.PhoneAuthProvider.credential(confirm.verificationId, code);
//       let userData = await auth().currentUser.linkWithCredential(credential);
//       setUser(userData.user);
//     } catch (error) {
//       if (error.code == 'auth/invalid-verification-code') {
//         console.log('Invalid code.');
//       } else {
//         console.log('Account linking error');
//       }
//     }
//   }

// };
// export default PhoneNumberAuth;
