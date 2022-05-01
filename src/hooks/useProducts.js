import { useEffect, useState } from "react"
import axios, {} from 'axios'
const useProducts = () => {
  const [products, setProdutcts] = useState([])
  useEffect(()=> {
    const loadProducts = async (params) => {
      const products = await axios('https://fathomless-dawn-54190.herokuapp.com/products')
      setProdutcts(products.data)
    }
    loadProducts()
    
  }, [])
  return [products, setProdutcts]
}

export default useProducts