import "./Header.css";
import logo from "../../Assets/Img/logo.svg";
import List from "./List/List";

function Header() {
  return (
    <div className="header">
      <div className="header_div">
        <img src={logo} alt="sda" width="160" height="41" />

        <ul className="header_list">
          <List />
        </ul>
      </div>
    </div>
  );
}

export default Header;
