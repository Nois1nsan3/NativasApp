import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from './containers/pages/Home.jsx'
import { Login } from './containers/pages/Login.jsx'
import { Registrate } from './containers/pages/Registrate.jsx'
import { AdmPage } from './containers/pages/AdmPage.jsx'
import { RecoverPass } from './containers/pages/RecoverPass.jsx'

function App () {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registrate' element={<Registrate />} />
        <Route path='/recuperar-contraseña' element={<RecoverPass />} />
        <Route path='/adm' element={<AdmPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
