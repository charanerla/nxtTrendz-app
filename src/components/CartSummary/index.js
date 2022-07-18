// Write your code here
import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const cartLength = cartList.length
      const pricesOfProducts = cartList.map(
        eachProduct => eachProduct.quantity * eachProduct.price,
      )
      const cartValue = pricesOfProducts.reduce((acc, current) => acc + current)

      return (
        <>
          <h1 className="order-total-heading">
            Order Total: <span>Rs {cartValue}/-</span>
          </h1>
          {cartLength > 1 ? (
            <p>{cartLength} items in cart</p>
          ) : (
            <p>{cartLength} item in cart</p>
          )}
          <button type="button" className="checkout-btn">
            Checkout
          </button>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
