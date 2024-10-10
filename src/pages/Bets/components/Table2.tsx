import './Table1.css';

const Table2 = ({ onCoefficientSelect }: any) => {
  const handleClick = (coefficient: any, team1: any, team2: any) => {
    onCoefficientSelect(coefficient, team1, team2);
  };

  return (
    <div className="custom-table-frame-963" style={{paddingBottom:'50px'}}>
      <div className="custom-table-frame-9632">
        <div className="custom-table-frame-927">
          <img className="custom-table-rectangle-51" src="/Betsimg/europe2.png" />
          <div className="custom-table-div">ЄВРОПА | ЛІГА ЧЕМПІОНІВ. КВАЛІФІКАЦІЯ</div>
        </div>
        <div className="custom-table-frame-925">
          <div className="custom-table-frame-922">
            <div className="custom-table-_1">1</div>
            <div className="custom-table-x">X</div>
            <div className="custom-table-_2">2</div>
          </div>
          <div className="custom-table-frame-920">
            <div className="custom-table-_1">1</div>
            <div className="custom-table-div2">Фора</div>
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
        {/* First Match */}
        <div className="custom-table-frame-939">
          <div className="custom-table-frame-930">
            <img className="custom-table-star-1" src="/Homeimg/star1.svg" />
            <div className="custom-table-frame-929">
              <div className="custom-table-_09-08">09.08</div>
              <div className="custom-table-_22-00">22:00</div>
            </div>
            <div className="custom-table-frame-928">
              <div className="custom-table-div3">Янг Бойз</div>
              <div className="custom-table-div3">Галатасарай</div>
            </div>
          </div>
          <div className="custom-table-frame-926">
            <div className="custom-table-frame-914">
              <div className="custom-table-frame-911">
                <div className="custom-table-_1-67" onClick={() => handleClick(3.75, "Янг Бойз", "Галатасарай")}>3.75</div>
              </div>
              <div className="custom-table-frame-912">
                <div className="custom-table-_1-67" onClick={() => handleClick(3.80, "Янг Бойз", "Галатасарай")}>3.80</div>
              </div>
              <div className="custom-table-frame-913">
                <div className="custom-table-_1-67" onClick={() => handleClick(2.01, "Янг Бойз", "Галатасарай")}>2.01</div>
              </div>
            </div>
            <div className="custom-table-frame-934">
              <div className="custom-table-frame-911">
                <div className="custom-table-_1-67" onClick={() => handleClick(1.90, "Янг Бойз", "Галатасарай")}>1.90</div>
              </div>
              <div className="custom-table-frame-912">
                <div className="custom-table-_1-672" onClick={() => handleClick("+0.5", "Янг Бойз", "Галатасарай")}>+0.5</div>
              </div>
              <div className="custom-table-frame-913">
                <div className="custom-table-_1-67" onClick={() => handleClick(1.99, "Янг Бойз", "Галатасарай")}>1.99</div>
              </div>
            </div>
            <div className="custom-table-frame-935">
              <div className="custom-table-frame-911">
                <div className="custom-table-_1-67" onClick={() => handleClick(2.15, "Янг Бойз", "Галатасарай")}>2.15</div>
              </div>
              <div className="custom-table-frame-912">
                <div className="custom-table-_1-672" onClick={() => handleClick(3.0, "Янг Бойз", "Галатасарай")}>3.0</div>
              </div>
              <div className="custom-table-frame-913">
                <div className="custom-table-_1-67" onClick={() => handleClick(1.78, "Янг Бойз", "Галатасарай")}>1.78</div>
              </div>
            </div>
            <div className="custom-table-frame-936">
              <div className="custom-table-_1-67">+214</div>
            </div>
          </div>
        </div>
        
        {/* Second Match */}
        <div className="custom-table-frame-939">
          <div className="custom-table-frame-930">
            <img className="custom-table-star-1" src="/Homeimg/star1.svg" />
            <div className="custom-table-frame-929">
              <div className="custom-table-_09-08">10.08</div>
              <div className="custom-table-_22-00">21:00</div>
            </div>
            <div className="custom-table-frame-928">
              <div className="custom-table-div3">Динамо Київ</div>
              <div className="custom-table-div3">Зальцбург</div>
            </div>
          </div>
          <div className="custom-table-frame-926">
            <div className="custom-table-frame-914">
              <div className="custom-table-frame-911">
                <div className="custom-table-_1-67" onClick={() => handleClick(3.00, "Динамо Київ", "Зальцбург")}>3.00</div>
              </div>
              <div className="custom-table-frame-912">
                <div className="custom-table-_1-67" onClick={() => handleClick(3.80, "Динамо Київ", "Зальцбург")}>3.80</div>
              </div>
              <div className="custom-table-frame-913">
                <div className="custom-table-_1-67" onClick={() => handleClick(2.35, "Динамо Київ", "Зальцбург")}>2.35</div>
              </div>
            </div>
            <div className="custom-table-frame-934">
              <div className="custom-table-frame-911">
                <div className="custom-table-_1-67" onClick={() => handleClick(2.21, "Динамо Київ", "Зальцбург")}>2.21</div>
              </div>
              <div className="custom-table-frame-912">
                <div className="custom-table-_1-672" onClick={() => handleClick("0.0", "Динамо Київ", "Зальцбург")}>0.0</div>
              </div>
              <div className="custom-table-frame-913">
                <div className="custom-table-_1-67" onClick={() => handleClick(1.76, "Динамо Київ", "Зальцбург")}>1.76</div>
              </div>
            </div>
            <div className="custom-table-frame-935">
              <div className="custom-table-frame-911">
                <div className="custom-table-_1-67" onClick={() => handleClick(2.08, "Динамо Київ", "Зальцбург")}>2.08</div>
              </div>
              <div className="custom-table-frame-912">
                <div className="custom-table-_1-672" onClick={() => handleClick(3.0, "Динамо Київ", "Зальцбург")}>3.0</div>
              </div>
              <div className="custom-table-frame-913">
                <div className="custom-table-_1-67" onClick={() => handleClick(1.83, "Динамо Київ", "Зальцбург")}>1.83</div>
              </div>
            </div>
            <div className="custom-table-frame-936">
              <div className="custom-table-_1-67">+284</div>
            </div>
          </div>
        </div>
        
        {/* Third Match */}
        <div className="custom-table-frame-939">
          <div className="custom-table-frame-930">
            <img className="custom-table-star-1" src="/Homeimg/star1.svg" />
            <div className="custom-table-frame-929">
              <div className="custom-table-_09-08">11.08</div>
              <div className="custom-table-_22-00">20:00</div>
            </div>
            <div className="custom-table-frame-928">
              <div className="custom-table-div3">Мідтьюлланд</div>
              <div className="custom-table-div3">Слован Братислава</div>
            </div>
          </div>
          <div className="custom-table-frame-926">
            <div className="custom-table-frame-914">
              <div className="custom-table-frame-911">
                <div className="custom-table-_1-67" onClick={() => handleClick(1.58, "Мідтьюлланд", "Слован Братислава")}>1.58</div>
              </div>
              <div className="custom-table-frame-912">
                <div className="custom-table-_1-67" onClick={() => handleClick(4.65, "Мідтьюлланд", "Слован Братислава")}>4.65</div>
              </div>
              <div className="custom-table-frame-913">
                <div className="custom-table-_1-67" onClick={() => handleClick(6.00, "Мідтьюлланд", "Слован Братислава")}>6.00</div>
              </div>
            </div>
            <div className="custom-table-frame-934">
              <div className="custom-table-frame-911">
                <div className="custom-table-_1-67" onClick={() => handleClick(1.94, "Мідтьюлланд", "Слован Братислава")}>1.94</div>
              </div>
              <div className="custom-table-frame-912">
                <div className="custom-table-_1-672" onClick={() => handleClick("-1.0", "Мідтьюлланд", "Слован Братислава")}>-1.0</div>
              </div>
              <div className="custom-table-frame-913">
                <div className="custom-table-_1-67" onClick={() => handleClick(1.96, "Мідтьюлланд", "Слован Братислава")}>1.96</div>
              </div>
            </div>
            <div className="custom-table-frame-935">
              <div className="custom-table-frame-911">
                <div className="custom-table-_1-67" onClick={() => handleClick(1.81, "Мідтьюлланд", "Слован Братислава")}>1.81</div>
              </div>
              <div className="custom-table-frame-912">
                <div className="custom-table-_1-672" onClick={() => handleClick(2.5, "Мідтьюлланд", "Слован Братислава")}>2.5</div>
              </div>
              <div className="custom-table-frame-913">
                <div className="custom-table-_1-67" onClick={() => handleClick(2.11, "Мідтьюлланд", "Слован Братислава")}>2.11</div>
              </div>
            </div>
            <div className="custom-table-frame-936">
              <div className="custom-table-_1-67">+212</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Table2;
