import { FunctionComponent } from "react";
import Counter from "../defaultPage/components/Counter";
import Counter2 from "../defaultPage/components/Counter2";
import FrameComponent3 from "./components/FrameComponent3";
import CardComponent from "./components/CardComponent";
import FooterLinks from "../defaultPage/components/FooterLinks";
import Copyright from "../defaultPage/components/Copyright";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import "../defaultPage/design.css";

const Promotions = () => {
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
          <FrameComponent3 />
          <CardComponent />
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

export default Promotions;