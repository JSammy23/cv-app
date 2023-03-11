import React, { Component } from 'react'
import Header from './components/Header'
import Form from './components/FormCV/Form'
import Footer from './components/Footer'

export class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Form />
        <Footer />
      </>
    )
  }
}

export default App
