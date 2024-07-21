import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/auth/signin";
import SignUp from "./pages/auth/signup";
import { useTypedSelector } from "./hooks/useTypedSelector";
import NotFound from "./pages/notFound";
import DashboardLayout from "./container/dashboardLayout";
import DefaultPage from "./pages/dafaultPage";
import AllUsers from "./pages/admin/users/AdminUsersView";
import CreateUser from "./pages/admin/users/AdminUsersCreate";
import UpdateUser from "./pages/admin/users/AdminUsersUpdate";
import AllRoles from "./pages/admin/role/AdminRolesView";
import CreateRole from "./pages/admin/role/AdminRolesCreate";
import UpdateRole from "./pages/admin/role/AdminRolesUpdate";

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
              <Route path="/dashboard/user/create" element={<CreateUser />} />
              <Route path="/dashboard/user/update/:userId" element={<UpdateUser />} />
              <Route path="roles" element={<AllRoles />} />
              <Route path="/dashboard/role/create" element={<CreateRole />} />
              <Route path="/dashboard/role/update/:userId" element={<UpdateRole />} />
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
