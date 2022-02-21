import firebase from 'firebase'

  const firebaseConfig = {
    apiKey: "AIzaSyAu6VZ6qxMCnipGSKJ5eMiReXjwVz0vGa8",
    authDomain: "tesla-web-clone-87fb1.firebaseapp.com",
    projectId: "tesla-web-clone-87fb1",
    storageBucket: "tesla-web-clone-87fb1.appspot.com",
    messagingSenderId: "785521001929",
    appId: "1:785521001929:web:5b8146c19ec872f0cdd418"
  }
  
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  
  const auth = firebaseApp.auth()
  
  export { auth }