import React, { useState, useEffect } from 'react'

import BasketItem from "./BasketItem"
import BasketTotal from "./BasketTotal"

import { getStoreProducts } from '../../api'

import './basket.scss'

export const Basket = ({
  randomProductNum
}) => {
  const [showItems, setShowItems] = useState(true)
  const [basektTotal, setBasketTotal] = useState(0)
  const [products, setProducts] = useState()

  const calculateInitialBasketTotal = () => {
    var sum = 0
    if (products) {
      products.forEach(product => {
        sum += product.price
      });
      setBasketTotal(sum)
    }
  }

  useEffect(() => {
    getStoreProducts(randomProductNum).then((data) => {
      setProducts(data)
    })
  },[randomProductNum])

  useEffect(() => {
    calculateInitialBasketTotal()
  },[products])

  useEffect(() => {
    setBasketTotal(basektTotal)
  },[basektTotal])

  return (
    <div className="App">
      <div className="basket">
        {showItems ?
          <div className="basket-items">
            {products?.map((product) =>
              <BasketItem key={product.id}
                itemTitle={product.title}
                itemPrice={product.price}
                basektTotal={basektTotal}
                setBasketTotal={setBasketTotal}
              />
            )}
          </div>
        : null}
        <BasketTotal
          basektTotal={basektTotal}
          setShowItems={setShowItems}
          setBasketTotal={setBasketTotal}
        />
      </div>
    </div>
  )
}

export default Basket