import { FunctionComponent } from "react";
import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";
import FrameComponent2 from "./components/FrameComponent2";
import Benefits from "./components/Benefits";
import Popular from "./components/Popular";
import EuroCup from "./components/EuroCup";
import Events from "./components/Events";
import Footer from "./components/Footer";
import FooterLinks from "./components/FooterLinks";
import Copyright from "./components/Copyright";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import "./design.css";

const DefaultPage = () => {
  const {user} = useTypedSelector((store) => store.UserReducer);
  return (
    <div className="root">
      {(user.role === "User" || user.role === "Admin") ? (
        <Counter2 />
      ) : (
        <Counter />
      )}
      <main className="promotion">
        <section className="frame-parent">
          <FrameComponent2 />
          <Benefits />
          <Popular />
          <EuroCup />
          <Events />
          <Footer />
          <FooterLinks />
          <Copyright />
          <div className="back-to-top">
            <div className="back-to-top-container">
              <div className="back-to-top-content">
                <div className="div">21+</div>
              </div>
              <div className="brand-name">
                <div className="gobet">2024 GO1BET</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DefaultPage;
