import React from 'react';
import {ReactComponent as DropdownIcon} from '../../assets/shared/icon-hamburger.svg';
import classes from './NavigationMenu.module.scss';
import DropDownMenu from '../DropdownMenu/DropDownMenu';

const NavigationMenu = () => {

    return (
        <div>
            <a href='/' className={classes.nav__menuicon}>
                <DropdownIcon/>
                <DropDownMenu></DropDownMenu>
            </a>
        </div>
    )
}

export default NavigationMenu;