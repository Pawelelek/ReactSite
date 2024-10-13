import { useEffect, useState } from 'react';
import './Table1.css'
import { http } from '../../../http';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

const Table3 = ({ onCoefficientSelect } : any) => {
  const { allUsers, user } = useTypedSelector((store) => store.UserReducer);
  const [sportMatches, setSportMatches] = useState<any>([]);
  const handleClick = (coefficient: any, team1: any, team2: any) => {

    onCoefficientSelect(coefficient, team1, team2); 
  };
  const setStarClick = (matchId: string) => {
    const form = {
      userId: user.Id,
      sportMatchId: matchId
    }
    console.log("FORM: ",form)
    http.put("api/SportMatch/setOrOffSetFavouriteSportMatch", form)
    .then(resp => {
      console.log("Success ",resp.data.message);
    })
  }
  const loadSportMatches = () => {
    //console.log(user.Id);
      http.get("api/SportMatch/get")
        .then(resp => {
          const transactions = resp.data.payload;
          console.log(transactions)
          //console.log("ODDS: " ,transactions[3].odds[2].value);
          setSportMatches(transactions);
          console.log(transactions);
        });
    }
    // {match.odds.length < 1 ? null : match.odds[2].value}
    const method1 = (odds: { value:any, name: any, type: any }[]) => {
      
      odds.forEach(element => {
        const v = element.type == "";
      });
      const value = odds.length < 1 ? null : odds[2].value
      return value;
    }
    const OddsComponent = (type:string, odds: { value:any, name: string, type: string }[]) => {
      // Знайти об'єкт, де type дорівнює "Goal1"
      const goal1Odd = odds.find((odd) => odd.type === type);
    
      return (
        goal1Odd?.value
        // <div>
        //   {goal1Odd ? (
        //     <div>Value for Goal1: {goal1Odd.value}</div>
        //   ) : (
        //     <div>No Goal1 odds found</div>
        //   )}
        // </div>
      );
    };
    
    useEffect(() => {
      loadSportMatches();
      }, []);
  return (
    <div className="custom-table-frame-963" style={{paddingBottom:'50px'}}>
      <div className="custom-table-frame-9632">
        <div className="custom-table-frame-927">
          <img className="custom-table-rectangle-51" src="/Betsimg/ukraine.png" />
          <div className="custom-table-div">УКРАЇНА | ПРЕМ'ЄР ЛІГА</div>
        </div>
        <div className="custom-table-frame-925">
          <div className="custom-table-frame-922">
            <div className="custom-table-_1">1</div>
            <div className="custom-table-x">X</div>
            <div className="custom-table-_2">2</div>
          </div>
          <div className="custom-table-frame-920">
            <div className="custom-table-_1">1</div>
            <div className="custom-table-div2">Перший Гол</div>
            <div className="custom-table-_2">2</div>
          </div>
          <div className="custom-table-frame-924">
            <div className="custom-table-div2">Б</div>
            <div className="custom-table-div2">Тотал</div>
            <div className="custom-table-div2">М</div>
          </div>
        </div>
      </div>
      <div className="custom-table-frame-962">

        {/* First Row - Верес vs Динамо Київ */}
        {sportMatches.map((match: any) => (
          <div className="custom-table-frame-939" key={match.id}>
          <div className="custom-table-frame-930" >
          <img className="custom-table-star-1" onClick={() => setStarClick(match.id)} src="/Homeimg/star1.svg" />
            <div className="custom-table-frame-929">
              <div className="custom-table-_09-08">{new Date(match.dateStart).toLocaleDateString([], { day: '2-digit', month: '2-digit' })}</div>
              <div className="custom-table-_22-00">{new Date(match.dateStart).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
            </div>
            <div className="custom-table-frame-928">
              <div className="custom-table-div3">{match.opponents.length < 1 ? "None" :match.opponents[0].name}</div>
              <div className="custom-table-div3">{match.opponents.length < 1 ? "None" :match.opponents[1].name}</div>
            </div>
          </div>
          <div className="custom-table-frame-926">
            <div className="custom-table-frame-914">
              <div className="custom-table-frame-911">
                <div className="custom-table-_1-67" onClick={() => handleClick(match.odds.length < 1 ? null : OddsComponent("Win1", match.odds), match.opponents[0].name, match.opponents[1].name)}>{match.odds.length < 1 ? null : OddsComponent("Win1", match.odds)}</div>
              </div>
              <div className="custom-table-frame-912">
                <div className="custom-table-_1-67" onClick={() => handleClick(match.odds.length < 2 ? null : OddsComponent("Draw", match.odds), match.opponents[0].name, match.opponents[1].name)}>{match.odds.length < 2 ? null : OddsComponent("Draw", match.odds)}</div>
              </div>
              <div className="custom-table-frame-913">
                <div className="custom-table-_1-67" onClick={() => handleClick(match.odds.length < 3 ? null : OddsComponent("Win2", match.odds), match.opponents[0].name, match.opponents[1].name)}>{match.odds.length < 3 ? null : OddsComponent("Win2", match.odds)}</div>
              </div>
            </div>
            <div className="custom-table-frame-934">
              <div className="custom-table-frame-911">
                <div className="custom-table-_1-67" onClick={() => handleClick(match.odds.length < 4 ? null : OddsComponent("Goal1", match.odds), match.opponents[0].name, match.opponents[1].name)}>{match.odds.length < 4 ? null : OddsComponent("Goal1", match.odds)}</div>
              </div>
              <div className="custom-table-frame-915">
                <div className="custom-table-_1-672">X</div>
              </div>
              <div className="custom-table-frame-913">
                <div className="custom-table-_1-67" onClick={() => handleClick(match.odds.length < 5 ? null : OddsComponent("Goal2", match.odds), match.opponents[0].name, match.opponents[1].name)}>{match.odds.length < 5 ? null : OddsComponent("Goal2", match.odds)}</div>
              </div>
            </div>
            <div className="custom-table-frame-935">
              <div className="custom-table-frame-911">
                <div className="custom-table-_1-67" onClick={() => handleClick(match.odds.length < 6 ? null : OddsComponent("Total1", match.odds), match.opponents[0].name, match.opponents[1].name)}>{match.odds.length < 6 ? null : OddsComponent("Total1", match.odds)}</div>
              </div>
              <div className="custom-table-frame-915">
                <div className="custom-table-_1-672">4.5</div>
              </div>
              <div className="custom-table-frame-913">
                <div className="custom-table-_1-67" onClick={() => handleClick(match.odds.length < 7 ? null : OddsComponent("Total2", match.odds), match.opponents[0].name, match.opponents[1].name)}>{match.odds.length < 7 ? null : OddsComponent("Total2", match.odds)}</div>
              </div>
            </div>
            <div className="custom-table-frame-936">
              <div className="custom-table-_1-67">(0:0)</div>
            </div>
          </div>
        </div>
        ))
        }
 
      </div>
    </div>
  );
};

export default Table3;
