import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Error404 } from './containers/errors/Error404.jsx'
import { Home } from './containers/pages/Home.jsx'
import { Login } from './containers/pages/Login.jsx'
import { Registrate } from './containers/pages/Registrate.jsx'


function App () {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registrate' element={<Registrate />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
