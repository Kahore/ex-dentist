import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyCPVyRcZKAH_8a5NT4wmUtsqAfh-Yb_i28',
  authDomain: 'ex-dentist.firebaseapp.com',
  databaseURL: 'https://vuejs-shopping-cart.firebaseio.com/'
}

firebase.initializeApp(config)

export function firebaseListener (func) {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // console.log("User log in success", user);
      func(true, user)
    } else {
      // console.log("User log in failed", user);
      func(false)
    }
  }, function (error) {
    console.log(error)
  })
}

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
