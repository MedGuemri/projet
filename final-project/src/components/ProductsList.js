import React  from 'react'
import {useDispatch, useSelector} from "react-redux"
import axios from "axios"
import ProductItem from './ProductItem';
import { useEffect } from "react"
import { setProducts } from '../redux/actions/productActions';
import { CardGroup } from 'react-bootstrap';



const ProductsList = () => {
  const products = useSelector(state => state.allProducts.products);
  const dispatch= useDispatch();

  const fetchProducs = async ()=>{
    const response = await axios.get("https://fakestoreapi.com/products").catch((err)=>{
      console.log("Err", err);});
      dispatch(setProducts(response.data))
   
  };

useEffect(()=>{
  fetchProducs();

},[])

  console.log("products", products)
  return (
        <div style={{display: "flex", flexDirection : "row", flexWrap: "wrap"  }}>
         
        

       <ProductItem />
      
     

        </div>
  )
}

export default ProductsList