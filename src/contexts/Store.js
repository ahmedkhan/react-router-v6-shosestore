import React, { useState } from 'react';
import listContext from './list_context';



function Store({children}){
    
 
    const initialState = { 
      cart:[],
      cartCount:0,  
      addNew: addNew, 
      removePd: removePd
      
      }

     

      const [ appstate, setState ] = useState(initialState);
      
      
      
    return(
      <listContext.Provider value={appstate}>
        {children}
      </listContext.Provider>
    )

    

    function addNew(pd){        
        let newList = appstate.cart;
    
        const newItem = {
          count:1,
          id:pd.fields.id,
          name:pd.fields.title,
          image :pd.fields.image.fields.file.url,
          price :pd.fields.price
        }
    
        const filtered = newList.filter(i =>{
          return i.id === pd.fields.id;
        });
    
        if(filtered.length > 0){
          const pos = newList.map(i => { return i.id; }).indexOf(pd.fields.id);
          newList[pos].count += 1;
        }else{
          newList.push(newItem);
        }
        
        setState({...appstate, cart:newList, cartCount:getCartCount()});

      }
    
     
    
      function removePd(indx){
        const cartList = appstate.cart;
    
        cartList.splice(indx,1);
    
        setState({...appstate, cart:cartList, cartCount:getCartCount()});
      }

      

      function getCartCount(){

        let cnt = 0;
    
        if(appstate.cart.length > 0){
    
          appstate.cart.forEach(item => {
          cnt += item.count;
          });
          
        }

        return cnt;

      }
    
}

export default Store;