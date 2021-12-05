import React from "react";
import classes from './TitleTag.module.scss';

const TitleTag = (props)=> {

    return (
        <div className={`${classes.titletag} ${props.className}`}>
            <span className={classes.tittletag__number}>{props.number}</span>
            <h2>{props.title}</h2>
        </div>
    )
}

export default TitleTag;