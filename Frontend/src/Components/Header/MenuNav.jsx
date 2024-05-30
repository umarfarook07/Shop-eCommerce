// MenuNav,jsx
import { Link } from "react-router-dom";
function MenuNav() {
  return (
    <div className="menu-nav">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/MensCollection">Men</Link></li>
        <li><Link to="/WomensCollection">Women</Link></li>
        <li><Link to="/BabyCollection">Baby Collection</Link></li>
        <li><Link to="/">Pages</Link></li>
        <li><Link to="/">Blog</Link></li>
        <li><Link to="/">Contact</Link></li>
      </ul>
    </div>
  );
}

export default MenuNav;
