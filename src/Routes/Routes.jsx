import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Main/MainLayout";
import Register from "../Pages/RegisterPages/Register";
import SuccessPage from "../SuccessPage/SuccessPage";
import Verification from "../Verification/Verification";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Register></Register>
            },
            {
                path: "/verification",
                element: <Verification></Verification>
            },
            {
                path: "/success",
                element: <SuccessPage></SuccessPage>
            }
        ]
    }
]);
export default router;