import React from 'react';
import logo from './logo.svg';
import './App.css';
import sary from './img/logo.png';
import { Outlet, Link } from "react-router-dom";


function App() {
  const styleImage = {
    width: '70px', height: '70px', borderRadius:'100%', marginLeft: '20px', backgroundColor:'white'
  };
  return (
    <div className="App">
      <header>
            <table>
                <tr>
                    <td style={{width:"3%"}} ><img src={sary} style={styleImage}/></td>
                    <td width="60%" ><h1>e-carry</h1></td>
                    <td width="40%">
                        <nav className="lien">
                            <ul>
                                <li> <Link to="/acceuil">Accueil</Link></li>
                                <li><Link to="/choix">Parcourir</Link></li>
                                <li> <Link to="/apropos">A propos</Link></li>
                            </ul>
                        </nav>
                    </td>
                </tr>   
            </table>
        </header>
        {/* <section>
            <nav className="titre">
                <li><h2>BIENVENUE</h2></li>
                <li><h4>sur e-carry</h4></li>
                <li> <button ><b> Parcourir</b></button></li>
            </nav>
        </section> */}
        <section>
            <Outlet/>
        </section>
    </div>
  );
}

export default App;
