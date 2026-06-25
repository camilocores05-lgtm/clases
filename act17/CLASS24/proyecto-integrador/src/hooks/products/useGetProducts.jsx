import { useEffect, useState } from "react"
import { API_URL } from "../../config"


function useGetProducts() {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    const getProducts = async() => {
        try {
            setLoading(true)
            setError(null)

            const response = await fetch(`${API_URL}/products`)

            if (!response.ok) {
                throw new Error(`Error al traer los productos: ${response.status}`)
            }

            const data = await response.json()
            setProducts(data)

        } catch (error) {
            setError(error)
            setProducts([])

        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    return { products, error, loading }
}

export default useGetProducts