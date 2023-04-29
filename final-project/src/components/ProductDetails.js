import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import {selectedProduct} from "../redux/actions/productActions"
import {Card,Button } from "react-bootstrap"


const ProductDetails = () => {
  const product = useSelector((state)=> state.product)
  const {title , price, description, image} = product
  const {productId}= useParams()
  const dispatch = useDispatch();
  console.log(productId);

  const fecthdetails = async ()=> {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch(err=>{
      console.log("Err", err)
    })

    dispatch(selectedProduct(response.data))
  }

  useEffect(()=>{
    if (productId && productId !=="") fecthdetails()
  },[productId]
  )
  return (
    <div className='p-4'>
    <Card style={{ width: '25rem', height: '70%', alignContent: "center" }} >
      <Card.Img variant='top' src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>${price}</Card.Text>
        <Button variant='primary'>Add to Cart</Button>
      </Card.Body>
    </Card>
  </div>
  )
}

export default ProductDetails