import React from 'react'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import { Dashboard } from './Dashboard'
import { DashboardPrivate } from './DashboardPrivate'
import { PrivateRoute } from './PrivateRoute'
import { HashRouter } from 'react-router-dom'

export const AppRouter = () => {
  return (
    <HashRouter>
        <Routes>
          <Route path='/*' element={<Dashboard/>}/>
          <Route path='/admin/*' element={
            <PrivateRoute>
              <DashboardPrivate/>
            </PrivateRoute>
          } />
        </Routes>
    </HashRouter>
  )
}
