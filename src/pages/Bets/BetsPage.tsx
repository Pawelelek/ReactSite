import { FunctionComponent, useState } from "react";
import Counter from "../defaultPage/components/Counter";
import Counter2 from "../defaultPage/components/Counter2";
import FooterLinks from "../defaultPage/components/FooterLinks";
import Copyright from "../defaultPage/components/Copyright";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Menu1 from "./components/Menu1";
import Coupon from "./components/Coupon";
import BetComp from "./components/BetComp";
import Table1 from "./components/Table1";
import FrameComponent4 from "./components/FrameComponent4";
import "../defaultPage/design.css";
import "./bets.css"
import Table2 from "./components/Table2";
import Table3 from "./components/Table3";
import BetCoupon from "./components/BetCoupon";

const BetsPage = () => {
  const {user} = useTypedSelector((store) => store.UserReducer);
  const [selectedCoefficient, setSelectedCoefficient] = useState(null); 
  const [selectedOddId, setSelectedOddId] = useState({ oddId: '' });
  const [selectedTeams, setSelectedTeams] = useState({ team1: '', team2: '' });
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedSport, setSelectedSport] = useState<string | null>('football');

  const handleCoefficientSelect = (oddId:any, coefficient: any, team1: any, team2: any) => {
    console.log("OddID: "+oddId + " Value: " + coefficient)
    setSelectedOddId(oddId);
    setSelectedCoefficient(coefficient);
    setSelectedTeams({ team1, team2 });
  };

  const handleCountrySelect = (country: string) => {
    setSelectedCountry(country);
  };

  const handleSportSelect = (sport: string) => {
    setSelectedSport(sport);
    setSelectedCountry(null); 
  };

  return (
    <div className="root">
      {(user.role === "User" || user.role === "Admin") ? (
        <Counter2 />
      ) : (
        <Counter />
      )}
      <main className="promotion">
      <Menu1 onCountryFootballSelect={handleCountrySelect} onSportSelect={handleSportSelect}/>
          <section className="frame-parent" style={{ width: "960px", flex: 1 }}>
          <div className="custom-bets-frame-980">
            <div className="custom-bets-frame-577">
              <div className="custom-bets-frame-576">
                <div className="custom-bets-frame-571">
                  <div className="custom-bets-frame-570">
                    <img className="custom-bets-football2" src="/Betsimg/ballsport.png" />
                    <div className="custom-bets-text2">Футбол</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
<FrameComponent4/>


{/* {selectedCountry === 'Україна' ? (
            <Table3 onCoefficientSelect={handleCoefficientSelect} />
          ) : (
            <>
              <Table1 onCoefficientSelect={handleCoefficientSelect} />
              <Table2 onCoefficientSelect={handleCoefficientSelect} />
            </>
          )} */}
          {selectedCountry === 'Україна' ? (
            <>
            <div className="custom-bets-frame-973" style={{backgroundColor:'#2d2d2d'}}>
              <div className="custom-bets-frame-927">
                <img className="custom-bets-football3" src="/Betsimg/ballsport.png" />
                <div className="custom-bets-text3">Футбол Україна</div>
              </div>
            </div>
            <Table3 onCoefficientSelect={handleCoefficientSelect} />
            </>
          ) : selectedCountry === 'Європа' ? (
            <>
            <div className="custom-bets-frame-973" style={{backgroundColor:'#2d2d2d'}}>
              <div className="custom-bets-frame-927">
                <img className="custom-bets-football3" src="/Betsimg/ballsport.png" />
                <div className="custom-bets-text3">Футбол Європа</div>
              </div>
            </div>
            <Table2 onCoefficientSelect={handleCoefficientSelect} />
            </>
          ) : selectedCountry === 'Америка' ? (
            <>
            <div className="custom-bets-frame-973" style={{backgroundColor:'#2d2d2d'}}>
              <div className="custom-bets-frame-927">
                <img className="custom-bets-football3" src="/Betsimg/ballsport.png" />
                <div className="custom-bets-text3">Футбол Америка</div>
              </div>
            </div>
            <Table1 onCoefficientSelect={handleCoefficientSelect} />
            </>
          ): selectedSport === 'football' ? (
            <>
              <div className="custom-bets-frame-973">
                <div className="custom-bets-frame-927">
                  <img className="custom-bets-football3" src="/Betsimg/ballsport.png" />
                  <div className="custom-bets-text3">Футбол популярне</div>
                </div>
              </div>
              
              <Table3 onCoefficientSelect={handleCoefficientSelect} />
              <Table1 onCoefficientSelect={handleCoefficientSelect} />
              <Table2 onCoefficientSelect={handleCoefficientSelect} />
              
            </>
          ) : null}
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
        {/* <section className="frame-parent" style={{width:'960px'}}>
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
        </section> */}

        {/* <div className="custom-bets-content-wrapper">
        <BetComp/>
        <Coupon/>
        </div> */}
        
        {/* <Coupon/> */}
        {/* <BetCoupon/> */}
        {selectedCoefficient ? (
          <BetCoupon oddId={selectedOddId} coefficient={selectedCoefficient} teams={selectedTeams} />
        ) : (
          <Coupon />
        )}
        {/* <Menu1/> */}
        {/* <img className="custom-bets-rectangle-79" src="/Promotionsimg/ring.png" /> */}
      </main>
    </div>
  );
};

export default BetsPage;