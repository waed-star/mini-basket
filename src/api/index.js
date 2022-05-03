import axios from "axios";

export const getStoreProducts = async (randomProductNum) => {
  console.log(randomProductNum)
  try{
    const { data } = await axios.get(`https://fakestoreapi.com/products?limit=${randomProductNum}`)
    return data
  } catch (error) {
    console.log(error)
  }
}