const client = require('contentful').createClient({
    space: 'iyqknuor22xm',
    accessToken: 'jDH-14tCL1v_8T3vjLzbHWenbDEJZRv2rkEWBwg_e74'
    
  })
  
  const getAllProducts = () => client.getEntries().then(response => response.items)
  
  const getSingleProduct = (slug) =>
     
    client
      .getEntries({        
        'fields.slug': slug,        
        content_type : 'products'
      })
      .then(response => response.items)
  
  export { getAllProducts, getSingleProduct }
 

