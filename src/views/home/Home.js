import React from 'react'
import '../home/Home.css'
import LogoUsams from '../../assets/images/logo-usams.png';
import LogoTecnoSuper from '../../assets/images/logo-tecnosuper.png';
import BanderaColombia from '../../assets/images/bandera-colombia.png';
import Hombre from '../../assets/images/vista-hombre.svg';

export const Home = () => {
    return (
        <div className='container_under-construction'>
            <div className='container'>
                <div className='rectangle'>
                    <h1>¡MUY PRONTO!</h1>
                    <h2>¡Vamos a celebrar muy pronto el lanzamiento de nuestro nuevo sitio!</h2>
                    <span className='brand'>usams.com.co</span>
                    <p>¡Ahora en Colombia! <img src={BanderaColombia} alt="Colombia" /></p>
                    <ul className='brand_list'>
                        <li>
                            <img src={LogoUsams} alt="Usams" />
                        </li>
                        <li>
                            <img src={LogoTecnoSuper} alt="TecnoSuper" />
                        </li>
                    </ul>
                </div>
                <div className='image'>
                    <img src={Hombre} alt="Hombre" />
                </div>
            </div>
            <div className='container-eclipse'>
                <div className='eclipse eclipse1'></div>
                <div className='eclipse eclipse2'></div>
                <div className='eclipse eclipse3'></div>
                <div className='eclipse eclipse4'></div>
            </div>
        </div>
    )
}
