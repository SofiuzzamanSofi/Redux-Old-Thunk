import { createBrowserRouter } from "react-router-dom";
import Admin from "../component/Admin/Admin";
import Home from "../component/Home/Home";
import Main from "../component/Layout/Main";
import User from "../component/User/User";

const route = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "admin",
                element: <Admin />,
            },
            {
                path: "user",
                element: <User />,
            },
        ]
    }
]);

export default route;