import React, { useState } from 'react'
import { API_URL } from '../../config'

function usePatchProduct() {
    const [error, setError] = useState(null)

    const patchProduct = async(formData, productId) => {
        setError(null)
        try {
            const response = await fetch(`${API_URL}/products/${productId}`,
                {
                    method: 'PATCH',
                    headers: {
                        "content-type": "application/json"
                    },
                    //necesariamente se tiene que convertir formdata a json
                    body: JSON.stringify(formData)
                })

            if (!response.ok) {
                throw new Error(`Error al traer el producto: ${response.status}`
                )
            }
            const data = await response.json()
            return data

        }catch (error) {
            console.error(error)
            setError(error)
            return null
        }
}
return { error, patchProduct }
}

export default usePatchProduct
