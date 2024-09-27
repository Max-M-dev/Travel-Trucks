// import { useState } from 'react'
import './App.css'

import { lazy } from "react";
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';


const HomePage = lazy(() => import('../../pages/HomePage/HomePage.jsx'));
const CatalogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage.jsx'));
const CamperPage = lazy(() => import('../../pages/CamperPage/CamperPage.jsx'));
const Features = lazy(() => import('../Features/Features.jsx'));
const Reviews = lazy(() => import('../Reviews/Reviews.jsx'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage.jsx'));

function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/catalog"
            element={<CatalogPage />}
          />
          <Route path="/catalog/:id" element={<CamperPage />}>
            <Route path='features' element={< Features />} />

            <Route path='reviews' element={< Reviews />} />
          </Route>
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </Layout>
    </>
  )
}

export default App
