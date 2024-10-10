import './Table1.css'

const Table3 = ({ onCoefficientSelect } : any) => {
  const handleClick = (coefficient: any, team1: any, team2: any) => {
    onCoefficientSelect(coefficient, team1, team2);
  };
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

        {/* First Row - Верес vs Динамо Київ */}
        <div className="custom-table-frame-939">
          <div className="custom-table-frame-930">
            <img className="custom-table-star-1" src="/Homeimg/star1.svg" />
            <div className="custom-table-frame-929">
              <div className="custom-table-_09-08">09.08</div>
              <div className="custom-table-_22-00">22:00</div>
            </div>
            <div className="custom-table-frame-928">
              <div className="custom-table-div3">Верес</div>
              <div className="custom-table-div3">Динамо Київ</div>
            </div>
          </div>
          <div className="custom-table-frame-926">
            <div className="custom-table-frame-914">
              <div className="custom-table-frame-911">
                <div className="custom-table-_1-67" onClick={() => handleClick(1.93, "Верес", "Динамо Київ")}>1.93</div>
              </div>
              <div className="custom-table-frame-912">
                <div className="custom-table-_1-67" onClick={() => handleClick(7.70, "Верес", "Динамо Київ")}>7.70</div>
              </div>
              <div className="custom-table-frame-913">
                <div className="custom-table-_1-67" onClick={() => handleClick(2.30, "Верес", "Динамо Київ")}>2.30</div>
              </div>
            </div>
            <div className="custom-table-frame-934">
              <div className="custom-table-frame-911">
                <div className="custom-table-_1-67" onClick={() => handleClick(1.74, "Верес", "Динамо Київ")}>1.74</div>
              </div>
              <div className="custom-table-frame-912">
                <div className="custom-table-_1-672" onClick={() => handleClick(0.0, "Верес", "Динамо Київ")}>0.0</div>
              </div>
              <div className="custom-table-frame-913">
                <div className="custom-table-_1-67" onClick={() => handleClick(2.00, "Верес", "Динамо Київ")}>2.00</div>
              </div>
            </div>
            <div className="custom-table-frame-935">
              <div className="custom-table-frame-911">
                <div className="custom-table-_1-67" onClick={() => handleClick(1.83, "Верес", "Динамо Київ")}>1.83</div>
              </div>
              <div className="custom-table-frame-912">
                <div className="custom-table-_1-672" onClick={() => handleClick(4.5, "Верес", "Динамо Київ")}>4.5</div>
              </div>
              <div className="custom-table-frame-913">
                <div className="custom-table-_1-67" onClick={() => handleClick(2.39, "Верес", "Динамо Київ")}>2.39</div>
              </div>
            </div>
            <div className="custom-table-frame-936">
              <div className="custom-table-_1-67">+164</div>
            </div>
          </div>
        </div>

        {/* Second Row - ФК Полісся vs Оболонь */}
        <div className="custom-table-frame-939">
          <div className="custom-table-frame-930">
            <img className="custom-table-star-1" src="/Homeimg/star1.svg" />
            <div className="custom-table-frame-929">
              <div className="custom-table-_09-08">09.08</div>
              <div className="custom-table-_22-00">22:00</div>
            </div>
            <div className="custom-table-frame-928">
              <div className="custom-table-div3">ФК Полісся</div>
              <div className="custom-table-div3">Оболонь</div>
            </div>
          </div>
          <div className="custom-table-frame-926">
            <div className="custom-table-frame-914">
              <div className="custom-table-frame-911">
                <div className="custom-table-_1-67" onClick={() => handleClick(1.53, "ФК Полісся", "Оболонь")}>1.53</div>
              </div>
              <div className="custom-table-frame-912">
                <div className="custom-table-_1-67" onClick={() => handleClick(9.30, "ФК Полісся", "Оболонь")}>9.30</div>
              </div>
              <div className="custom-table-frame-913">
                <div className="custom-table-_1-67" onClick={() => handleClick(3.20, "ФК Полісся", "Оболонь")}>3.20</div>
              </div>
            </div>
            <div className="custom-table-frame-934">
              <div className="custom-table-frame-911">
                <div className="custom-table-_1-67" onClick={() => handleClick(1.96, "ФК Полісся", "Оболонь")}>1.96</div>
              </div>
              <div className="custom-table-frame-912">
                <div className="custom-table-_1-672" onClick={() => handleClick(-0.2, "ФК Полісся", "Оболонь")}>-0.2</div>
              </div>
              <div className="custom-table-frame-913">
                <div className="custom-table-_1-67" onClick={() => handleClick(1.82, "ФК Полісся", "Оболонь")}>1.82</div>
              </div>
            </div>
            <div className="custom-table-frame-935">
              <div className="custom-table-frame-911">
                <div className="custom-table-_1-67" onClick={() => handleClick(1.83, "ФК Полісся", "Оболонь")}>1.83</div>
              </div>
              <div className="custom-table-frame-912">
                <div className="custom-table-_1-672" onClick={() => handleClick(17.5, "ФК Полісся", "Оболонь")}>17.5</div>
              </div>
              <div className="custom-table-frame-913">
                <div className="custom-table-_1-67" onClick={() => handleClick(1.95, "ФК Полісся", "Оболонь")}>1.95</div>
              </div>
            </div>
            <div className="custom-table-frame-936">
              <div className="custom-table-_1-67">+33</div>
            </div>
          </div>
        </div>

        {/* Third Row - Рух Львів vs Зоря Луганськ */}
        <div className="custom-table-frame-939">
          <div className="custom-table-frame-930">
            <img className="custom-table-star-1" src="/Homeimg/star1.svg" />
            <div className="custom-table-frame-929">
              <div className="custom-table-_09-08">10.08</div>
              <div className="custom-table-_22-00">22:00</div>
            </div>
            <div className="custom-table-frame-928">
              <div className="custom-table-div3">Рух Львів</div>
              <div className="custom-table-div3">Зоря Луганськ</div>
            </div>
          </div>
          <div className="custom-table-frame-926">
            <div className="custom-table-frame-914">
              <div className="custom-table-frame-911">
                <div className="custom-table-_1-67" onClick={() => handleClick(1.65, "Рух Львів", "Зоря Луганськ")}>1.65</div>
              </div>
              <div className="custom-table-frame-912">
                <div className="custom-table-_1-67" onClick={() => handleClick(3.80, "Рух Львів", "Зоря Луганськ")}>3.80</div>
              </div>
              <div className="custom-table-frame-913">
                <div className="custom-table-_1-67" onClick={() => handleClick(6.20, "Рух Львів", "Зоря Луганськ")}>6.20</div>
              </div>
            </div>
            <div className="custom-table-frame-934">
              <div className="custom-table-frame-911">
                <div className="custom-table-_1-67" onClick={() => handleClick(2.14, "Рух Львів", "Зоря Луганськ")}>2.14</div>
              </div>
              <div className="custom-table-frame-912">
                <div className="custom-table-_1-672" onClick={() => handleClick(-0.1, "Рух Львів", "Зоря Луганськ")}>-0.1</div>
              </div>
              <div className="custom-table-frame-913">
                <div className="custom-table-_1-67" onClick={() => handleClick(1.78, "Рух Львів", "Зоря Луганськ")}>1.78</div>
              </div>
            </div>
            <div className="custom-table-frame-935">
              <div className="custom-table-frame-911">
                <div className="custom-table-_1-67" onClick={() => handleClick(1.76, "Рух Львів", "Зоря Луганськ")}>1.76</div>
              </div>
              <div className="custom-table-frame-912">
                <div className="custom-table-_1-672" onClick={() => handleClick(2.0, "Рух Львів", "Зоря Луганськ")}>2.0</div>
              </div>
              <div className="custom-table-frame-913">
                <div className="custom-table-_1-67" onClick={() => handleClick(2.17, "Рух Львів", "Зоря Луганськ")}>2.17</div>
              </div>
            </div>
            <div className="custom-table-frame-936">
              <div className="custom-table-_1-67">+155</div>
            </div>
          </div>
        </div>

        {/* Fourth Row - Кривбас vs Інгулець */}
        <div className="custom-table-frame-939">
          <div className="custom-table-frame-930">
            <img className="custom-table-star-1" src="/Homeimg/star1.svg" />
            <div className="custom-table-frame-929">
              <div className="custom-table-_09-08">10.08</div>
              <div className="custom-table-_22-00">22:00</div>
            </div>
            <div className="custom-table-frame-928">
              <div className="custom-table-div3">Кривбас</div>
              <div className="custom-table-div3">Інгулець</div>
            </div>
          </div>
          <div className="custom-table-frame-926">
            <div className="custom-table-frame-914">
              <div className="custom-table-frame-911">
                <div className="custom-table-_1-67" onClick={() => handleClick(2.54, "Кривбас", "Інгулець")}>2.54</div>
              </div>
              <div className="custom-table-frame-912">
                <div className="custom-table-_1-67" onClick={() => handleClick(3.45, "Кривбас", "Інгулець")}>3.45</div>
              </div>
              <div className="custom-table-frame-913">
                <div className="custom-table-_1-67" onClick={() => handleClick(2.90, "Кривбас", "Інгулець")}>2.90</div>
              </div>
            </div>
            <div className="custom-table-frame-934">
              <div className="custom-table-frame-911">
                <div className="custom-table-_1-67" onClick={() => handleClick(1.83, "Кривбас", "Інгулець")}>1.83</div>
              </div>
              <div className="custom-table-frame-912">
                <div className="custom-table-_1-672" onClick={() => handleClick(0.0, "Кривбас", "Інгулець")}>0.0</div>
              </div>
              <div className="custom-table-frame-913">
                <div className="custom-table-_1-67" onClick={() => handleClick(2.08, "Кривбас", "Інгулець")}>2.08</div>
              </div>
            </div>
            <div className="custom-table-frame-935">
              <div className="custom-table-frame-911">
                <div className="custom-table-_1-67" onClick={() => handleClick(1.99, "Кривбас", "Інгулець")}>1.99</div>
              </div>
              <div className="custom-table-frame-912">
                <div className="custom-table-_1-672" onClick={() => handleClick(3.0, "Кривбас", "Інгулець")}>3.0</div>
              </div>
              <div className="custom-table-frame-913">
                <div className="custom-table-_1-67" onClick={() => handleClick(1.91, "Кривбас", "Інгулець")}>1.91</div>
              </div>
            </div>
            <div className="custom-table-frame-936">
              <div className="custom-table-_1-67">+166</div>
            </div>
          </div>
        </div>

        {/* Fifth Row - ЛНЗ Черкаси vs ФК Карпати Львів */}
        <div className="custom-table-frame-939">
          <div className="custom-table-frame-930">
            <img className="custom-table-star-1" src="/Homeimg/star1.svg" />
            <div className="custom-table-frame-929">
              <div className="custom-table-_09-08">10.08</div>
              <div className="custom-table-_22-00">22:00</div>
            </div>
            <div className="custom-table-frame-928">
              <div className="custom-table-div3">ЛНЗ Черкаси</div>
              <div className="custom-table-div3">ФК Карпати Львів</div>
            </div>
          </div>
          <div className="custom-table-frame-926">
            <div className="custom-table-frame-914">
              <div className="custom-table-frame-911">
                <div className="custom-table-_1-67" onClick={() => handleClick(1.49, "ЛНЗ Черкаси", "ФК Карпати Львів")}>1.49</div>
              </div>
              <div className="custom-table-frame-912">
                <div className="custom-table-_1-67" onClick={() => handleClick(4.20, "ЛНЗ Черкаси", "ФК Карпати Львів")}>4.20</div>
              </div>
              <div className="custom-table-frame-913">
                <div className="custom-table-_1-67" onClick={() => handleClick(8.30, "ЛНЗ Черкаси", "ФК Карпати Львів")}>8.30</div>
              </div>
            </div>
            <div className="custom-table-frame-934">
              <div className="custom-table-frame-911">
                <div className="custom-table-_1-67" onClick={() => handleClick(1.75, "ЛНЗ Черкаси", "ФК Карпати Львів")}>1.75</div>
              </div>
              <div className="custom-table-frame-912">
                <div className="custom-table-_1-672" onClick={() => handleClick(-1.0, "ЛНЗ Черкаси", "ФК Карпати Львів")}>-1.0</div>
              </div>
              <div className="custom-table-frame-913">
                <div className="custom-table-_1-67" onClick={() => handleClick(2.20, "ЛНЗ Черкаси", "ФК Карпати Львів")}>2.20</div>
              </div>
            </div>
            <div className="custom-table-frame-935">
              <div className="custom-table-frame-911">
                <div className="custom-table-_1-67" onClick={() => handleClick(1.93, "ЛНЗ Черкаси", "ФК Карпати Львів")}>1.93</div>
              </div>
              <div className="custom-table-frame-912">
                <div className="custom-table-_1-672" onClick={() => handleClick(2.5, "ЛНЗ Черкаси", "ФК Карпати Львів")}>2.5</div>
              </div>
              <div className="custom-table-frame-913">
                <div className="custom-table-_1-67" onClick={() => handleClick(1.97, "ЛНЗ Черкаси", "ФК Карпати Львів")}>1.97</div>
              </div>
            </div>
            <div className="custom-table-frame-936">
              <div className="custom-table-_1-67">+162</div>
            </div>
          </div>
        </div>

        {/* Sixth Row - Лівий Берег vs Чорноморець Одеса */}
        <div className="custom-table-frame-939">
          <div className="custom-table-frame-930">
            <img className="custom-table-star-1" src="/Homeimg/star1.svg" />
            <div className="custom-table-frame-929">
              <div className="custom-table-_09-08">11.08</div>
              <div className="custom-table-_22-00">22:00</div>
            </div>
            <div className="custom-table-frame-928">
              <div className="custom-table-div3">Лівий Берег</div>
              <div className="custom-table-div3">Чорноморець Одеса</div>
            </div>
          </div>
          <div className="custom-table-frame-926">
            <div className="custom-table-frame-914">
              <div className="custom-table-frame-911">
                <div className="custom-table-_1-67" onClick={() => handleClick(2.57, "Лівий Берег", "Чорноморець Одеса")}>2.57</div>
              </div>
              <div className="custom-table-frame-912">
                <div className="custom-table-_1-67" onClick={() => handleClick(3.35, "Лівий Берег", "Чорноморець Одеса")}>3.35</div>
              </div>
              <div className="custom-table-frame-913">
                <div className="custom-table-_1-67" onClick={() => handleClick(2.92, "Лівий Берег", "Чорноморець Одеса")}>2.92</div>
              </div>
            </div>
            <div className="custom-table-frame-934">
              <div className="custom-table-frame-911">
                <div className="custom-table-_1-67" onClick={() => handleClick(1.83, "Лівий Берег", "Чорноморець Одеса")}>1.83</div>
              </div>
              <div className="custom-table-frame-912">
                <div className="custom-table-_1-672" onClick={() => handleClick(0.0, "Лівий Берег", "Чорноморець Одеса")}>0.0</div>
              </div>
              <div className="custom-table-frame-913">
                <div className="custom-table-_1-67" onClick={() => handleClick(2.08, "Лівий Берег", "Чорноморець Одеса")}>2.08</div>
              </div>
            </div>
            <div className="custom-table-frame-935">
              <div className="custom-table-frame-911">
                <div className="custom-table-_1-67" onClick={() => handleClick(2.17, "Лівий Берег", "Чорноморець Одеса")}>2.17</div>
              </div>
              <div className="custom-table-frame-912">
                <div className="custom-table-_1-672" onClick={() => handleClick(3.0, "Лівий Берег", "Чорноморець Одеса")}>3.0</div>
              </div>
              <div className="custom-table-frame-913">
                <div className="custom-table-_1-67" onClick={() => handleClick(1.76, "Лівий Берег", "Чорноморець Одеса")}>1.76</div>
              </div>
            </div>
            <div className="custom-table-frame-936">
              <div className="custom-table-_1-67">+158</div>
            </div>
          </div>
        </div>

        {/* Seventh Row - Колос Ковалівка vs Верес */}
        <div className="custom-table-frame-939">
          <div className="custom-table-frame-930">
            <img className="custom-table-star-1" src="/Homeimg/star1.svg" />
            <div className="custom-table-frame-929">
              <div className="custom-table-_09-08">11.08</div>
              <div className="custom-table-_22-00">22:00</div>
            </div>
            <div className="custom-table-frame-928">
              <div className="custom-table-div3">Колос Ковалівка</div>
              <div className="custom-table-div3">Верес</div>
            </div>
          </div>
          <div className="custom-table-frame-926">
            <div className="custom-table-frame-914">
              <div className="custom-table-frame-911">
                <div className="custom-table-_1-67" onClick={() => handleClick(2.53, "Колос Ковалівка", "Верес")}>2.53</div>
              </div>
              <div className="custom-table-frame-912">
                <div className="custom-table-_1-67" onClick={() => handleClick(3.45, "Колос Ковалівка", "Верес")}>3.45</div>
              </div>
              <div className="custom-table-frame-913">
                <div className="custom-table-_1-67" onClick={() => handleClick(2.90, "Колос Ковалівка", "Верес")}>2.90</div>
              </div>
            </div>
            <div className="custom-table-frame-934">
              <div className="custom-table-frame-911">
                <div className="custom-table-_1-67" onClick={() => handleClick(1.82, "Колос Ковалівка", "Верес")}>1.82</div>
              </div>
              <div className="custom-table-frame-912">
                <div className="custom-table-_1-672" onClick={() => handleClick(0.0, "Колос Ковалівка", "Верес")}>0.0</div>
              </div>
              <div className="custom-table-frame-913">
                <div className="custom-table-_1-67" onClick={() => handleClick(2.09, "Колос Ковалівка", "Верес")}>2.09</div>
              </div>
            </div>
            <div className="custom-table-frame-935">
              <div className="custom-table-frame-911">
                <div className="custom-table-_1-67" onClick={() => handleClick(2.00, "Колос Ковалівка", "Верес")}>2.00</div>
              </div>
              <div className="custom-table-frame-912">
                <div className="custom-table-_1-672" onClick={() => handleClick(2.5, "Колос Ковалівка", "Верес")}>2.5</div>
              </div>
              <div className="custom-table-frame-913">
                <div className="custom-table-_1-67" onClick={() => handleClick(1.89, "Колос Ковалівка", "Верес")}>1.89</div>
              </div>
            </div>
            <div className="custom-table-frame-936">
              <div className="custom-table-_1-67">+163</div>
            </div>
          </div>
        </div>

        {/* Eighth Row - Гості Голи */}
        <div className="custom-table-frame-939">
          <div className="custom-table-frame-930">
            <img className="custom-table-star-1" src="/Homeimg/star1.svg" />
            <div className="custom-table-frame-929">
              <div className="custom-table-_09-08">11.08</div>
              <div className="custom-table-_22-00">22:00</div>
            </div>
            <div className="custom-table-frame-928">
              <div className="custom-table-div3">Господарі Голи</div>
              <div className="custom-table-div3">Гості Голи</div>
            </div>
          </div>
          <div className="custom-table-frame-926">
            <div className="custom-table-frame-914">
              <div className="custom-table-frame-911">
                <div className="custom-table-_1-67" onClick={() => handleClick(2.08, "Господарі Голи", "Гості Голи")}>2.08</div>
              </div>
              <div className="custom-table-frame-912">
                <div className="custom-table-_1-67" onClick={() => handleClick(3.30, "Господарі Голи", "Гості Голи")}>3.30</div>
              </div>
              <div className="custom-table-frame-913">
                <div className="custom-table-_1-67" onClick={() => handleClick(4.05, "Господарі Голи", "Гості Голи")}>4.05</div>
              </div>
            </div>
            <div className="custom-table-frame-934">
              <div className="custom-table-frame-911">
                <div className="custom-table-_1-67" onClick={() => handleClick(2.06, "Господарі Голи", "Гості Голи")}>2.06</div>
              </div>
              <div className="custom-table-frame-912">
                <div className="custom-table-_1-672" onClick={() => handleClick(-0.5, "Господарі Голи", "Гості Голи")}>-0.5</div>
              </div>
              <div className="custom-table-frame-913">
                <div className="custom-table-_1-67" onClick={() => handleClick(1.84, "Господарі Голи", "Гості Голи")}>1.84</div>
              </div>
            </div>
            <div className="custom-table-frame-935">
              <div className="custom-table-frame-911">
                <div className="custom-table-_1-67" onClick={() => handleClick(1.85, "Господарі Голи", "Гості Голи")}>1.85</div>
              </div>
              <div className="custom-table-frame-912">
                <div className="custom-table-_1-672" onClick={() => handleClick(3.0, "Господарі Голи", "Гості Голи")}>3.0</div>
              </div>
              <div className="custom-table-frame-913">
                <div className="custom-table-_1-67" onClick={() => handleClick(2.05, "Господарі Голи", "Гості Голи")}>2.05</div>
              </div>
            </div>
            <div className="custom-table-frame-936">
              <div className="custom-table-_1-67">+157</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table3;
