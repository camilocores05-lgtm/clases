import React from 'react'

function ProductCard({ products }) {
  return (
    <div>
      <section style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
        }}>
            { products.map((product) => (
            <div style={{
                width: "200px",
                border: "solid black",
                textAlign: "center",
                backgroundColor: "#e9edee",
                display: "flex",
                flexDirection: "column"
            }} key={product.id} >
                <h1 style={ {fontSize: "16px", textTransform: "capitalze"}}>{product.name}</h1>
            {/* name
            price
            description
            quantity
            highlighted
            image
             */}
            
                <img style={{width: "100%", height: "120px"}} src={product.image} alt={product.name}/>

                <p style={ {fontSize: "16px", textTransform: "capitalze"}}> {product.description} </p>
                <p> {product.price} </p>
                <p> Stock Disponible {product.quantity}</p>
                {product.highlighted && (<p style={{ fontWeight: "bolder", color: "green" }}> Producto destacado </p>
        )
    }

            </div>

            ) ) }

        </section>
    </div>
  )
}

export default ProductCard
