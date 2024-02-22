import  React  from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './views/Home/Home';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import Categories from './views/Categories/Categories';
import Food from './views/Food/Food';
import Feeback from './views/Feeback/Feeback';
import Meal from './views/Meal/Meal';
import Login from './views/Login/Login';
import Register from './views/Register/Register';


const root = ReactDOM.createRoot(document.getElementById('root'));


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/contact",
        element: <Contact/>
    },
    {
       path: "/categories",
       element: <Categories/>
    },
    {
        path: "/food",
        element: <Food/>
     },
     {
        path: "/feeback",
        element: <Feeback/>
     },
     {
        path: "/Meal",
        element: <Meal/>
     }, {
        path: "/login",
        element: <Login/>
     },
     {
        path: "/register",
        element: <Register/>
    },

    {
        path: "*",
        element: "NOT"
    }

]);



root.render(<RouterProvider router={router}/>);
