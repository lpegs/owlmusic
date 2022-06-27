import React from 'react';
import { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Player from './pages/player/index';
import Router from './pages/routers/index';
import { RecoilRoot } from "recoil"

const Page = () => {

  return (
    <>
      <div class='main'>
        <BrowserRouter>
            <RecoilRoot>
              <Player />
      
              <div className='bar'></div>

              <Router />
            </RecoilRoot>
        </BrowserRouter>
      </div>
    </>
  )
}

export default Page;  
