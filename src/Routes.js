import { createBrowserRouter } from "react-router-dom";
import App from './components/App'
import Login from "./components/Login";
import Quesions from "./components/Quesions";
import Final from "./components/Final";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Login/>
            },
            {
                path: "/quesions",
                element: <Quesions/>
            },
            {
                path:"/final",
                element:<Final/>
            }
            
        ]
    }
])

export default routes