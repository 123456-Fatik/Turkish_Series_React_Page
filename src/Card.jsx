import React from 'react';
import Sdata from './Sdata';

function Card(props) {
    return(
        <>
        
        <div className='card'>
            <img src={props.imgsrc}    alt='my pic' className='cardImg'></img>
            <div className='cardInfo'>
                <span className='cardCategory'>{props.title}</span>
                <h3 className='cardTitle'>{props.sname}</h3>
                <a href='' target='_blank'>
                    <button className='btn'>Watch Now</button>
                </a>
            </div>
        </div>
            </>
        )
    
};
export default Card;