import { useState } from 'react'
import { useGetProductsQuery } from '../features/products/productsApi'
import ProductCard from '../components/ProductCard'
import AddToBasketToast from '../components/AddToBasketToast'
import type { Product } from '../types/product'
import './ProductsPage.css'

const PAGE_SIZE = 12

function ProductsPage() {
  const { data, isLoading, isError } = useGetProductsQuery({ limit: 0 })
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const [addedProduct, setAddedProduct] = useState<Product | null>(null)

  if (isLoading) {
    return <div className="products-page__status">Loading products...</div>
  }

  if (isError || !data) {
    return <div className="products-page__status">Failed to load products.</div>
  }

  const visibleProducts = data.products.slice(0, visibleCount)
  const hasMore = visibleCount < data.products.length

  const handleAdded = (product: Product) => {
    setAddedProduct(product)
    window.setTimeout(() => setAddedProduct(null), 3000)
  }

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, data.products.length))
  }

  const handleShowLess = () => {
    setVisibleCount(PAGE_SIZE)
  }

  return (
    <div className="products-page">
      {addedProduct && (
        <AddToBasketToast
          title={addedProduct.title}
          price={addedProduct.price}
          thumbnail={addedProduct.thumbnail}
          onClose={() => setAddedProduct(null)}
        />
      )}
      <h1 className="products-page__heading">Shop</h1>
      <div className="products-page__grid">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAdded={handleAdded} />
        ))}
      </div>
      <div className="products-page__actions">
        {hasMore && (
          <button type="button" className="products-page__load-btn" onClick={handleLoadMore}>
            Load More
          </button>
        )}
        {!hasMore && visibleCount > PAGE_SIZE && (
          <button
            type="button"
            className="products-page__load-btn products-page__load-btn--secondary"
            onClick={handleShowLess}
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  )
}

export default ProductsPage
