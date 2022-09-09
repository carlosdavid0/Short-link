import React from 'react'

import {Routes, Route} from 'react-router-dom'
import Links from '../pages/adm/Links'
import CreateLink from '../pages/create-link'

export default function Rotas() {
  return (
<Routes>
    <Route path='/' element={<Links />} />
    {/* <Route path='*' element={<div>404</div>} /> */}

</Routes>
  )
}
