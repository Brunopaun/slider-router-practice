import React from 'react';
import NavigationIcon from './NavigationIcon';
import NavigationMenu from './NavigationMenu';
import classes from './Navigation.module.scss';

const Navigation = () => {

    return (
        <nav className={classes.nav}>
            <NavigationIcon/>
            <NavigationMenu/>
        </nav>
    )
}

export default Navigation;