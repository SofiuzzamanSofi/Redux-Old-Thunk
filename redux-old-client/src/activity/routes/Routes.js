import { createBrowserRouter } from "react-router-dom";
import Admin from "../component/Admin/Admin";
import ContentDetails from "../component/Contents/ContentDetails";
import Home from "../component/Home/Home";
import Main from "../component/Layout/Main";
import ReadingHistory from "../component/ReadingHistory/ReadingHistory";
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
            {
                path: "content/:_id",
                element: <ContentDetails />,
            },
            {
                path: "reading-history",
                element: <ReadingHistory />,
            },
        ]
    }
]);

export default route;