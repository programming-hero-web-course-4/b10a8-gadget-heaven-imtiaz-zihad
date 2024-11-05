import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import DashBoard from "../pages/DashBoard";
import AccCards from "../componentes/AccCards";
import AccDetails from "../pages/AccDetails";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path:"/",
                element:<Home></Home>,
                loader: () => fetch("../categories.json"),
                children:[
                    {
                        path: '/category/:category',
                        element: <AccCards></AccCards>,
                        loader: () => fetch("../acc.json"),
                    },
                    {
                        path: '/',
                        element: <AccCards></AccCards>,
                        loader: () => fetch("../acc.json"),
                    },
                ]
            },{
                path:"/statics",
                element: <Statistics></Statistics>
            },{
                path:"/dashboard",
                element: <DashBoard></DashBoard>
            },
            {
                path:"/acc/:id",
                element: <AccDetails />,
                loader: () => fetch("../acc.json"),
                
            },
        ]
    }
])

export default routes;