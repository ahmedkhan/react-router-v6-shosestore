import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { fetchData } from '../services/Api';



export const ProductDetails = () => {

    const [products,setProducts] = useState([]); 
     
    
    useEffect(() => {
        const fetchMyAPI = async () => {
          const initialDailyData = await fetchData();
    
          setProducts(initialDailyData);
        };
    
        fetchMyAPI();
      }, []);


    const { slug } = useParams();    

    function findProductBySlug(slug) {
      return products.find(o => o.slug === slug);
}

    const product  = findProductBySlug(slug);
     if (!product)
        return <h1>Loading...</h1>
     
    const {title,image,price} = product;   
    
    return (
       
        <div>
           <h1>{title}</h1>
           <img src={image} alt=''/>
           <h3>{price}</h3>     
        </div>
    )
}
