import React,{useState,useEffect} from 'react';
import { fetchData } from '../services/Api';
import {Link} from "react-router-dom";


export const ProductIndex = () => {
    const [products,setProducts] = useState([]);    
    
    useEffect(() => {
        const fetchMyAPI = async () => {
          const initialDailyData = await fetchData();
    
          setProducts(initialDailyData);
        };
    
        fetchMyAPI();
      }, []);

    
    return (
        <div>          
           <ul>
             {
                 products.map( ({title,description,id,image,price,slug })=> 
                 
                 <li key={slug}>
                 <Link to={`/product/${slug}`}>                 
                  <h4>{title}</h4>
                  <img src={image} alt=''></img>
                 </Link> 
                 </li> 
                 )
             }
           </ul>
        </div>
    )
}
 