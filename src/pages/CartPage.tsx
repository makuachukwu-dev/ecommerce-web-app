import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} from '../features/cart/cartSlice'
import './CartPage.css'

function CartPage() {
  const dispatch = useAppDispatch()
  const items = useAppSelector((state) => state.cart.items)
  const [showSuccess, setShowSuccess] = useState(false)

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleCheckout = () => {
    setShowSuccess(true)
    dispatch(clearCart())
    setTimeout(() => setShowSuccess(false), 3000)
  }

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <h1 className="cart-page__heading">Your Cart</h1>
        {showSuccess && (
          <div className="cart-toast">Order placed successfully!</div>
        )}
        <div className="cart-page__empty">
          <p>Your cart is empty.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <h1 className="cart-page__heading">Your Cart</h1>
      {showSuccess && (
        <div className="cart-toast">Order placed successfully!</div>
      )}
      <div className="cart-page__layout">
        <div className="cart-page__items">
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.thumbnail} alt={item.title} className="cart-item__image" />
              <div className="cart-item__details">
                <h3 className="cart-item__title">{item.title}</h3>
                <p className="cart-item__price">€ {item.price.toFixed(2)}</p>
              </div>
              <div className="cart-item__quantity">
                <button
                  type="button"
                  className="cart-item__qty-btn"
                  onClick={() => dispatch(decrementQuantity(item.id))}
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="cart-item__qty-value">{item.quantity}</span>
                <button
                  type="button"
                  className="cart-item__qty-btn"
                  onClick={() => dispatch(incrementQuantity(item.id))}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              <p className="cart-item__line-total">
                € {(item.price * item.quantity).toFixed(2)}
              </p>
              <button
                type="button"
                className="cart-item__remove"
                onClick={() => dispatch(removeFromCart(item.id))}
                aria-label="Remove item"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2 className="cart-summary__heading">Order Summary</h2>
          <div className="cart-summary__row">
            <span>Subtotal</span>
            <span>€ {subtotal.toFixed(2)}</span>
          </div>
          <div className="cart-summary__row">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="cart-summary__row cart-summary__row--total">
            <span>Total</span>
            <span>€ {subtotal.toFixed(2)}</span>
          </div>
          <button
            type="button"
            className="cart-summary__checkout-btn"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartPage
