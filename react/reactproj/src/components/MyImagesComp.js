import React from 'react';
import food1 from '../assets/img14.jpg';
import food2 from '../assets/img15.avif';
import commonData from '../shared/constant//constantData';


const MyImageComp = ()=>{
    return (
        <div>
            <h2>This is MyImages component</h2>
            <img src={commonData.food1} alt='food1' height="200px" width="200px"/>
            <img src={commonData.img2} alt='food2' height="200px" width="200px"/>

            <hr/>
            {/* <audio src={commonData.aud} controls>Audio</audio> */}
           
            {/* <video src={commonData.aud} controls>Audio</video> */}
        </div>
    )
}


export default commonData;