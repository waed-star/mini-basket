import React, { useEffect } from "react";

export const BasektTotal = ({
  basektTotal,
  setShowItems,
  setBasketTotal
}) => {
  const handleClearButton = () => {
    setShowItems(false)
    setBasketTotal(0)
  }

  return (
    <div className="basket-checkout">
      <div className="basket-checkout-total">
        <p>£ {basektTotal.toFixed(2)}</p>
      </div>
      <button className="basket-checkout-clear-button" onClick={handleClearButton}>
        Clear
      </button>
      <div className="basket-checkout-checkout-button">
        <p className="basket-checkout-checkout-button-text">Check Out {'>'}</p>
      </div>
  </div>
  )
}

export default BasektTotal