import './Table1.css'

const Table1 = ({ onCoefficientSelect } : any) => {
  const handleClick = (coefficient: any, team1: any, team2: any) => {
    onCoefficientSelect(coefficient, team1, team2);
  };
  return (
    <div className="custom-table-frame-963">
  <div className="custom-table-frame-9632">
    <div className="custom-table-frame-927">
      <img className="custom-table-rectangle-51" src="/Betsimg/ukraine.png" />
      <div className="custom-table-div">УКРАЇНА | КУБОК УКРАЇНИ</div>
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
    <div className="custom-table-frame-939">
      <div className="custom-table-frame-930">
        <img className="custom-table-star-1" src="/Homeimg/star1.svg" />
        <div className="custom-table-frame-929">
          <div className="custom-table-_09-08">09.08</div>
          <div className="custom-table-_22-00">22:00</div>
        </div>
        <div className="custom-table-frame-928">
          <div className="custom-table-div3">Олімпія Савинці</div>
          <div className="custom-table-div3">Зоря Луганськ</div>
        </div>
      </div>
      <div className="custom-table-frame-926">
        <div className="custom-table-frame-914">
          <div className="custom-table-frame-911">
            <div className="custom-table-_1-67" onClick={() => handleClick(5.50, "Олімпія Савинці", "Зоря Луганськ")}>5.50</div>
          </div>
          <div className="custom-table-frame-912">
            <div className="custom-table-_1-67" onClick={() => handleClick(6.50, "Олімпія Савинці", "Зоря Луганськ")}>6.50</div>
          </div>
          <div className="custom-table-frame-913">
            <div className="custom-table-_1-67" onClick={() => handleClick(1.19, "Олімпія Савинці", "Зоря Луганськ")}>1.19</div>
          </div>
        </div>
        <div className="custom-table-frame-934">
          <div className="custom-table-frame-911">
            <div className="custom-table-_1-67" onClick={() => handleClick(1.77, "Олімпія Савинці", "Зоря Луганськ")}>1.77</div>
          </div>
          <div className="custom-table-frame-912">
            <div className="custom-table-_1-672" onClick={() => handleClick(2.5, "Олімпія Савинці", "Зоря Луганськ")}>+2.5</div>
          </div>
          <div className="custom-table-frame-913">
            <div className="custom-table-_1-67" onClick={() => handleClick(2.03, "Олімпія Савинці", "Зоря Луганськ")}>2.03</div>
          </div>
        </div>
        <div className="custom-table-frame-935">
          <div className="custom-table-frame-911">
            <div className="custom-table-_1-67" onClick={() => handleClick(1.80, "Олімпія Савинці", "Зоря Луганськ")}>1.80</div>
          </div>
          <div className="custom-table-frame-912">
            <div className="custom-table-_1-672" onClick={() => handleClick(3.5, "Олімпія Савинці", "Зоря Луганськ")}>3.5</div>
          </div>
          <div className="custom-table-frame-913">
            <div className="custom-table-_1-67" onClick={() => handleClick(2.00, "Олімпія Савинці", "Зоря Луганськ")}>2.00</div>
          </div>
        </div>
        <div className="custom-table-frame-936">
          <div className="custom-table-_1-67">+88</div>
        </div>
      </div>
    </div>
    <div className="custom-table-frame-9352">
      <div className="custom-table-frame-930">
        <img className="custom-table-star-12" src="/Homeimg/star1.svg" />
        <div className="custom-table-frame-929">
          <div className="custom-table-_09-08">10.08</div>
          <div className="custom-table-_22-00">21:00</div>
        </div>
        <div className="custom-table-frame-928">
          <div className="custom-table-div3">ФК Минай</div>
          <div className="custom-table-div3">Вікторія</div>
        </div>
      </div>
      <div className="custom-table-frame-926">
        <div className="custom-table-frame-914">
          <div className="custom-table-frame-911">
            <div className="custom-table-_1-67" onClick={() => handleClick(1.72, "ФК Минай", "Вікторія")}>1.72</div>
          </div>
          <div className="custom-table-frame-912">
            <div className="custom-table-_1-67" onClick={() => handleClick(3.65, "ФК Минай", "Вікторія")}>3.65</div>
          </div>
          <div className="custom-table-frame-913">
            <div className="custom-table-_1-67" onClick={() => handleClick(4.45, "ФК Минай", "Вікторія")}>4.45</div>
          </div>
        </div>
        <div className="custom-table-frame-934">
          <div className="custom-table-frame-911">
            <div className="custom-table-_1-67" onClick={() => handleClick(1.68, "ФК Минай", "Вікторія")}>1.68</div>
          </div>
          <div className="custom-table-frame-912">
            <div className="custom-table-_1-672" onClick={() => handleClick(0.5, "ФК Минай", "Вікторія")}>-0.5</div>
          </div>
          <div className="custom-table-frame-913">
            <div className="custom-table-_1-67" onClick={() => handleClick(2.16, "ФК Минай", "Вікторія")}>2.16</div>
          </div>
        </div>
        <div className="custom-table-frame-935">
          <div className="custom-table-frame-911">
            <div className="custom-table-_1-67" onClick={() => handleClick(1.86, "ФК Минай", "Вікторія")}>1.86</div>
          </div>
          <div className="custom-table-frame-912">
            <div className="custom-table-_1-672" onClick={() => handleClick(2.5, "ФК Минай", "Вікторія")}>2.5</div>
          </div>
          <div className="custom-table-frame-913">
            <div className="custom-table-_1-67" onClick={() => handleClick(1.87, "ФК Минай", "Вікторія")}>1.87</div>
          </div>
        </div>
        <div className="custom-table-frame-936">
          <div className="custom-table-_1-67">+91</div>
        </div>
      </div>
    </div>
    <div className="custom-table-frame-942">
      <div className="custom-table-frame-930">
        <img className="custom-table-star-13" src="/Homeimg/star1.svg" />
        <div className="custom-table-frame-929">
          <div className="custom-table-_09-08">11.08</div>
          <div className="custom-table-_22-00">20:00</div>
        </div>
        <div className="custom-table-frame-928">
          <div className="custom-table-div3">ФК Карпати Львів</div>
          <div className="custom-table-div3">Чорноморець Одеса</div>
        </div>
      </div>
      <div className="custom-table-frame-926">
        <div className="custom-table-frame-914">
          <div className="custom-table-frame-911">
            <div className="custom-table-_1-67" onClick={() => handleClick(1.44, "ФК Карпати Львів", "Чорноморець Одеса")}>1.44</div>
          </div>
          <div className="custom-table-frame-912">
            <div className="custom-table-_1-67" onClick={() => handleClick(4.50, "ФК Карпати Львів", "Чорноморець Одеса")}>4.50</div>
          </div>
          <div className="custom-table-frame-913">
            <div className="custom-table-_1-67" onClick={() => handleClick(6.50, "ФК Карпати Львів", "Чорноморець Одеса")}>6.50</div>
          </div>
        </div>
        <div className="custom-table-frame-934">
          <div className="custom-table-frame-911">
            <div className="custom-table-_1-67" onClick={() => handleClick(1.69, "ФК Карпати Львів", "Чорноморець Одеса")}>1.69</div>
          </div>
          <div className="custom-table-frame-912">
            <div className="custom-table-_1-672" onClick={() => handleClick(1.0, "ФК Карпати Львів", "Чорноморець Одеса")}>-1.0</div>
          </div>
          <div className="custom-table-frame-913">
            <div className="custom-table-_1-67" onClick={() => handleClick(2.15, "ФК Карпати Львів", "Чорноморець Одеса")}>2.15</div>
          </div>
        </div>
        <div className="custom-table-frame-935">
          <div className="custom-table-frame-911">
            <div className="custom-table-_1-67" onClick={() => handleClick(1.72, "ФК Карпати Львів", "Чорноморець Одеса")}>1.72</div>
          </div>
          <div className="custom-table-frame-912">
            <div className="custom-table-_1-672" onClick={() => handleClick(2.5, "ФК Карпати Львів", "Чорноморець Одеса")}>2.5</div>
          </div>
          <div className="custom-table-frame-913">
            <div className="custom-table-_1-67" onClick={() => handleClick(2.04, "ФК Карпати Львів", "Чорноморець Одеса")}>2.04</div>
          </div>
        </div>
        <div className="custom-table-frame-936">
          <div className="custom-table-_1-67">+90</div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default Table1;