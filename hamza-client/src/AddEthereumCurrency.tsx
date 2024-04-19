"use client"
import React from "react"
import { useAdminAddStoreCurrency } from "medusa-react"

const AddEthereumCurrency = () => {
  const addCurrency = useAdminAddStoreCurrency()

  const handleAdd = () => {
    addCurrency.mutate("ETH", {
      onSuccess: ({ store }) => {
        console.log(store.currencies)
      },
      onError: (error) => {
        console.log("error adding new ETH", error)
      },
    })
  }

  return <button onClick={handleAdd}>Add Ethereum</button>
}

export default AddEthereumCurrency
