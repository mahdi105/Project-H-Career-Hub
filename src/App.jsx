import React, { createContext, useEffect, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import { Toaster } from 'react-hot-toast';

export const JobContext = createContext([]);

const App = () => {
  const loadedJobs = useLoaderData();
  return (
    <>
      <JobContext.Provider value={loadedJobs}>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        <Toaster />
      </JobContext.Provider>
    </>
  );
};

export default App;