import firebase from 'firebase'

export const firebaseConfig = {
  apiKey: 'AIzaSyBeJHL8IP2jiT3M80eTo6xuxz6AEdBAtKY',
  authDomain: 'react-portfolio-9a649.firebaseapp.com',
  databaseURL: 'https://react-portfolio-9a649.firebaseio.com',
  projectId: 'react-portfolio-9a649',
  storageBucket: 'react-portfolio-9a649.appspot.com',
  messagingSenderId: '452478292193',
  appId: '1:452478292193:web:49d73fc475f3f7e3'
}

export const getData = (fieldName) => {
  let data = {}
  return firebase.database()
    .ref(fieldName)
    // .once('value')
    // .then((snapshot) => snapshot.val())
    // .then((value) => { data = value })
}