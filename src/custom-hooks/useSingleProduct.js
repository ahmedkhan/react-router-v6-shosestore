import { useEffect, useState } from 'react'
import { getSingleProduct } from '../contentful'
 
export default function useSingleProduct(slug) {
  
  const promise = getSingleProduct(slug)

  const [product, setProduct] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    promise.then(result => {
      setProduct(result[0].fields)
      setLoading(false)
    })
    // eslint-disable-next-line
  },[])

  return [product, isLoading]
}
