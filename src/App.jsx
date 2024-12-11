import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

import Footer from "./components/footer";
import Home from "./pages/Home";

const Layout = () => {
  return (
    <div className="cursor-pointer bg-neutral-100">
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "/products",
      //   element: <Products/>,
      // }
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
