import React from "react"

import './userInput.scss'

const UserInput = ({
  randomProductNum,
  setRandomProductNum,
  setShowItems
}) => {

  const handleInputChange = (event) => {
    setRandomProductNum(event.target.value)
    setShowItems(true)
  }

  return (
    <div class="user-input">
      <p class="user-input-text">Please enter number of products</p>
      <input class="user-input-input" type="number" onInput={handleInputChange} defaultValue={randomProductNum}></input>
    </div>
  )
}

export default UserInput