import { useEffect, useState } from 'react'
import { useGetProductsQuery } from '../features/products/productsApi'
import ProductCard from '../components/ProductCard'
import AddToBasketToast from '../components/AddToBasketToast'
import type { Product } from '../types/product'
import './ProductsPage.css'

function ProductsPage() {
  const { data, isLoading, isError } = useGetProductsQuery({ limit: 12 })
  const [addedProduct, setAddedProduct] = useState<Product | null>(null)

  useEffect(() => {
    if (!addedProduct) return
    const timer = setTimeout(() => setAddedProduct(null), 3000)
    return () => clearTimeout(timer)
  }, [addedProduct])

  if (isLoading) {
    return <div className="products-page__status">Loading products...</div>
  }

  if (isError || !data) {
    return <div className="products-page__status">Failed to load products.</div>
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
        {data.products.map((product) => (
          <ProductCard key={product.id} product={product} onAdded={setAddedProduct} />
        ))}
      </div>
    </div>
  )
}

export default ProductsPage
