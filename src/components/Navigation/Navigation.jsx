import React from 'react';
import NavigationIcon from './NavigationIcon';
import NavigationMenu from './NavigationMenu';
import classes from './Navigation.module.scss';
import DropDownMenu from '../../components/DropdownMenu/DropDownMenu';

const Navigation = () => {

    return (
        <nav className={classes.nav}>
            <NavigationIcon/>
            <NavigationMenu>
                <DropDownMenu/>
            </NavigationMenu>
            <div className={classes.nav__fullscreen}>
                <DropDownMenu/>
            </div>
        </nav>
    )
}

export default Navigation;