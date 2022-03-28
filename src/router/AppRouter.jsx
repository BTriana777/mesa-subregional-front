import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { MesaScreen } from '../components/mesa/MesaScreen';
import { NavBar } from '../components/ui/NavBar';

export const AppRouter = () => {
  return (
    <>
    <NavBar />
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MesaScreen />} />
            <Route path="/login" element={<LoginScreen />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}
