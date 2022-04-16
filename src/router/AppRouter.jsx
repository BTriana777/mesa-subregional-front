import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { GalleryScreen } from '../components/mesa/GalleryScreen';
import { InfoScreen } from '../components/mesa/InfoScreen';
import { MesaScreen } from '../components/mesa/MesaScreen';
import { NewScreen } from '../components/mesa/NewScreen';
import { NavBar } from '../components/ui/NavBar';

export const AppRouter = () => {
  return (
    <>
    <BrowserRouter> 
        <NavBar />  
        <Routes>
            <Route path="/" element={<MesaScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/history" element={<InfoScreen />} />
            <Route path="/news" element={<NewScreen />} />
            <Route path="/gallery" element={<GalleryScreen />} />
            
        </Routes>
    </BrowserRouter>
    </>
  )
}
