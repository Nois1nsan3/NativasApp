import React from 'react'
// import Login from './components/Login'

import { Error404 } from './containers/errors/Error404.jsx'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Registrate } from './containers/pages/Registrate.jsx'

function App () {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/registrate' element={<Registrate />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
