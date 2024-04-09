
import React, { Component } from 'react'
import Home from './Home.js'
import Login from './Login.js'
import Register from './Register.js'
import Onbroding from './Onbroding.js'

export default class Index extends Component {
  render() {
    return (<>
        <Onbroding/>
        <Home/>
        <Login/>
        <Register/>
      </>
    )
  }
}