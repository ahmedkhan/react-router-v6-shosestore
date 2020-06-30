import React from 'react'
import { useParams } from "react-router-dom";
import { Data}  from '../services/dummy';

export const ProductDetails = () => {
    const { slug } = useParams();
    const shoe = Data[slug];

    if (!shoe) {
        return <h2>Not Found!</h2>;
      }
    
      const { name, img } = shoe;
    
    return (
        <div>        
            <h2>{name}</h2>
            <img src={img} alt={name} />
        </div>
    )
}
