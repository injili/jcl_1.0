import {
  RouterProvider,
  createBrowserRouter,
  Outlet
} from 'react-router-dom';

import Navigation from "./components/navigation";
import Footer from "./components/footer";
import Home from "./pages/Home";

const Layout = () => {
  return (
    <div className='cursor-pointer bg-neutral-100'>
      <Navigation/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        path: '/',
        element: <Home/>
      }
    ]
  },
])

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App