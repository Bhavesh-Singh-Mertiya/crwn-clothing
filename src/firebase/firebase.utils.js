import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config = {
  apiKey: "AIzaSyB8o7njxINw8O1hE22st7zlTnmw06Y7Ii0",
  authDomain: "crwn-db-c9a6a.firebaseapp.com",
  databaseURL: "https://crwn-db-c9a6a.firebaseio.com",
  projectId: "crwn-db-c9a6a",
  storageBucket: "crwn-db-c9a6a.appspot.com",
  messagingSenderId: "484633855447",
  appId: "1:484633855447:web:45fd79ab1cf2d1b38a7792",
  measurementId: "G-N32GGTXTY8"
}
  
  // for initialization
firebase.initializeApp(config)      


// for exporting auth and firestore which can be used anywhere in project
export const auth = firebase.auth()  
export const firestore = firebase.firestore()

// to setup Sign IN with google
// this gives access to new google auth provider class from authentication library
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)



export default firebase
