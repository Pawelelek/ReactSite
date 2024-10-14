import './Coupon.css'
import './BetComp.css'
import { http } from '../../../http';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useState } from 'react';
import { usePotentialWinnings } from './PotentialWinningsContext';

const BetComp = () => {
  const { allUsers, user } = useTypedSelector((store) => store.UserReducer);
  const { potentialWinnings, setPotentialWinnings } = usePotentialWinnings();
const [bet, setBet] = useState({
  amount: potentialWinnings,
  oddId: '',
  userId: user.Id,
});

const isFormValid = () => {
  return Object.values(bet);
};

const handleChange = (e: any) => {
  const { name, value } = e.target;
  setBet((prevBet) => ({
    ...prevBet,
    [name]: value === '' ? null : value,
  }));
};

const handleSubmit = (e: any) => {
  e.preventDefault();
  const form = {
    amount : bet.amount,
    userId: user.Id,
    oddId: bet.oddId
  }
  console.log("Submit: "+ form)
  http.post("api/Bet/create", form)
    .then(() => {
      //navigate('/admin/sport/bets');
    });
  
};
  return (
    <div className="custom-coupon-frame-936" style={{height:'195px'}}>
  <div className="custom-coupon-frame-801" style={{height:'100%', backgroundColor: '#171717' ,borderRadius:'20px', backgroundImage: `url('/Promotionsimg/ring.png')` }}>
    <div className="custom-coupon-frame-800">
      <div className="custom-coupon-frame-637">
        <div className="custom-coupon-div2" style={{fontFamily:`"Roboto-Bold", Helvetica`,fontSize:'16px'}}>"СТАВКА ДНЯ"</div>
      </div>
      <div className="custom-coupon-div3">
        до 
        <span style={{color:'#ebade6',fontFamily:`"Roboto-Bold", Helvetica`,fontSize:'23px'}}> 10% бонусів</span>
      </div>
    </div>
    <div className="custom-bets-frame-825">
  <div className="custom-bets-text" onClick={() => handleSubmit}>Зробити ставку</div>
</div>
  </div>
</div>
  );
};

export default BetComp;