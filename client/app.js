import React from 'react'
import {Navbar, Sidebar, Footer} from './components'
import Routes from './routes'

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <Navbar />
        </div>
      </div>

      <div className="row">
        <div className="col-xs-12 col-md-3">
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
