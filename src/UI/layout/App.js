import React, { Component, Fragment } from 'react'
import './App'

import Header from './Header'
import Main from './Main'
import Footer from './Footer'

export default class App extends Component {
  render() {
    return (
        <Fragment>
          <Header/>
          <Main/>
          <Footer/>
        </Fragment>
    )
  }
}
