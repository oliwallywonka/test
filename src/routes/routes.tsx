import { Outlet, RouteObject } from "react-router-dom";
import { Home } from "../pages/Home";
import { MovieDetails } from "../pages/MovieDetails";
import { Favorites } from "../pages/Favorites";

const routes: RouteObject[] = [
    {
        path: '/',
        element: <><Outlet/></>,
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