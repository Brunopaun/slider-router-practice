import React from 'react';
import {ReactComponent as Logo} from '../../assets/shared/logo.svg';
import classes from './NavigationIcon.module.scss';


const NavigationIcon = ()=>{

    return(
        <a href="/" className={classes.nav__icon}>
            <Logo/>
        </a>
    )
}

export default NavigationIcon;