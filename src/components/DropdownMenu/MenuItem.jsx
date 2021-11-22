import React from 'react';
import classes from './MenuItem.module.scss';

const MenuItem = (props)=>{
    return (
        <li className={classes.item}>
            <a href='/'>{props.text}</a>
        </li>
    )
}

export default MenuItem;