/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Routes as Router } from './Routes';
import './App.css';
import _ from 'lodash'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {
          _.map(Router.webRoutes, (each, index)=>{
            const Component: any = each.Component;
            return <Route path={each.path} element={Component? <Component /> : null} key={index} />
          })
        }
      </Routes>
    </BrowserRouter>
  )
}

export default App
