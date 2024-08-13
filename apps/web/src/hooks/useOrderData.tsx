import type OrderData from "../types/orderData"
import useLocalStorage from "@rehooks/local-storage"
import { useCallback } from "react"

const ORDER_DATA_STORAGE_KEY = 'orderData'
const ORDER_DATA_DEFAULT: OrderData = {
  confirmed: false,
}

const useOrderData = () => {
  const [orderData, setOrderData] = useLocalStorage<OrderData>(ORDER_DATA_STORAGE_KEY, {
    ...ORDER_DATA_DEFAULT
  })

  const updateOrderData = (newOrderData: OrderData) => {
      setOrderData(newOrderData)
  }
  
  const resetData = useCallback(() => {
      setOrderData({ ...ORDER_DATA_DEFAULT })
  }, [setOrderData])
  
  return {
    orderData,
    updateOrderData,
    resetData
  }
}

export default useOrderData