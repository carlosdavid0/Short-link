import React from 'react'

import {Routes, Route} from 'react-router-dom'
import Main from '../components/main'
import Links from '../pages/adm/Links'
import GetLink from '../pages/create-link'
import CreateLink from '../pages/create-link'

export default function Rotas() {
  return (
<Routes>
    <Route path='/admin' element={<Main />}>
      <Route path='links' element={<Links />} />
    </Route>
    <Route path='/:code' element={<GetLink />} />
    <Route path='*' element={<div>404</div>} />
</Routes>
  )
}
