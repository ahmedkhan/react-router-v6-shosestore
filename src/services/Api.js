import axios from 'axios';
import slugify from 'react-slugify';
const url = 'https://fakestoreapi.com';


export const fetchData = async () => {
    try {
      const { data } = await axios.get(`${url}/products?limit=5`);
      
  
      return data.map(({title,description,id,image,price, slug =slugify(title) }) => ({ title,description,id,image,price,slug }));
    } catch (error) {
      return error;
    }
  };