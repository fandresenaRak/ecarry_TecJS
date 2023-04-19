import './choix.css';
const Choix = function(){
    return (    
            <div className='cont1'>
                <div className="galeri">
                    <a href="video.html">
                        <img src={require("../img/taxi.jpg") } height="350px"/>
                    </a>
                    <div className="desc">Taxi</div>
                </div>
                <div className="galeri">
                    <a href="">
                        <img src={require("../img/bus.jpg")} height="400px"/>
                    </a>
                    <div className="desc">Les arrets bus</div>
                </div>
                <div className="galeri">
                    <a href="">
                        <img src={require("../img/taxi-moto.jpg")} height="350px"/>
                    </a>
                    <div className="desc">Taxi moto</div>
                </div> 
            </div>  
                
    )
};
export default Choix;