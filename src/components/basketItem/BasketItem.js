import React, { useState, useEffect } from 'react'
import { ReactComponent as CloseIcon} from '../../assets/svg/x-icon.svg'

const BasketItem = ({
  itemTitle,
  itemPrice,
  basektTotal,
  setBasketTotal
}) => {
  const [itemQuantity, setitemQuantity] = useState(1)
  const [showItem, setShowItem] = useState(true)
  const [totalItemPrice, setTotalItemPrice] = useState(itemPrice)

  const handleQuanityChange = (event) => {
    setBasketTotal(basektTotal - totalItemPrice)
    setitemQuantity(event.target.value)
  }

  const calculateTotalItemPrice = () => {
    setTotalItemPrice(itemQuantity * itemPrice)
    setBasketTotal(basektTotal + totalItemPrice)
  }

  const handleRemoveButton = () => {
    setShowItem(false)
    setBasketTotal(basektTotal - totalItemPrice)
  }

  useEffect(() => {
    calculateTotalItemPrice()
  },[itemQuantity, totalItemPrice])

  return (
    showItem ?
      <div className="basket-item">
        <p className="basket-item-title">{itemTitle}</p>
        <input aria-label='Quantity' maxLength="2" id='input' onInput={handleQuanityChange} className="basket-item-quantity" type="number" defaultValue={itemQuantity} />
        <div className="basket-item-total-price">
          <p className="basket-item-total-price-num">£ {totalItemPrice.toFixed(2)}</p>
          <button aria-label='Remove item button' onClick={handleRemoveButton} className='basket-remove-button-container'>
            <CloseIcon className='basket-remove-button'/>
          </button>
        </div>
      </div>
    : null
  )
}

export default BasketItem
