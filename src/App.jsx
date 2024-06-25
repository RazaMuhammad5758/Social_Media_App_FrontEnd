import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

import Profile from "./pages/profile/Profile";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
import NavBar from "./components/NavBar/NavBar";

function App() {

  const currentUser = false; // Change this to 'true' to simulate a logged-in user

  const Layout = () => {
    return (
      <div>
        <NavBar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 1 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };

  

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout />,
      children:[
        {
          path: "/",
          element:<Home />,
        }
        ,{
          path: "/profile/:id",
          element:<Profile />,
        }
      ]
    },

    
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
