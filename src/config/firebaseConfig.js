import firebase from 'firebase'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyCPVyRcZKAH_8a5NT4wmUtsqAfh-Yb_i28',
  authDomain: 'ex-dentist.firebaseapp.com',
  databaseURL: 'https://ex-dentist.firebaseio.com',
  projectId: 'ex-dentist',
  storageBucket: 'ex-dentist.appspot.com',
  messagingSenderId: '241661668517',
  appId: '1:241661668517:web:e20169cc1a6ce53212714c'
}

const firebaseApp = firebase.initializeApp(config)

// export function firebaseListener (func) {
//   firebase.auth().onAuthStateChanged(function (user) {
//     if (user) {
//       // console.log("User log in success", user);
//       func(true, user)
//     } else {
//       // console.log("User log in failed", user);
//       func(false)
//     }
//   }, function (error) {
//     console.log(error)
//   })
// }
export default firebaseApp.firestore()
export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
