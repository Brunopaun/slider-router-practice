import React from 'react';
import TitleTag from '../components/TitleTag/TitleTag';
import { Carousel } from 'react-responsive-carousel';
import { SPACESHIPS } from '../constant/items';
import './Technology.scss';

const defaultStyle = {
    display: 'inline-block',
    width: '40px',
    height: '40px',
    border: '1px solid #FFFFFF',
    borderRadius: '50%',
    paddingTop:'10px',
    marginLeft:'16px',
    fontSize:'16px',
}

const seleStyle = {
    background: '#ffffff',
    color: '#0B0D17',
}

    const Technology = () =>{

    return (
    <div className='technology_set'>
        <TitleTag number="01" title="SPACE LAUNCH 101" className="carousel_tag"/>
          <Carousel  
               showArrows={false} 
               autoPlay
               width='100vw'  
               showThumbs={false} 
               showStatus={false} 
               interval={8000} 
               infiniteLoop
               renderIndicator = {(onClickHandler, isSelected, index, label) => {
               const style = isSelected ? {...defaultStyle, ...seleStyle} : defaultStyle;

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
                              {index+1}
                          </span>
                        );
               }}          
          >
             {SPACESHIPS.map((ships) => {
               return(
               <div key={ships.id} className="technology__set_slider">
                 <div className="technology__set_slider_img">
                   <img src={ships.url} alt={ships.id}/>
                 </div>
                 <div className="technology__set_content">
                   <span>THE TERMINOLOGY...</span>
                   <h1>{ships.id}</h1>
                   <p>{ships.text}</p> 
                 </div>
               </div>
             )
             })}
          </Carousel>
      </div>
    );
}

export default Technology;