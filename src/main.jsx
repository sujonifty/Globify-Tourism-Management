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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
        element: <AddTouristSpot></AddTouristSpot>,
      },
      {
        path: "/allSpot",
        element: <TouristSpot></TouristSpot>,
        loader: () => fetch('http://localhost:5000/touristSpot'),
      },
      {
        path: "/cardDetails/:id",
        element: <CardDetails></CardDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/touristSpot/${params.id}`)
      },
      {
        path: "/myList",
        element: <MyList></MyList>,
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
