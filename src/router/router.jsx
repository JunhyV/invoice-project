import { createBrowserRouter } from "react-router-dom";
import Error from "../layout/Error";
import LayoutPublic from "../layout/LayoutPublic";
import Home from "../pages/Home";
import Invoice from "../pages/InvoicePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/invoice',
        element: <Invoice/>
      }
    ],
  },
]);

export default router;
