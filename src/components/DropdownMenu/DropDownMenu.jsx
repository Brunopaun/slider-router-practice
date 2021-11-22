import React from 'react';
import MenuItem from './MenuItem';
import classes from './DropDownMenu.module.scss';
import { ReactComponent as IconClose } from '../../assets/shared/icon-close.svg';

const DropDownMenu = () => {

    return (
        <div className={classes.dropshadow}>
            <div className={classes.dropdown}></div>
            <div className={classes.bg}>
                <a href='/'>
                    <IconClose/>
                </a>
                <ul >
                    <MenuItem text='HOME'></MenuItem>
                    <MenuItem text='DESTINATION'></MenuItem>
                    <MenuItem text='CREW'></MenuItem>
                    <MenuItem text='TECHNOLOGY'></MenuItem>
                </ul>
            </div>
        </div>
    )
}

export default DropDownMenu;