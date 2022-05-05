import React, { useState, useEffect } from 'react'

import BasketItem from "./BasketItem"
import BasketTotal from "./BasketTotal"
import LoadingSpinner from '../loadingSpinner/LoadingSpinner'

import { getStoreProducts } from '../../api'

import './basket.scss'

export const Basket = ({
  randomProductNum,
  setShowItems,
  showItems
}) => {

  const [basektTotal, setBasketTotal] = useState(0)
  const [products, setProducts] = useState()
  const [isLoading, setIsLoading] = useState(false)

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
    setIsLoading(true)
    getStoreProducts(randomProductNum).then((data) => {
      setProducts(data)
    })
  },[randomProductNum])

  useEffect(() => {
    calculateInitialBasketTotal()
    setIsLoading(false)
  },[products])

  useEffect(() => {
    setBasketTotal(basektTotal)
  },[basektTotal])

  return (
    <div className="App">
      {isLoading ?
        <LoadingSpinner />
        : <div className="basket">
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
      }
    </div>
  )
}

export default Basket