const calculateSubtotal = (item) => {
  return item.price * item.quantity
}

const getTotalToPay = (productsList) => {
  return productsList.reduce((total, product) => total + calculateSubtotal(product), 0)
}

export default {
  calculateSubtotal,
  getTotalToPay
}
