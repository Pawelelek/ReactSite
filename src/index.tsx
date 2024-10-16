import { ToastContainer } from "react-toastify";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { getAccessToken } from "./services/api-user-service";
import store from "./store";
import { AuthUser } from "./store/action-creators/userActions";
import { BalanceProvider } from "./pages/defaultPage/Modal/Profile/BalanceContext";
import { EmailProvider } from "./pages/defaultPage/Modal/forgotPassword/EmailContext";
import { LoadingProvider } from "./components/loader/LoadingContext";
import Loader from "./components/loader/Loader";
import { useLoading } from "./components/loader/LoadingContext";
import { PotentialWinningsProvider } from "./pages/Bets/components/PotentialWinningsContext";

const token = getAccessToken();
if (token) {
  AuthUser(token, "Data loaded from localStorrage", store.dispatch);
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <LoadingProvider>
    <Router>
      <ToastContainer autoClose={5000} />
      <PotentialWinningsProvider>
      <BalanceProvider>
      <EmailProvider>
        <App/>
      </EmailProvider>
      </BalanceProvider>
      </PotentialWinningsProvider>
    </Router>
    </LoadingProvider>
  </Provider>
);
