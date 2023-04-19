import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Acceuil from "./pages/Acceuil";
import Apropos from "./pages/Apropos";
import Choix from "./pages/Choix";
import App from "./App";

export default function Menupage(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route path="apropos" element={<Apropos/>}/>
          <Route path="acceuil" element={<Acceuil/>}/>
          <Route path="choix" element={<Choix/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Menupage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
