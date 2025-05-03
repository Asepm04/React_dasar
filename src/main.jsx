import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import CounterApp from './counter/CounterApp'
import ErrorPage from './pages/404'
import LoginPage from './pages/LoginPage'
import ProductCard from './pages/ProductCard'
import Products from './pages/Products'
import Detail from './pages/detailProduct'

const router = createBrowserRouter([
  {
    path : '/',
    element : <div>hello world</div>,
    errorElement : <ErrorPage/>
  },
  {
    path:'/counter2',
    element:<CounterApp/>
  },
  {
    path:'/login',
    element:<LoginPage/>
  },
  {
    path:'/product',
    element:<ProductCard/>
  },
  {
    path:'/products',
    element:<Products/>
  },
  {
    path:'/products/:id',
    element:<Detail/>
  }
  
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
