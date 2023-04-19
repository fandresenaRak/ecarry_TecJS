

const Accueil = function(){
    return (
    <nav className="titre">
        <li><h2>BIENVENUE</h2></li>
        <li><h4>sur e-carry</h4></li>
        <li>
            <nav className="categorie">
                <li><table><tr><td style={{width: "40px"}}><img src={require("../img/model-s.png")}style={{width:"30px"}}/></td><td><h5>Taxi</h5></td></tr></table> </li>
                <li><table><tr><td style={{width: "40px"}}><img src={require("../img/logobus.png")}style={{width:"35px"}}/></td><td><h5>Bus</h5></td></tr></table> </li>
                <li><table><tr><td style={{width: "40px"}}><img src={require("../img/logomoto.png")}style={{width:"50px"}}/></td><td><h5>Moto</h5></td></tr></table> </li>
            </nav>
        </li>
    
    </nav>)

}

export default Accueil;