import React from 'react';
import Logo from '../../assets/img/logo-rosa.png'
import './Menu.css'
import Button from '../Button/button'
//import ButtonLink from './components/ButtonLink/buttonLink';

const Menu = () =>{
    return(

        <nav className="Menu">
            <a href="/">
            <img className="Logo" src={Logo} alt="LariFlix logo"/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;