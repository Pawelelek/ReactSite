import { FunctionComponent, useState } from "react";
import './Menu1.css'

const Menu1 = ({onCountryFootballSelect, onSportSelect}: any) => {
  const [expandedSport, setExpandedSport] = useState<string>('football');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const handleSportClick = (sport: string) => {
    setExpandedSport(prev => (prev === sport ? '' : sport));
    onSportSelect(sport);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase());
    console.log(searchQuery);
  };

  const filterSportsAndCountries = (sport: string, countries: Array<{ name: string }>) => {
    const queryParts = searchQuery.toLowerCase().split(' ').filter(Boolean);

    if (queryParts.length >= 2) {
      const [sportPart, countryPart] = queryParts;
      return sport.includes(sportPart) && countries.some(country => country.name.toLowerCase().includes(countryPart));
    }

    if (queryParts.length === 1) {
      const query = queryParts[0];
      return sport.includes(query) || countries.some(country => country.name.toLowerCase().includes(query));
    }

    return searchQuery === '';
  };

  const isSportExpanded = (sport: string) => expandedSport === sport;
  return (
    <div className="custom-bets-ukrain-futbol">
  <div className="custom-bets-frame-532">
    <div className="custom-bets-frame-511">
      <div className="custom-bets-frame-510">
        <div className="custom-bets-search">
          <img className="custom-bets-group" src="/Betsimg/search.png" />
        </div>
        {/* <div className="custom-bets-div">Пошук...</div> */}
        <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              className="custom-bets-div"
              placeholder="Пошук..."
            />
      </div>
    </div>
    <div className="custom-bets-frame-516">
      <div className="custom-bets-div2">СПОРТ</div>
      <div className="custom-bets-frame-515">
      {filterSportsAndCountries('футбол', [{ name: 'Україна' }, { name: 'Європа' }, { name: 'Америка' }]) && (
        <div className="custom-bets-sportt">
          <div className="custom-bets-sport2" onClick={() => handleSportClick('football')}>
            <div className="custom-bets-frame-5122">
              <img className="custom-bets-football" src="/Betsimg/ballsport.png" />
              <div className="custom-bets-div3">Футбол</div>
            </div>
            <img className={`custom-bets-vector ${isSportExpanded('football') ? 'rotated' : ''}`} src="/Profileimg/downArrow.png" />
          </div>
          {isSportExpanded('football') && (
          <div className="custom-bets-frame-523">
            <div className="custom-bets-frame-522">
            {filterSportsAndCountries('футбол', [{ name: 'україна' }]) && (
              <div className="custom-bets-frame-525" onClick={() => onCountryFootballSelect('Україна')}>
                <div className="custom-bets-frame-518">
                  <img className="custom-bets-rectangle-51" src="/Betsimg/ukraine.png" />
                  <div className="custom-bets-div4">Україна</div>
                </div>
                <div className="custom-bets-frame-519">
                  <div className="custom-bets-_00">4</div>
                </div>
              </div>
              )}
              {filterSportsAndCountries('футбол', [{ name: 'європа' }]) && (
              <div className="custom-bets-frame-544" onClick={() => onCountryFootballSelect('Європа')}>
                <div className="custom-bets-frame-518">
                  <img className="custom-bets-rectangle-51" src="/Betsimg/europe2.png" />
                  <div className="custom-bets-div4">Європа</div>
                </div>
                <div className="custom-bets-frame-519">
                  <div className="custom-bets-_00">8</div>
                </div>
              </div>
              )}
              {filterSportsAndCountries('футбол', [{ name: 'америка' }]) && (
              <div className="custom-bets-frame-539" onClick={() => onCountryFootballSelect('Америка')}>
                <div className="custom-bets-frame-518">
                  <img className="custom-bets-rectangle-51" src="/Betsimg/america.png" />
                  <div className="custom-bets-div4">Америка</div>
                </div>
                <div className="custom-bets-frame-519">
                  <div className="custom-bets-_00">2</div>
                </div>
              </div>
              )}
            </div>
          </div>
          )}
        </div>
        )}
        {/* {filterSportsAndCountries('теніс', [{ name: 'Україна' }, { name: 'Європа' }, { name: 'Америка' }]) && (
        <div className="custom-bets-sportt">
        <div className="custom-bets-sport3" onClick={() => handleSportClick('tennis')}>
          <div className="custom-bets-frame-5122">
            <img className="custom-bets-tennis" src="/Betsimg/tennisball.png" />
            <div className="custom-bets-div3">Теніс</div>
          </div>
          <img className={`custom-bets-vector ${isSportExpanded('tennis') ? 'rotated' : ''}`} src="/Profileimg/downArrow.png" />
        </div>
        {isSportExpanded('tennis') && (
          <div className="custom-bets-frame-523">
            <div className="custom-bets-frame-522">
            {filterSportsAndCountries('теніс', [{ name: 'україна' }]) && (
              <div className="custom-bets-frame-525">
                <div className="custom-bets-frame-518">
                  <img className="custom-bets-rectangle-51" src="/Betsimg/ukraine.png" />
                  <div className="custom-bets-div4">Україна</div>
                </div>
                <div className="custom-bets-frame-519">
                  <div className="custom-bets-_00">4</div>
                </div>
              </div>
              )}
              {filterSportsAndCountries('теніс', [{ name: 'європа' }]) && (
              <div className="custom-bets-frame-544">
                <div className="custom-bets-frame-518">
                  <img className="custom-bets-rectangle-51" src="/Betsimg/europe2.png" />
                  <div className="custom-bets-div4">Європа</div>
                </div>
                <div className="custom-bets-frame-519">
                  <div className="custom-bets-_00">8</div>
                </div>
              </div>
              )}
              {filterSportsAndCountries('теніс', [{ name: 'америка' }]) && (
              <div className="custom-bets-frame-539">
                <div className="custom-bets-frame-518">
                  <img className="custom-bets-rectangle-51" src="/Betsimg/america.png" />
                  <div className="custom-bets-div4">Америка</div>
                </div>
                <div className="custom-bets-frame-519">
                  <div className="custom-bets-_00">2</div>
                </div>
              </div>
              )}
            </div>
          </div>
          )}
          </div>
          )} */}
          {filterSportsAndCountries('баскетбол', [{ name: 'Україна' }, { name: 'Європа' }, { name: 'Америка' }]) && (
        <div className="custom-bets-sportt">  
        <div className="custom-bets-sport3" onClick={() => handleSportClick('basketball')}>
          <div className="custom-bets-frame-5122">
            <img className="custom-bets-basketball" src="/Betsimg/basketball.png" />
            <div className="custom-bets-div3">Баскетбол</div>
          </div>
          <img className={`custom-bets-vector ${isSportExpanded('basketball') ? 'rotated' : ''}`} src="/Profileimg/downArrow.png" />
        </div>
        {isSportExpanded('basketball') && (
          <div className="custom-bets-frame-523">
            <div className="custom-bets-frame-522">
            {filterSportsAndCountries('баскетбол', [{ name: 'україна' }]) && (
              <div className="custom-bets-frame-525">
                <div className="custom-bets-frame-518">
                  <img className="custom-bets-rectangle-51" src="/Betsimg/ukraine.png" />
                  <div className="custom-bets-div4">Україна</div>
                </div>
                <div className="custom-bets-frame-519">
                  <div className="custom-bets-_00">4</div>
                </div>
              </div>
              )}
              {filterSportsAndCountries('баскетбол', [{ name: 'європа' }]) && (
              <div className="custom-bets-frame-544">
                <div className="custom-bets-frame-518">
                  <img className="custom-bets-rectangle-51" src="/Betsimg/europe2.png" />
                  <div className="custom-bets-div4">Європа</div>
                </div>
                <div className="custom-bets-frame-519">
                  <div className="custom-bets-_00">8</div>
                </div>
              </div>
              )}
              {filterSportsAndCountries('баскетбол', [{ name: 'америка' }]) && (
              <div className="custom-bets-frame-539">
                <div className="custom-bets-frame-518">
                  <img className="custom-bets-rectangle-51" src="/Betsimg/america.png" />
                  <div className="custom-bets-div4">Америка</div>
                </div>
                <div className="custom-bets-frame-519">
                  <div className="custom-bets-_00">2</div>
                </div>
              </div>
              )}
            </div>
          </div>
          )}
        </div>  
        )}
        {filterSportsAndCountries('волейбол', [{ name: 'Україна' }, { name: 'Європа' }, { name: 'Америка' }]) && (
        <div className="custom-bets-sportt">
        <div className="custom-bets-sport3" onClick={() => handleSportClick('volleyball')}>
          <div className="custom-bets-frame-5122">
            <img className="custom-bets-volleyball" src="/Betsimg/volleyball.png" />
            <div className="custom-bets-div3">Волейбол</div>
          </div>
          <img className={`custom-bets-vector ${isSportExpanded('volleyball') ? 'rotated' : ''}`} src="/Profileimg/downArrow.png" />
        </div>
        {isSportExpanded('volleyball') && (
          <div className="custom-bets-frame-523">
            <div className="custom-bets-frame-522">
            {filterSportsAndCountries('волейбол', [{ name: 'україна' }]) && (
              <div className="custom-bets-frame-525">
                <div className="custom-bets-frame-518">
                  <img className="custom-bets-rectangle-51" src="/Betsimg/ukraine.png" />
                  <div className="custom-bets-div4">Україна</div>
                </div>
                <div className="custom-bets-frame-519">
                  <div className="custom-bets-_00">4</div>
                </div>
              </div>
              )}
              {filterSportsAndCountries('волейбол', [{ name: 'європа' }]) && (
              <div className="custom-bets-frame-544">
                <div className="custom-bets-frame-518">
                  <img className="custom-bets-rectangle-51" src="/Betsimg/europe2.png" />
                  <div className="custom-bets-div4">Європа</div>
                </div>
                <div className="custom-bets-frame-519">
                  <div className="custom-bets-_00">8</div>
                </div>
              </div>
              )}
              {filterSportsAndCountries('волейбол', [{ name: 'америка' }]) && (
              <div className="custom-bets-frame-539">
                <div className="custom-bets-frame-518">
                  <img className="custom-bets-rectangle-51" src="/Betsimg/america.png" />
                  <div className="custom-bets-div4">Америка</div>
                </div>
                <div className="custom-bets-frame-519">
                  <div className="custom-bets-_00">2</div>
                </div>
              </div>
              )}
            </div>
          </div>
          )}
        </div>  
        )}
         {/* {filterSportsAndCountries('хокей', [{ name: 'Україна' }, { name: 'Європа' }, { name: 'Америка' }]) && (
        <div className="custom-bets-sportt">
        <div className="custom-bets-sport3" onClick={() => handleSportClick('hockey')}>
          <div className="custom-bets-frame-5122">
            <img className="custom-bets-hockey" src="/Betsimg/hockey.png" />
            <div className="custom-bets-div3">Хокей</div>
          </div>
          <img className={`custom-bets-vector ${isSportExpanded('hockey') ? 'rotated' : ''}`} src="/Profileimg/downArrow.png" />
        </div>
        {isSportExpanded('hockey') && (
          <div className="custom-bets-frame-523">
            <div className="custom-bets-frame-522">
            {filterSportsAndCountries('хокей', [{ name: 'україна' }]) && (
              <div className="custom-bets-frame-525">
                <div className="custom-bets-frame-518">
                  <img className="custom-bets-rectangle-51" src="/Betsimg/ukraine.png" />
                  <div className="custom-bets-div4">Україна</div>
                </div>
                <div className="custom-bets-frame-519">
                  <div className="custom-bets-_00">4</div>
                </div>
              </div>
              )}
              {filterSportsAndCountries('хокей', [{ name: 'європа' }]) && (
              <div className="custom-bets-frame-544">
                <div className="custom-bets-frame-518">
                  <img className="custom-bets-rectangle-51" src="/Betsimg/europe2.png" />
                  <div className="custom-bets-div4">Європа</div>
                </div>
                <div className="custom-bets-frame-519">
                  <div className="custom-bets-_00">8</div>
                </div>
              </div>
              )}
              {filterSportsAndCountries('хокей', [{ name: 'америка' }]) && (
              <div className="custom-bets-frame-539">
                <div className="custom-bets-frame-518">
                  <img className="custom-bets-rectangle-51" src="/Betsimg/america.png" />
                  <div className="custom-bets-div4">Америка</div>
                </div>
                <div className="custom-bets-frame-519">
                  <div className="custom-bets-_00">2</div>
                </div>
              </div>
              )}
            </div>
          </div>
          )}
        </div>  
        )}
        {filterSportsAndCountries('бокс', [{ name: 'Україна' }, { name: 'Європа' }, { name: 'Америка' }]) && (
        <div className="custom-bets-sportt">
        <div className="custom-bets-sport3" onClick={() => handleSportClick('boxing')}>
          <div className="custom-bets-frame-5122">
            <img className="custom-bets-boxing" src="/Betsimg/box.png" />
            <div className="custom-bets-div3">Бокс</div>
          </div>
          <img className={`custom-bets-vector ${isSportExpanded('boxing') ? 'rotated' : ''}`} src="/Profileimg/downArrow.png" />
        </div>
        {isSportExpanded('boxing') && (
          <div className="custom-bets-frame-523">
            <div className="custom-bets-frame-522">
            {filterSportsAndCountries('бокс', [{ name: 'україна' }]) && (
              <div className="custom-bets-frame-525">
                <div className="custom-bets-frame-518">
                  <img className="custom-bets-rectangle-51" src="/Betsimg/ukraine.png" />
                  <div className="custom-bets-div4">Україна</div>
                </div>
                <div className="custom-bets-frame-519">
                  <div className="custom-bets-_00">4</div>
                </div>
              </div>
              )}
              {filterSportsAndCountries('бокс', [{ name: 'європа' }]) && (
              <div className="custom-bets-frame-544">
                <div className="custom-bets-frame-518">
                  <img className="custom-bets-rectangle-51" src="/Betsimg/europe2.png" />
                  <div className="custom-bets-div4">Європа</div>
                </div>
                <div className="custom-bets-frame-519">
                  <div className="custom-bets-_00">8</div>
                </div>
              </div>
              )}
              {filterSportsAndCountries('бокс', [{ name: 'америка' }]) && (
              <div className="custom-bets-frame-539">
                <div className="custom-bets-frame-518">
                  <img className="custom-bets-rectangle-51" src="/Betsimg/america.png" />
                  <div className="custom-bets-div4">Америка</div>
                </div>
                <div className="custom-bets-frame-519">
                  <div className="custom-bets-_00">2</div>
                </div>
              </div>
              )}
            </div>
          </div>
          )}
        </div>  
        )} */}
      </div>
    </div>
  </div>
</div>
  );
};

export default Menu1;