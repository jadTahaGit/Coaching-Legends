import "./SearchCoaches.scss";
const SearchCoaches = () => {
  return (
    <div className="SearchCoaches">
      <h1>Online Coaches</h1>
      <p>
        Looking for an online life coach?Our service is the leading coaching
        platform worldwide. You can choose from 13150 coachs
      </p>
      <div className="filter__box">
        <div className="search__filter">
          <label htmlFor="search">I WANT A COACH TO IMPROVE</label>
          <input type="search" />
        </div>
        <div className="price__filter">
          <label htmlFor="prices">PRICE PER HOUR</label>
          <select name="prices" id="prices">
            <option value="1to40">$1 - $40</option>
            <option value="1to40">$1 - $40</option>
            <option value="1to40">$1 - $40</option>
          </select>
        </div>
        <div className="countries__filter">
          <label htmlFor="countries">COACH IS FROM</label>
          <select name="countries" id="countries">
            <option value="America">America</option>
            <option value="Argentina">Argentina</option>
            <option value="Germany">Germany</option>
            <option value="Lebanon">Lebanon</option>
            <option value="Portogal">Portogal</option>
            <option value="Spain">Spain</option>
          </select>
        </div>
        <div className="time__filter">
          <label htmlFor="time">I'M AVAILABLE</label>
          <select name="time" id="time">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">4</option>
            <option value="4">4</option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default SearchCoaches;
