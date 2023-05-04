import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import Home from "../components/Home/Home";
import ChefRecipes from "../components/ChefRecipes/ChefRecipes";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ErrorElement from "../components/ErrorElement/ErrorElement";
import Blog from "../components/Blog/Blog";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/chef/:id',
                element: <PrivateRoutes><ChefRecipes></ChefRecipes></PrivateRoutes>,
                loader: ({params})=>fetch(`https://dish-dash-server-roushanali064.vercel.app/chef/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: '*',
                element: <ErrorElement></ErrorElement>
            }
        ]
    }
])
export default router;