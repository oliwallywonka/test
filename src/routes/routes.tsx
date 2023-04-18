import { Outlet, RouteObject } from "react-router-dom";
import { Home } from "../pages/Home";
import { MovieDetails } from "../pages/MovieDetails";
import { Favorites } from "../pages/Favorites";
import { Template } from "../components/template";

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Template><Outlet/></Template>,
        errorElement: <span>404</span>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/:movieId',
                element: <MovieDetails/>
            },
            {
                path: '/movies/favorites',
                element: <Favorites/>
            }
        ]
    }
];

export default routes;