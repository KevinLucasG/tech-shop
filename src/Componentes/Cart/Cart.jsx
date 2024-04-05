import React, { useState } from 'react'
import './Cart.css'

const Cart = () => {
  const [action, setList] = useState('nothing')
  const items = () => {
    if(producstsadded > 0){
      setList('product');
    }

  }
  return (
    
    <div>
      {action === "nothing" ? (
        <h1 className='no-products'>You have nothing in your cart</h1>

      ) : (
        <>
          <div>You have products</div>
        </>
      )}
        
      
    </div>
  )
}

export default Cart
