import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Navigationbar } from '../../ui';
import { MarvelPage, DcPage, SearchPage, HeroPage } from '../pages';


export const HeroesRoutes = () => {
  return (
    <>
        <Navigationbar />
        <div className='container'>
            <Routes>
                <Route path='marvel' element={<MarvelPage/>} />
                <Route path='dc' element={ <DcPage />} />
                <Route path='search' element={ <SearchPage />} />
                <Route path='hero/:id' element={ <HeroPage />} />
                {/* search, hero by id */}
                <Route path='/' element={ <Navigate to='/marvel'/> } />
            </Routes>
        </div>

    </>
  )
}
