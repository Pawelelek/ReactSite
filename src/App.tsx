import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/auth/signin";
import SignUp from "./pages/auth/signup";
import { useTypedSelector } from "./hooks/useTypedSelector";
import NotFound from "./pages/notFound";
import DashboardLayout from "./container/dashboardLayout";
import DefaultPage from "./pages/dafaultPage";
import AllUsers from "./pages/admin/users/allUsers";
import CreateUser from "./pages/admin/users/createUser";
import UpdateUser from "./pages/admin/users/updateUser";

function App() {
  const { isAuth, user } = useTypedSelector((store) => store.UserReducer);
  return (
    <Routes>
      {isAuth && (
        <>
          {user.role === "Administrator" && (
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<DefaultPage />} />
              <Route path="users" element={<AllUsers />} />
              <Route path="create" element={<CreateUser />} />
              <Route path="/dashboard/update/:userId" element={<UpdateUser />} />
            </Route>
          )}
          {user.role === "User" && (
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<DefaultPage />} />
            </Route>
          )}
        </>
      )}
      <Route path="/" element={<DashboardLayout/>} />
      <Route path="/dashboard" element={<DashboardLayout/>} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
