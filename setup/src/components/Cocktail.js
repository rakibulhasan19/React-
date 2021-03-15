import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({id,image,info,glass,name}) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt={name}/>
      </div>
      <div className="cocktail-footer"></div>
      <h3>{name}</h3>
      <h4>{glass}</h4>
      <p>{info}</p>
      <Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">Details</Link>
    </article>
  )
}

export default Cocktail
