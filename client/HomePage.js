import React, {Component} from 'react'
import {Link} from 'react-router-dom'
// import Navbar from './components/navbar'

export default class HomePage extends Component {
  render() {
    return (
      <div className="items">
        <main>
          <h1 className="mainPage">Emogenius</h1>
          <h2 className="mainPage">Welcome!</h2>
          <h3>emojis are great! </h3>
        </main>
      </div>
    )
  }
}
