import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import UpdateBlog from "./Pages/UpdateBlog";
import CreateBlog from "./Pages/CreateBlog";
import HomePage from "./Pages/HomePage";
import EditBlogs from "./Pages/EditBlogs";
import SingleBlog from "./Pages/SingleBlog";

const Layout = () => {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/updateblog/:id", element: <UpdateBlog /> },
      {
        path: "/createblog",
        element: <CreateBlog />,
      },
      {
        path: "all",
        element: <EditBlogs />,
      },
      {
        path: "/singleblog/:id",
        element: <SingleBlog />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
