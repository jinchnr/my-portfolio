import React, { Component } from 'react'
import firebase from 'firebase'
import { MainPage } from './components'
import { firebaseConfig } from './lib/utils/general'

class App extends Component {
  constructor(props) {
    super(props)
    firebase.initializeApp(firebaseConfig)
  }

  render() {
    return (
      <MainPage />
     )
  }
}

export default App
