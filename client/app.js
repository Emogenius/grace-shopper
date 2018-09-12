import React from 'react'
import {Navbar} from './components'
import {Sidebar} from './components'
import Routes from './routes'

function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Routes />
    </div>
  )
}

export default App
