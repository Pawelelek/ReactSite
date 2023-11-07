import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/auth/signin";
import { useTypedSelector } from "./hooks/useTypedSelector";
import NotFound from "./pages/notFound";
import DashboardLayout from "./container/dashboardLayout";
import DefaultPage from "./pages/dafaultPage";
import AllUsers from "./pages/users/allUsers";
import CreateUser from "./pages/users/createUser";

function App() {
  const { isAuth, user } = useTypedSelector((store) => store.UserReducer);
  //console.log("user " + user);
  return (
    <Routes>
      {isAuth && (
        <>
          {user.role === "Administrator" && (
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<DefaultPage />} />
              <Route path="users" element={<AllUsers />} />
              <Route path="create" element={<CreateUser />} />
            </Route>
          )}
          {user.role === "User" && (
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route path="users" element={<AllUsers />} />
            </Route>
          )}
        </>
      )}

      <Route path="/" element={<SignIn />} />
      <Route path="/dashboard" element={<SignIn />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
