import { createBrowserRouter } from "react-router-dom";
import Admin from "../component/Admin/Admin";
import ContentDetails from "../component/Contents/ContentDetails";
import AddContent from "../component/Dashboard/AddContent";
import ContentList from "../component/Dashboard/ContentList";
import Home from "../component/Home/Home";
import Main from "../component/Layout/Main";
import ReadingHistory from "../component/ReadingHistory/ReadingHistory";
import User from "../component/User/User";
import EditContent from './../component/Dashboard/EditContent';

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
                path: "/dashboard",
                element: <Admin />,
                children: [
                    {
                        path: "/dashboard",
                        element: <ContentList />
                    },
                    {
                        path: "/dashboard/add-content",
                        element: <AddContent />
                    },
                    {
                        path: "/dashboard/edit-content/:_id",
                        element: <EditContent />
                    },

                ]
            },
            {
                path: "/user",
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