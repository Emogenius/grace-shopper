import React from 'react'
import {Navbar} from './components'
import {Sidebar} from './components'
import Routes from './routes'

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Navbar />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <Sidebar />
        </div>

        <div className="col">
          <Routes />
        </div>
      </div>
    </div>
  )
}

export default App
