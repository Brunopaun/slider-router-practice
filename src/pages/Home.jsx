import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Home.module.scss';

const Home = () => {

    return (
        <React.Fragment>
            <div className={classes.home}>
                <div>
                    <h5>SO, YOU WANT TO TRAVEL TO </h5>
                    <h1>SPACE</h1>
                    <p>Let`s face it; if you want to go to space, you might as well genuinely go to outer space and not hover king of on the edge of it. Well sit back and realx because we`ll give you a truly ou of this world experience!</p>
                </div>
                <div className ={classes.button}>
                    <Link to="/destination">EXPLORE</Link>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;