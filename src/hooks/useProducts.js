import { useEffect, useState } from "react"
import axios, {} from 'axios'
const useProducts = () => {
  const [products, setProdutcts] = useState([])
  const [isLoading, setIsloading] = useState(true)
  useEffect(()=> {
    const loadProducts = async () => {
      const products = await axios('https://fathomless-dawn-54190.herokuapp.com/products')
      setProdutcts(products.data)
      setIsloading(false)
    }
    loadProducts()
    
  }, [])
  return [products, setProdutcts, isLoading]
}

export default useProducts