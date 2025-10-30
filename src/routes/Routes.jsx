import { createBrowserRouter } from "react-router";
import MainLayout from "../layOuts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import AllAppsPage from "../pages/AllAppsPage";
import AppDetailsPage from "../pages/AppDetailsPage";




const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index:true,
            element: <HomePage></HomePage>
        },
        {
            path: '/allapps',
            element: <AllAppsPage></AllAppsPage>
        },
        
        {
            path: '/app/:id',
            element: <AppDetailsPage></AppDetailsPage>
        }
        
    ]
  },
  
  
  
])

export default router;