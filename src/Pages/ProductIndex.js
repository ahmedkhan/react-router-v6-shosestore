import React from 'react'
import { Data }  from '../services/dummy';
import {Link} from "react-router-dom";
export const ProductIndex = () => {
    return (
        <ul>
      {Object.entries(Data).map(([slug, { name, img }]) => (
        <li key={slug}>
          <Link to={`/product/${slug}`}>
            <h2>{name}</h2>
            <img src={img} alt={name} />
          </Link>
        </li>
      ))}
    </ul>
    )
}
