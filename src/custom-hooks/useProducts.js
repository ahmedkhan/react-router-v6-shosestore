import { useEffect, useState } from 'react'

import { getAllProducts } from '../contentful';

const promise = getAllProducts()

export default function usePosts() {
  const [products, setPosts] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    promise.then(Posts => {
      setPosts(Posts)
      setLoading(false)
    })
  }, [])

  return [products, isLoading]
}

