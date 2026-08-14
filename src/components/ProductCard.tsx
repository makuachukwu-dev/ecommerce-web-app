import type { Product } from '../types/product'
import './ProductCard.css'

const PALETTE = ['#F3E1E1', '#EBF0F3', '#DBE4E9', '#E7F0ED', '#E8F3FB']

interface ProductCardProps {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {
  const hasDiscount = product.discountPercentage > 0
  const discountedPrice = product.price - (product.price * product.discountPercentage) / 100
  const bgColor = PALETTE[product.id % PALETTE.length]

  return (
    <div className="product-card">
      <div className="product-card__image-wrap" style={{ backgroundColor: bgColor }}>
        <img src={product.thumbnail} alt={product.title} className="product-card__image" />
      </div>
      <div className="product-card__body">
        <h3 className="product-card__title">{product.title}</h3>
        <p className="product-card__category">{product.category}</p>
        <div className="product-card__prices">
          {hasDiscount ? (
            <>
              <span className="product-card__price product-card__price--original">
                ${product.price.toFixed(2)}
              </span>
              <span className="product-card__price product-card__price--discounted">
                ${discountedPrice.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="product-card__price product-card__price--discounted">
              ${product.price.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard
