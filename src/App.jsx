import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Error404 } from './containers/errors/Error404'
import { Home } from './containers/pages/Home.jsx'
import { Login } from './containers/pages/Login.jsx'
import { Registrate } from './containers/pages/Registrate.jsx'
import { AdmPage } from './containers/pages/AdmPage.jsx'
import { UserPage } from './containers/pages/UserPage.jsx'
import { RecoverPass } from './containers/pages/RecoverPass.jsx'
import { SolicitudPage } from './containers/pages/SolicitudPage.jsx'

function App () {
  return (

    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registrate' element={<Registrate />} />
        <Route path='/recuperar' element={<RecoverPass />} />
        <Route path='/solicitud' element={<SolicitudPage />} />
        <Route path='/adm' element={<AdmPage />} />
        <Route path='/user' element={<UserPage />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </Router>
  )
}

export default App
