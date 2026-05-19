import React, { useEffect, useState } from 'react'
import './listproduct.css'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

const Listproduct = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchProducts = async () => {
    setLoading(true)
    setError(null)

    try {
      const res = await fetch(`${API_URL}/allproducts`)
      if (!res.ok) {
        throw new Error(`Server responded with ${res.status}`)
      }

      const data = await res.json()
      if (!Array.isArray(data)) {
        throw new Error('Unexpected response format from backend.')
      }

      setProducts(data)
    } catch (err) {
      console.error('Error loading products:', err)
      setError(
        `Failed to load products from backend (${API_URL}). Please make sure the server is running and accessible.`
      )
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className='listproduct'>
      <div className='listproduct-header'>
        <h2>Product List</h2>
        <button className='retry-button' onClick={fetchProducts} disabled={loading}>
          Refresh
        </button>
      </div>
      {loading ? (
        <p>Loading products...</p>
      ) : error ? (
        <div className='error-block'>
          <p className='error'>{error}</p>
          <button className='retry-button' onClick={fetchProducts}>
            Try Again
          </button>
        </div>
      ) : products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className='product-table'>
          <div className='product-row product-header'>
            <div>ID</div>
            <div>Name</div>
            <div>Category</div>
            <div>Price</div>
            <div>Expiry</div>
          </div>
          {products.map((product) => (
            <div className='product-row' key={product.id || product._id}>
              <div>{product.id || product._id}</div>
              <div>{product.name}</div>
              <div>{product.category}</div>
              <div>₹{product.new_price ?? product.old_price}</div>
              <div>
                {product.expiry_date
                  ? new Date(product.expiry_date).toLocaleDateString()
                  : 'N/A'}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Listproduct