import { useEffect, useState } from 'react';
import './Table1.css'
import { http } from '../../../http';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import './PlayerTooltip.css';
import RegistrationModal from '../../defaultPage/Modal/Register/RegistrationModal';
import LoginModal from '../../defaultPage/Modal/Login/LoginModal';

const Table3 = ({ onCoefficientSelect } : any) => {
  const [favoriteMatches, setFavoriteMatches] = useState<{ [key: string]: boolean }>({});
  const { isAuth } = useTypedSelector((store) => store.UserReducer);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const handleOpenRegistrationModal = () => setShowRegistrationModal(true);
  const handleCloseRegistrationModal = () => setShowRegistrationModal(false);

  const handleCloseLoginModal = () => setShowLoginModal(false);
  const onSwitchToLogin = () => {
    setShowRegistrationModal(false);
    setShowLoginModal(true);
  };

  const onSwitchToRegister = () => {
    setShowLoginModal(false);
    setShowRegistrationModal(true);
  };
  const { allUsers, user } = useTypedSelector((store) => store.UserReducer);
  const [sportMatches, setSportMatches] = useState<any>([]);
  const handleClick = (oddId:any, coefficient: any, team1: any, team2: any) => {

    onCoefficientSelect(oddId, coefficient, team1, team2); 
  };
  const setStarClick = (matchId: string) => {
    if (!isAuth)
      {
         handleOpenRegistrationModal();
         return;
      }
    const updatedFavorites = { ...favoriteMatches };
    const isFavorite = !favoriteMatches[matchId];

    updatedFavorites[matchId] = isFavorite; // Змінюємо стан зірки
    setFavoriteMatches(updatedFavorites);

    // Зберігаємо в localStorage
    localStorage.setItem('favoriteMatches', JSON.stringify(updatedFavorites));

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
      http.get("api/SportMatch/getByEventName/УКРАЇНА | ПРЕМЄР ЛІГА")
        .then(resp => {
          const transactions = resp.data.payload;
          console.log(transactions)
          //console.log("ODDS: " ,transactions[3].odds[2].value);
          setSportMatches(transactions);
          console.log(transactions);
        });
    }
    const OddsValue = (type:string, odds: { value:any, name: string, type: string, id: string }[]) => {
      // Знайти об'єкт, де type дорівнює "Goal1"
      const goal1Odd = odds.find((odd) => odd.type === type);
      return (
        goal1Odd?.value
      );
    };
    const OddsId = (type:string, odds: { value:any, name: string, type: string, id: string }[]) => {
      // Знайти об'єкт, де type дорівнює "Goal1"
      const goal1Odd = odds.find((odd) => odd.type === type);
      return (
        goal1Odd?.id
      );
    };
    const loadFavoriteMatches = () => {
      const savedFavorites = localStorage.getItem('favoriteMatches');
      if (savedFavorites) {
        setFavoriteMatches(JSON.parse(savedFavorites));
      }
    };
    useEffect(() => {
      loadFavoriteMatches();
      loadSportMatches();
      }, []);
  return (
    <>
    <div className="custom-table-frame-963" style={{paddingBottom:''}}>
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

        
        {sportMatches.map((match: any) => (
          <div className="custom-table-frame-939" key={match.id}>
          <div className="custom-table-frame-930" >
          <img className="custom-table-star-1" onClick={() => setStarClick(match.id)} src={favoriteMatches[match.id] ? '/Betsimg/star2.png' : '/Homeimg/star1.svg'} />
            <div className="custom-table-frame-929">
              <div className="custom-table-_09-08">{new Date(match.dateStart).toLocaleDateString([], { day: '2-digit', month: '2-digit' })}</div>
              <div className="custom-table-_22-00">{new Date(match.dateStart).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
            </div>
            <div className="custom-table-frame-928">
              <div className="custom-table-div3">{match.opponents.length < 1 ? "None" : "1-" + match.opponents[1].name}</div>
              <div className="custom-table-div3">{match.opponents.length < 1 ? "None" : "2-" + match.opponents[0].name}</div>
            </div>
            
          </div>
          <div className="custom-table-frame-926">
            <div className="custom-table-frame-914">
              <div className="custom-table-frame-911">
                <div className="custom-table-_1-67" onClick={() => handleClick(match.odds.length < 1 ? null : OddsId("Win1", match.odds), match.odds.length < 1 ? null : OddsValue("Win1", match.odds), match.opponents[1].name, match.opponents[0].name)}>{match.odds.length < 1 ? null : OddsValue("Win1", match.odds)}</div>
              </div>
              <div className="custom-table-frame-912">
                <div className="custom-table-_1-67" onClick={() => handleClick(match.odds.length < 1 ? null : OddsId("Draw", match.odds), match.odds.length < 2 ? null : OddsValue("Draw", match.odds), match.opponents[1].name, match.opponents[0].name)}>{match.odds.length < 2 ? null : OddsValue("Draw", match.odds)}</div>
              </div>
              <div className="custom-table-frame-913">
                <div className="custom-table-_1-67" onClick={() => handleClick(match.odds.length < 1 ? null : OddsId("Win2", match.odds), match.odds.length < 3 ? null : OddsValue("Win2", match.odds), match.opponents[1].name, match.opponents[0].name)}>{match.odds.length < 3 ? null : OddsValue("Win2", match.odds)}</div>
              </div>
            </div>
            <div className="custom-table-frame-934">
              <div className="custom-table-frame-911">
                <div className="custom-table-_1-67" onClick={() => handleClick(match.odds.length < 1 ? null : OddsId("Goal1", match.odds), match.odds.length < 4 ? null : OddsValue("Goal1", match.odds), match.opponents[1].name, match.opponents[0].name)}>{match.odds.length < 4 ? null : OddsValue("Goal1", match.odds)}</div>
              </div>
              <div className="custom-table-frame-915">
                <div className="custom-table-_1-672">X</div>
              </div>
              <div className="custom-table-frame-913">
                <div className="custom-table-_1-67" onClick={() => handleClick(match.odds.length < 1 ? null : OddsId("Goal2", match.odds), match.odds.length < 5 ? null : OddsValue("Goal2", match.odds), match.opponents[1].name, match.opponents[0].name)}>{match.odds.length < 5 ? null : OddsValue("Goal2", match.odds)}</div>
              </div>
            </div>
            <div className="custom-table-frame-935">
              <div className="custom-table-frame-911">
                <div className="custom-table-_1-67" onClick={() => handleClick(match.odds.length < 1 ? null : OddsId("Total1", match.odds), match.odds.length < 6 ? null : OddsValue("Total1", match.odds), match.opponents[1].name, match.opponents[0].name)}>{match.odds.length < 6 ? null : OddsValue("Total1", match.odds)}</div>
              </div>
              <div className="custom-table-frame-915">
                <div className="custom-table-_1-672">4.5</div>
              </div>
              <div className="custom-table-frame-913">
                <div className="custom-table-_1-67" onClick={() => handleClick(match.odds.length < 1 ? null : OddsId("Total2", match.odds), match.odds.length < 7 ? null : OddsValue("Total2", match.odds), match.opponents[1].name, match.opponents[0].name)}>{match.odds.length < 7 ? null : OddsValue("Total2", match.odds)}</div>
              </div>
            </div>
            <div className="custom-table-frame-936">
              <div className="custom-table-_1-67"></div>
            </div>
          </div>
        </div>
        ))
        }
 
      </div>
    </div>
    <RegistrationModal 
    show={showRegistrationModal} 
    onClose={handleCloseRegistrationModal} 
    onSwitchToLogin={onSwitchToLogin}
  />
  <LoginModal 
  show={showLoginModal} 
  setShowModal={setShowLoginModal}
  onClose={handleCloseLoginModal} 
  onSwitchToRegister={onSwitchToRegister}
/>
</>
  );
};

export default Table3;
