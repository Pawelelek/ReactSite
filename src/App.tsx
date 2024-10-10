import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
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
import SportOpponentView from "./pages/admin/sportAPI/opponents/AdminOpponentView";
import SportOpponentCreate from "./pages/admin/sportAPI/opponents/AdminOpponentCreate";
import SportOpponentUpdate from "./pages/admin/sportAPI/opponents/AdminOpponentUpdate";
import SportOddView from "./pages/admin/sportAPI/odds/AdminOddView";
import SportOddCreate from "./pages/admin/sportAPI/odds/AdminOddCreate";
import SportOddUpdate from "./pages/admin/sportAPI/odds/AdminOddUpdate";
import SportPersonView from "./pages/admin/sportAPI/persons/AdminPersonView";
import SportPersonCreate from "./pages/admin/sportAPI/persons/AdminPersonCreate";
import SportPersonUpdate from "./pages/admin/sportAPI/persons/AdminPersonUpdate";
import SportBetView from "./pages/admin/sportAPI/bets/AdminBetView";
import SportBetCreate from "./pages/admin/sportAPI/bets/AdminBetCreate";
import SportBetUpdate from "./pages/admin/sportAPI/bets/AdminBetUpdate";
import Promotions from "./pages/Promotions/Promotions";
import BetsPage from "./pages/Bets/BetsPage";

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
              {/* Opponent */}
              <Route path = "sport/opponents" element={<SportOpponentView/>}/>
              <Route path = "sport/opponent/create" element={<SportOpponentCreate/>}/>
              <Route path = "sport/opponent/update" element={<SportOpponentUpdate/>}/>
              {/* Odd */}
              <Route path = "sport/odds" element={<SportOddView/>}/>
              <Route path = "sport/odd/create" element={<SportOddCreate/>}/>
              <Route path = "sport/odd/update" element={<SportOddUpdate/>}/>
              {/* Person */}
              <Route path = "sport/persons" element={<SportPersonView/>}/>
              <Route path = "sport/person/create" element={<SportPersonCreate/>}/>
              <Route path = "sport/person/update" element={<SportPersonUpdate/>}/>
              {/* Person */}
              <Route path = "sport/bets" element={<SportBetView/>}/>
              <Route path = "sport/bet/create" element={<SportBetCreate/>}/>
              <Route path = "sport/bet/update" element={<SportBetUpdate/>}/>
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
      <Route path="/promotions" element={<Promotions/>} />
      <Route path="/bets" element={<BetsPage/>} />
      {/* <Route path="/dashboard" element={<DefaultPage/>} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp/>} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
