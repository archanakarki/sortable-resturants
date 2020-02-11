import React from 'react'
import './Css/Resturant.css'


/*  Resturant components represents (image + details of that resturant)
    Each resturant component is viewable as individual card
    Props (resturants) is passed from App component
*/

const Resturant = ({resturant}) => {
    let {blurhash, currency, delivery_price, description, image, name, tags} = resturant
    delivery_price = delivery_price/100;

    return(
      <section className="col-lg-4 col-md-4 col-sm-6 col-xs-6 mx-auto Resturant">
          <div className="Resturant-image">
              <img src={image} alt={name}/>
           </div>
           <div className="Resturant-info">
              <h2 className="Resturant-title">{name}</h2>
              <p className="Resturant-description">{description}
              <br/>
                    {tags.map(tag =>  <small className="Resturant-tags"> # {tag} </small>)}
              </p>
              <p className="Resturant-blurhash">Blurhash Data : <br/> {blurhash}</p>  
              <p className="Resturant-delivery"><strong>Delivery price {currency === 'EUR' ? '€' : currency} {delivery_price}</strong></p>
           </div>
      </section>
    )
}
  
export default Resturant