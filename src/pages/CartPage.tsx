import { useState } from 'react'
import { Link } from 'react-router-dom'
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
  const [isConfirming, setIsConfirming] = useState(false)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  const handleCheckoutClick = () => {
    if (!isConfirming) {
      setIsConfirming(true)
      return
    }
    setSuccessMessage(
      `${itemCount} item${itemCount === 1 ? '' : 's'}, € ${subtotal.toFixed(2)} — order placed successfully!`,
    )
    dispatch(clearCart())
    setIsConfirming(false)
    setTimeout(() => setSuccessMessage(null), 4000)
  }

  const handleCancelCheckout = () => {
    setIsConfirming(false)
  }

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <h1 className="cart-page__heading">Your Cart</h1>
        {successMessage && <div className="cart-toast">{successMessage}</div>}
        <div className="cart-page__empty">
          <p>Your cart is empty.</p>
          <Link to="/" className="cart-page__continue-link">
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <h1 className="cart-page__heading">Your Cart</h1>
      {successMessage && <div className="cart-toast">{successMessage}</div>}
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
                  disabled={item.quantity <= 1}
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="cart-item__qty-value">{item.quantity}</span>
                <button
                  type="button"
                  className="cart-item__qty-btn"
                  onClick={() => dispatch(incrementQuantity(item.id))}
                  disabled={item.quantity >= item.stock}
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
          {isConfirming ? (
            <div className="cart-summary__confirm">
              <p className="cart-summary__confirm-text">Place this order?</p>
              <div className="cart-summary__confirm-actions">
                <button
                  type="button"
                  className="cart-summary__checkout-btn"
                  onClick={handleCheckoutClick}
                >
                  Confirm
                </button>
                <button
                  type="button"
                  className="cart-summary__cancel-btn"
                  onClick={handleCancelCheckout}
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <button
              type="button"
              className="cart-summary__checkout-btn"
              onClick={handleCheckoutClick}
            >
              Checkout
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default CartPage
