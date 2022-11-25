import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import {data} from '../data.js'
import Card from 'react-bootstrap/Card';
import { Myimg } from './Myimg.jsx';

export const Product=()=> {
    const params=useParams()
    console.log('url: ',params)
    const selProduct=data.find(obj=>obj.id==params.id)
    console.log(selProduct)
    const navigate=useNavigate()
  return (
    <div className='d-flex justify-content-center text-center mt-5'>
        <Card style={{ width: '18rem' }}>
            <Myimg selProduct={selProduct}/>
      {/*<Card.Img variant="top" src={selProduct.imgUrl} />*/}
      <Card.Body>
        <Card.Title>{selProduct.name}</Card.Title>
        <Card.Text>
         {selProduct.price} $
        </Card.Text>
        <button className='btn btn-danger' onClick={()=>navigate('/products/')}>Back</button>
      </Card.Body>
    </Card>
        
    </div>
  )
}
