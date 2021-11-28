import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TitleTag from '../components/TitleTag/TitleTag';
import { CREW } from '../constant/items';
import './Crew.scss';


const Crew = ()=>{

    return (
        <div className='carouselset__crew'>
            <TitleTag number='02' title='MEET YOUR CREW'/>
            <Carousel autoPlay interval={8000} showThumbs={false} width="100vw" showStatus={false} showArrows={false}>
                {
                    CREW.map((member)=>{
                        return (
                        <div key={member.id}>
                            <img src={member.url} alt={member.id}></img>
                            <div>
                                <h1>{member.position}</h1>
                                <h2>{member.id}</h2>
                                <p>{member.text}</p>
                            </div>
                        </div>
                        )
                    })
                }
            </Carousel>
        </div>
    );
}

export default Crew;