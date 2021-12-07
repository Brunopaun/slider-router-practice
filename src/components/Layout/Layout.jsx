import React, {Suspense} from 'react';
import { Navigate, Route, Routes } from 'react-router';
import "./Layout.module.scss";
import Spinner from '../Spinner/Spinner';

const Navigation = React.lazy(()=>import('../Navigation/Navigation'));
const Crew = React.lazy(()=> import('../../pages/Crew'));
const Destination = React.lazy(()=> import('../../pages/Destination'));
const Technology = React.lazy(()=> import('../../pages/Technology'));
const Home = React.lazy(()=>import('../../pages/Home'));

const Layout = () =>{

    return (
        <div className="layout">
            <Suspense fallback={Spinner}>
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
            </Suspense>
        </div>
    )
};

export default Layout