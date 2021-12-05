import React from 'react';
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { PLANETS } from '../constant/items';
import './Destination.scss';
import TitleTag from '../components/TitleTag/TitleTag';


const defaultStyle = {
  textAlign: "center",
  marginLeft: 20,
  color: "#D0D6F9",
  cursor: "pointer",
  fontFamily: "'Barlow Condensed', sans-serif",
  fontSize: "14px",
  lineHeight: "16.8px",
  letterSpacing: "2.36px",
  borderBottom: "none"
}

const seleStyle = {
  textAlign: "center",
  transtion: "borderBottom",
  borderBottom: "2px #ffffff solid",
  marginLeft: 20,
  fontFamily: "'Barlow Condensed', sans-serif",
  fontSize: "14px",
  lineHeight: "16.8px",
  letterSpacing: "2.36px",
}


const Destination = () =>{

    return (
      <div className='carousel_set'>
        <TitleTag number="01" title="PICK YOUR DESTINATION"/>
          <Carousel  
               showArrows={false} 
               autoPlay  
               showThumbs={false} 
               showStatus={false} 
               interval={8000} 
               infiniteLoop
               renderIndicator = {(onClickHandler, isSelected, index, label) => {
               const style = isSelected ? seleStyle : defaultStyle;

                return ( <span 
                            style={style}
                            onClick={onClickHandler}
                            onKeyDown={onClickHandler}
                            value={index}
                            key={index}
                            role="button"
                            tabIndex={0}
                            aria-label={`${label} ${index+1}`}
                          >
                              {PLANETS[index].id}
                          </span>
                          );
               }}          
          >
             {PLANETS.map((planet) => {
               return(
               <div key={planet.id} className="carousel_content">
                 <img src={planet.url} alt={planet.id}/>
                 <div>
                   <div>
                    <h1>{planet.id}</h1>
                    <p>{planet.text}</p>
                   </div>
                   <div className="carousel_content__tag">
                     <div>
                        <h3>AVG. DISTANCE</h3>
                        <span>{planet.distance}</span>
                     </div>
                     <div>
                        <h3>EST. TRAVEL TIME</h3>
                        <span>{planet.time}</span>
                     </div>
                   </div>
                 </div>
               </div>
             )
             })}
          </Carousel>
      </div>
    );
}

export default Destination;