import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import DashBoard from "../pages/DashBoard";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path:"/",
                element:<Home></Home>
            },{
                path:"/statics",
                element: <Statistics></Statistics>
            },{
                path:"/dashboard",
                element: <DashBoard></DashBoard>
            },
        ]
    }
])

export default routes;