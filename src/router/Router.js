import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from '../views/home/Home';

export const Router = () => {
    return (
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/inicio' element={<Home></Home>}></Route>
          </Routes>
      </BrowserRouter>
    )
  }