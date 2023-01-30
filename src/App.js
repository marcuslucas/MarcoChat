import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/pages/Home";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import { useContext } from "react";
import { AuthContext } from "./components/context/AuthContext";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/signup",
//     element: <Signup />,
//   },
// ]);

function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/login" element={<Login />} />,
        <Route path="/signup" element={<Signup />} />,
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
