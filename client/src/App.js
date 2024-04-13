import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

//styles
import "./stylesheets/alignment.css";
import "./stylesheets/theme.css";
import "./stylesheets/size.css";
import "./stylesheets/custom.css";
import "./stylesheets/form-elements.css";

//Components
import ProtectedRoute from "./Components/ProtectedRoute";
import Admin from "./Pages/Admin";
import Profile from "./Pages/Profile";

function App() {
  const { loading } = useSelector((state) => state.loaders);

  return (
    <>
      {loading && (
        <div className="loader-parent">
          <div className="loader"></div>
        </div>
      )}

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
