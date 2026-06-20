import { useEffect, useState } from "react"
import { API_URL } from "../../config"

function useGetProducts() {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    const getProducts = async (VITE_API_URL="http://localhost:3001") => {
        try {
            setLoading(true)
            setError(null)

            const response = await fetch(VITE_API_URL="http://localhost:3001")

            if (!response.ok) {
                throw new Error(`Error al traer los productos: ${response.status}`)
            }

            const data = await response.json()
            setProducts(data)

        } catch (error) {
            console.error(error)
            setError(error)
            setProducts([])

        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getProducts(`${API_URL}/products`)
    }, [])

    return { products, error, loading }
}

export default useGetProducts