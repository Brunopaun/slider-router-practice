import React, { useContext } from 'react';


import {ReactComponent as DropdownIcon} from '../../assets/shared/icon-hamburger.svg';
import { Context } from '../../context/context';
import './NavigationMenu.scss';


const NavigationMenu = (props) => {

    const {hover, setHover} = useContext(Context);

    const onMouseOverHandler = () => {
        setHover(true);
    } 

    return (
        <div >
            <a href='/' className="nav__menuicon" onMouseOver={onMouseOverHandler} >
                <DropdownIcon/>
            </a>
        {hover ? props.children : ""}
        </div>
    )
}

export default NavigationMenu;