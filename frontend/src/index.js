import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import {Header} from "./components/navbar"
import { FullPost } from './components/fullpost';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { App } from './App';

const routing =(
  <BrowserRouter>  
     <React.StrictMode>
    <Header />
    <Routes>
        <Route  path="/" element={ <App /> } />
        <Route path="/post/:id" element={<FullPost/>} /> 
    </Routes>
   

  </React.StrictMode>
  </BrowserRouter>

  
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
