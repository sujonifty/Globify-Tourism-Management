import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Root from './components/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import MyList from './Pages/MyList/MyList';
import TouristSpot from './Pages/TouristSpot/TouristSpot';
import AddTouristSpot from './Pages/AddTouristSpot/AddTouristSpot';
import CardDetails from './components/CardDetails/CardDetails';
import AuthProvider from './components/Providers/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Updated from './components/Updated/Updated';
import SelectedCountry from './components/SelectedCountry/SelectedCountry';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://globify-tourism-server.vercel.app/touristSpot'),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/addSpot",
        element: <PrivateRoute><AddTouristSpot></AddTouristSpot></PrivateRoute>,
      },
      {
        path: "/allSpot",
        element: <TouristSpot></TouristSpot>,
        loader: () => fetch('https://globify-tourism-server.vercel.app/touristSpot'),
      },
      {
        path: "/cardDetails/:id",
        element: <PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://globify-tourism-server.vercel.app/touristSpot/${params.id}`)
      },
      {
        path: "/update/:id",
        element:<PrivateRoute><Updated></Updated></PrivateRoute>,
        loader: ({ params }) => fetch(`https://globify-tourism-server.vercel.app/touristSpot/${params.id}`)
      },
      {
        path: "/asia/:country",
        element:<SelectedCountry></SelectedCountry>,
        loader: ({ params }) => fetch(`https://globify-tourism-server.vercel.app/asia/${params.country}`)
      },
      {
        path: "/myList",
        element: <PrivateRoute><MyList></MyList></PrivateRoute>,
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
