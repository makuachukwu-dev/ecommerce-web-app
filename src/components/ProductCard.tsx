import { useState } from 'react'
import type { Product } from '../types/product'
import { useAppDispatch } from '../app/hooks'
import { addToCart } from '../features/cart/cartSlice'
import './ProductCard.css'

interface ProductCardProps {
  product: Product
  onAdded?: (product: Product) => void
}

function ProductCard({ product, onAdded }: ProductCardProps) {
  const dispatch = useAppDispatch()
  const [isWishlisted, setIsWishlisted] = useState(false)
  const isOutOfStock = product.availabilityStatus === 'Out of Stock' || product.stock === 0
  const hasDiscount = product.discountPercentage > 0
  const discountedPrice = product.price - (product.price * product.discountPercentage) / 100

  const handleAddToCart = () => {
    if (!isOutOfStock) {
      dispatch(addToCart(product))
      onAdded?.(product)
    }
  }

  const handleToggleWishlist = () => {
    setIsWishlisted((prev) => !prev)
  }

  return (
    <div className="product-card">
      <div className="product-card__image-wrap">
        <img src={product.thumbnail} alt={product.title} className="product-card__image" />
        {isOutOfStock && (
          <span className="product-card__badge product-card__badge--stock">
            Out of stock
          </span>
        )}
        <div className="product-card__hover-content">
          {hasDiscount && !isOutOfStock && (
            <span className="product-card__badge product-card__badge--discount">
              -{Math.round(product.discountPercentage)}%
            </span>
          )}
          <div className="product-card__icon-group">
            <button
              type="button"
              className="product-card__icon-btn"
              aria-label="Compare product"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="17 1 21 5 17 9" />
                <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                <polyline points="7 23 3 19 7 15" />
                <path d="M21 13v2a4 4 0 0 1-4 4H3" />
              </svg>
            </button>
            <button
              type="button"
              className={`product-card__icon-btn${isWishlisted ? ' product-card__icon-btn--active' : ''}`}
              aria-label="Add to wishlist"
              onClick={handleToggleWishlist}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill={isWishlisted ? 'currentColor' : 'none'}
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="product-card__body">
        <p className="product-card__brand">{product.brand ?? product.category}</p>
        <h3 className="product-card__title">{product.title}</h3>
        <div className="product-card__price-row">
          {hasDiscount ? (
            <>
              <span className="product-card__price product-card__price--original">
                € {product.price.toFixed(2)}
              </span>
              <span className="product-card__price product-card__price--discounted">
                € {discountedPrice.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="product-card__price">€ {product.price.toFixed(2)}</span>
          )}
        </div>
        <div className="product-card__rating">
          <span className="product-card__rating-stars">★★★★★</span>
          <span className="product-card__rating-value">{product.rating.toFixed(1)}</span>
        </div>
      </div>
      <button
        type="button"
        className="product-card__add-btn"
        onClick={handleAddToCart}
        disabled={isOutOfStock}
      >
        {isOutOfStock ? 'Out of stock' : 'Add to basket'}
      </button>
    </div>
  )
}

export default ProductCard
