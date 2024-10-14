import { useEffect, useState } from 'react';
import './Table1.css'
import { http } from '../../../http';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import './PlayerTooltip.css';
import RegistrationModal from '../../defaultPage/Modal/Register/RegistrationModal';
import LoginModal from '../../defaultPage/Modal/Login/LoginModal';

const playersList: { [key: string]: { name: string; number: string; position: string }[] } = {
  "Верес": [
    { name: "Головаченко, Микола", number: "#47", position: "ГК" },
    { name: "Карасевич, Тарас", number: "#23", position: "ГК" },
    { name: "Приходько, Степан", number: "#1", position: "ГК" },
    { name: "Малинович, Сергій", number: "#95", position: "ЗАХ" },
    { name: "Голуб, Андрій", number: "#33", position: "ЗАХ" },
    { name: "Полюхович, Роман", number: "#3", position: "ЗАХ" },
    { name: "Кротевич, Олександр", number: "#67", position: "ЗАХ" },
    { name: "Овчаренко, Денис", number: "#57", position: "ЗАХ" },
    { name: "Кухотко, Олександр", number: "#71", position: "ЗАХ" },
    { name: "Стадник, Станіслав", number: "#17", position: "ЗАХ" },
    { name: "Маринич, Дмитро", number: "#29", position: "ПЗХ" },
    { name: "Шаповал, Ігор", number: "#10", position: "ПЗХ" },
    { name: "Станько, Ігор", number: "#6", position: "ПЗХ" },
    { name: "Тарасюк, Вадим", number: "#87", position: "ПЗХ" }
],
};

const PlayerTooltip = ({ team }: { team: string }) => {
  const players = playersList[team];

  if (!players) return null;

  return (
    <div className="tooltip">
      <div className="tooltip-header">{team}</div>
      <div className="tooltip-content">
        {players.map((player: any, index: any) => (
          <div key={index} className="tooltip-player-row">
            <img className="tooltip-flag" src="/Betsimg/ukraine.png" alt="Flag" />
            <div className="tooltip-player-name">{player.name}</div>
            <div className="tooltip-player-number">{player.number}</div>
            <div className="tooltip-player-position">{player.position}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Table3 = ({ onCoefficientSelect } : any) => {
  const [hoveredTeam, setHoveredTeam] = useState<string | null>(null);
  const [favoriteMatches, setFavoriteMatches] = useState<{ [key: string]: boolean }>({});
  const { isAuth } = useTypedSelector((store) => store.UserReducer);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const handleMouseEnter = (team: string) => {
    setHoveredTeam(team);
  };

  const handleMouseLeave = () => {
    setHoveredTeam(null);
  };
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
  const handleClick = (coefficient: any, team1: any, team2: any) => {

    onCoefficientSelect(coefficient, team1, team2); 
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
    const OddsComponent = (type:string, odds: { value:any, name: string, type: string, id: string }[]) => {
      // Знайти об'єкт, де type дорівнює "Goal1"
      const goal1Odd = odds.find((odd) => odd.type === type);
    console.log(goal1Odd?.id)
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
          <img className="custom-table-star-1" onClick={() => setStarClick(match.id)} src={favoriteMatches[match.id] ? '/Betsimg/star2.png' : '/Homeimg/star1.svg'} />
            <div className="custom-table-frame-929">
              <div className="custom-table-_09-08">{new Date(match.dateStart).toLocaleDateString([], { day: '2-digit', month: '2-digit' })}</div>
              <div className="custom-table-_22-00">{new Date(match.dateStart).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
            </div>
            <div className="custom-table-frame-928">
              <div className="custom-table-div3" onMouseEnter={() => handleMouseEnter(match.opponents.length < 1 ? "None" :match.opponents[0].name)}
              onMouseLeave={handleMouseLeave}>{match.opponents.length < 1 ? "None" :match.opponents[0].name}</div>
              <div className="custom-table-div3">{match.opponents.length < 1 ? "None" :match.opponents[1].name}</div>
            </div>
            {hoveredTeam === match.opponents[0].name && <PlayerTooltip team={match.opponents.length < 1 ? "None" :match.opponents[0].name} />}
            {hoveredTeam === "Динамо Київ" && <PlayerTooltip team="Динамо Київ" />}
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
