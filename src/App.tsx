import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import SignIn from "./pages/auth/signin";
import SignUp from "./pages/auth/signup";
import { useTypedSelector } from "./hooks/useTypedSelector";
import NotFound from "./pages/notFound";
import DefaultPage from "./pages/defaultPage/DefaultPage";
import AllUsers from "./pages/admin/users/AdminUsersView";
import CreateUser from "./pages/admin/users/AdminUsersCreate";
import UpdateUser from "./pages/admin/users/AdminUsersUpdate";
import AllRoles from "./pages/admin/role/AdminRolesView";
import UpdateRole from "./pages/admin/role/AdminRolesUpdate";
import AdminHomePage from "./pages/admin/AdminHomePage";
import CreateRole from "./pages/admin/role/AdminRolesCreate";
import CategoriesView from "./pages/admin/categories/AdminCategoryView";
import CategoriesCreate from "./pages/admin/categories/AdminCategoryCreate";
import CategoriesUpdate from "./pages/admin/categories/AdminCategoryUpdate";
import PromocodesView from "./pages/admin/promocodes/AdminPromocodeView";
import PromocodeCreate from "./pages/admin/promocodes/AdminPromocodeCreate";
import PromocodeUpdate from "./pages/admin/promocodes/AdminPromocodeUpdate";
import SportEventView from "./pages/admin/sportAPI/events/AdminEventView";
import SportEventCreate from "./pages/admin/sportAPI/events/AdminEventCreate";
import SportEventUpdate from "./pages/admin/sportAPI/events/AdminEventUpdate";
import SportMatchView from "./pages/admin/sportAPI/matches/AdminMatchView";
import SportMatchCreate from "./pages/admin/sportAPI/matches/AdminMatchCreate";
import SportMatchUpdate from "./pages/admin/sportAPI/matches/AdminMatchUpdate";

function App() {
  const { isAuth, user } = useTypedSelector((store) => store.UserReducer);
  return (
    <Routes>
      {isAuth && (
        <>
          {user.role === "Admin" && (
            <Route path="/admin" element={<Outlet />}>
              {/* USERS */}
              <Route index element={<AdminHomePage />} />
              <Route path="users" element={<AllUsers />} />
              <Route path="user/create" element={<CreateUser />} />
              <Route path="user/update/:userId" element={<UpdateUser />} />
              {/* ROLES */}
              <Route path="roles" element={<AllRoles />} />
              <Route path="role/create" element={<CreateRole />} />
              <Route path="role/update" element={<UpdateRole />} />
              {/* CATEGORY */}
              <Route path="categories" element={<CategoriesView />} />
              <Route path="category/create" element={<CategoriesCreate />} />
              <Route path="category/update" element={<CategoriesUpdate />} />
              {/* PROMO */}
              <Route path='promocodes' element={<PromocodesView/>}/>
              <Route path="promocode/create" element={<PromocodeCreate/>} />
              <Route path="promocode/update" element={<PromocodeUpdate />} />
              {/* SPORT API */}
              {/* Sport event */}
              <Route path = "sport/events" element={<SportEventView/>}/>
              <Route path = "sport/event/create" element={<SportEventCreate/>}/>
              <Route path = "sport/event/update" element={<SportEventUpdate/>}/>
              {/* Sport match */}
              <Route path = "sport/matches" element={<SportMatchView/>}/>
              <Route path = "sport/match/create" element={<SportMatchCreate/>}/>
              <Route path = "sport/match/update" element={<SportMatchUpdate/>}/>
            </Route>
            
          )}
          {/* {user.role === "User" && (
            <Route path="/dashboard" element={<DefaultPage />}>
              <Route index element={<DefaultPage />} />
            </Route>
          )} */}
        </>
      )}
      <Route path="/" element={<DefaultPage/>} />
      {/* <Route path="/dashboard" element={<DefaultPage/>} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp/>} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
