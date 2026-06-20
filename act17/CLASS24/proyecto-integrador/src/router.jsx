import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Products from './pages/Products'
import CreateProductPage from './pages/CreateProductPage'
//import CreateProductPage from './components/pages/CreateProductPage'

export const router = createBrowserRouter([

    {
        path:"/",
        element: <App/>,
        children: [
            //El componente App va a tener varios hijos, que son el restode las rutas 
            {
                index: true,
                element: <Home/> 
            },
            {
                path: "/products",
                element: <Products/>
            },
            {
                path: "/products/create",
                element: <CreateProductPage/>
            },
            {
                //Una ruta de error
                path: "*",
                element:(
                    <div>
                        <h1>Error 404</h1>
                        <p>Pagina no encontrada</p>
                    </div>
                )
            }
        ]
    }
])