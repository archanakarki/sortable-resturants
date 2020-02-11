import React, {useState, useEffect} from 'react'
import './Css/HeroImage.css'

const HeroImage = ({resturants}) => {
    // Step 1: Extract array of images
    // Step 2: Loop over array of image
    // Step 3: Use SetInterval in useEffect to display images in every 4.5 seconds

    const images = resturants.map(resturant => resturant.image)
    const initialNum = 1
    const [num, setNum] = useState(initialNum)

    useEffect(()=>{
       let id = setInterval(()=>{
            setNum(num + 1)
        }, 4500);
        return () => clearInterval(id);
    })
    
    return(
        /* Inline styling used to repeat image loops after end of images array */
        <div style={{backgroundImage : `url(${num <= 48 ? images[num] : setNum(initialNum) })`}} className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mx-auto Carousel">        
            <h3 className="Carousel-text">{resturants[num].name}</h3>
        </div>
    )
}

export default HeroImage