import searchStyles from "../styles/Search.module.css";
import { FiSearch } from "react-icons/fi";

const Search = ({ loc, onChange, onClick, onKeyPress }) => {
  const key = () => {
    console.log("oi");
    return onClick;
  };
  return (
    <div className={searchStyles.container}>
      <input
        type="text"
        placeholder="Search"
        name="loc"
        className={searchStyles.search}
        value={loc}
        onChange={(e) => onChange(e)}
        onKeyPress={(e) => (e.which == 13 ? key : stop)}
      />
      <button className={searchStyles.submit} onClick={onClick}>
        <div className={searchStyles.lupa}>
          <FiSearch />
        </div>
      </button>
    </div>
  );
};

export default Search;
