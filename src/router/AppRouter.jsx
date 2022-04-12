import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { MesaScreen } from '../components/mesa/MesaScreen';
import { NavBar } from '../components/ui/NavBar';

export const AppRouter = () => {
  return (
    <>
    {/* <NavBar /> */}
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MesaScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}
