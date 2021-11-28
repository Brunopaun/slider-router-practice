import React, { useContext} from 'react';
import classes from './MenuItem.module.scss';
import { Link } from 'react-router-dom';
import { Context } from '../../context/context';

const MenuItem = (props)=>{

    const {setHover} = useContext(Context);

    const onMenuHoverHandler = (event) => {
        event.preventDefault();
        setHover(false);
    }

    return (
        <li className={classes.item} onClick={onMenuHoverHandler}>
            <Link to={`/${props.text}`} >{props.text}</Link>
        </li>
    )
}

export default MenuItem;