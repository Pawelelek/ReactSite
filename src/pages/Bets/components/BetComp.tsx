import './Coupon.css'
import './BetComp.css'

const BetComp = () => {
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
  <div className="custom-bets-text">Зробити ставку</div>
</div>
  </div>
</div>
  );
};

export default BetComp;