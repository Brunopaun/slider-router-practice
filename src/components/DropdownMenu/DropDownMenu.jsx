import React, { Fragment, useContext} from 'react';

import MenuItem from './MenuItem';
import { ReactComponent as IconClose } from '../../assets/shared/icon-close.svg';
import { Context } from '../../context/context';

import classes from './DropDownMenu.module.scss';

const DropDownMenu = () => {

 const {setHover} = useContext(Context);

    const onMouseLeaveHandler = (event)=>{
        event.preventDefault();
        setHover(false);
    }

    return (
        <Fragment>
            <div className={classes.dropdown} ></div>
            <div className={classes.bg} onMouseLeave={onMouseLeaveHandler}>
                <a href='/' onClick={onMouseLeaveHandler}>
                    <IconClose/>
                </a>
                <ul >
                    <MenuItem text='Home'></MenuItem>
                    <MenuItem text='Destination'></MenuItem>
                    <MenuItem text='Crew'></MenuItem>
                    <MenuItem text='Technology'></MenuItem>
                </ul>
            </div>
        </Fragment>
    )
}

export default DropDownMenu;