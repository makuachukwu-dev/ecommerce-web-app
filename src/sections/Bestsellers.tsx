import { useGetProductsQuery } from '../features/products/productsApi'
import { loadMore, showLess, BESTSELLERS_PAGE_SIZE } from '../features/products/bestsellersSlice'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import ProductCard from '../components/ProductCard'
import './Bestsellers.css'

function Bestsellers() {
  const dispatch = useAppDispatch()
  const visibleCount = useAppSelector((state) => state.bestsellers.visibleCount)
  const { data, isLoading, isError } = useGetProductsQuery({ limit: 0 })

  return (
    <section className="bestsellers">
      <div className="bestsellers__heading">
        <p className="bestsellers__eyebrow">Featured Products</p>
        <h2 className="bestsellers__title">BESTSELLER PRODUCTS</h2>
        <p className="bestsellers__subtitle">Problems trying to resolve the conflict between</p>
      </div>

      {isLoading && <p className="bestsellers__status">Loading products...</p>}
      {isError && <p className="bestsellers__status">Failed to load products.</p>}

      {data && (
        <>
          <div className="bestsellers__grid">
            {data.products.slice(0, visibleCount).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="bestsellers__actions">
            {visibleCount < data.products.length && (
              <button
                type="button"
                className="bestsellers__load-btn"
                onClick={() => dispatch(loadMore())}
              >
                Load More Products
              </button>
            )}
            {visibleCount >= data.products.length && visibleCount > BESTSELLERS_PAGE_SIZE && (
              <button
                type="button"
                className="bestsellers__load-btn"
                onClick={() => dispatch(showLess())}
              >
                Show Less
              </button>
            )}
          </div>
        </>
      )}
    </section>
  )
}

export default Bestsellers
