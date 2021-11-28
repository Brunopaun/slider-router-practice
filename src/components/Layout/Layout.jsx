import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import "./Layout.module.scss";

import Home from '../../pages/Home';
import Navigation from '../Navigation/Navigation'
import Crew from '../../pages/Crew';
import Destination from '../../pages/Destination';
import Technology from '../../pages/Technology';

const Layout = () =>{

    return (
        <div className="layout">
            <Navigation></Navigation>
            <main>
                <Routes>
                    <Route path='*' element={<Navigate replace to="/home"/>}/>
                    <Route path='/home' element={<Home/>} />
                    <Route path='/crew' element={<Crew/>} />
                    <Route path='/destination' element={<Destination/>} />
                    <Route path='/technology' element={<Technology/>} />                
                </Routes>
            </main>
        </div>
    )
};

export default Layout