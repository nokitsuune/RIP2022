import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, SIGNUP_ROUTE, VITAMIN_ROUTE} from "./utils/consts";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import VitaminPage from "./pages/VitaminPage";
import Admin from "./pages/Admin";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    }

]
export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: SIGNUP_ROUTE,
        Component: Auth
    },
    {
        path: VITAMIN_ROUTE + '/:id',
        Component: VitaminPage
    },


]