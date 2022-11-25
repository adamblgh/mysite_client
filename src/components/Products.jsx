import React,{useState} from 'react'
import {data} from '../data.js'
import { useNavigate } from 'react-router-dom'

export const Products=()=> {
  const [items,setItems] = useState(data)
  const navigate=useNavigate()
  return (
    <div className='text-center'>
      <h1 className='mt-2'>Products</h1>
      <div className="d-flex justify-content-center text-center">
        <ul className='list-group text-center'>
              {items.map(obj=>
              <li className='list-group-item btn btn-primary m-2 text-center' key={obj.id} onClick={()=>navigate('/products/'+obj.id)}>
                {obj.name}
              </li>
              )}  
        </ul>
      </div>
    </div>
    
  )
}
