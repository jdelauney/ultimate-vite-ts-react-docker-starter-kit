import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import { ROUTES } from './routes'
import {Home, NotFound} from "~/App/pages";



const Router:FC = () => {
  return (
    <Routes>
      <Route path='*' element={<NotFound/>} />
      <Route path={ROUTES.HOME} element={<Home/>} />
      <Route path={ROUTES.NOT_FOUND} element={<NotFound/>} />
    </Routes>
    )
}

export { Router }
