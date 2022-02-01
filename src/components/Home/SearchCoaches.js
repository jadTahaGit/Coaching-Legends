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
        <input type="search" />
        <select name="prices" id="prices">
          <option value="1to40">$1 - $40</option>
          <option value="1to40">$1 - $40</option>
          <option value="1to40">$1 - $40</option>
        </select>
        <select name="countries" id="countries">
          <option value="America">America</option>
          <option value="Argentina">Argentina</option>
          <option value="Germany">Germany</option>
          <option value="Lebanon">Lebanon</option>
          <option value="Portogal">Portogal</option>
          <option value="Spain">Spain</option>
        </select>
        <select name="time" id="time">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">4</option>
          <option value="4">4</option>
        </select>
      </div>
    </div>
  );
};
export default SearchCoaches;
