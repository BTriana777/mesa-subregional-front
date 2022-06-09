import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
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
            <Route path="/mesa-subregional-front/" element={<MesaScreen />} />
            <Route path="/mesa-subregional-front/login" element={<LoginScreen />} />
            <Route path="/mesa-subregional-front/register" element={<RegisterScreen />} />
            <Route path="/mesa-subregional-front/history" element={<InfoScreen />} />
            <Route path="/mesa-subregional-front/news" element={<NewScreen />} />
            <Route path="/mesa-subregional-front/gallery" element={<GalleryScreen />} />
            

            <Route path="/*" element={<Navigate to="/mesa-subregional-front/" replace />}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}
