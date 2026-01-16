import clsx from "clsx";
import styles from "./MainNav.module.css";
import { NavLink } from "react-router";

const MainNav = () => {
  const buildLinkClass = ({ isActive }) =>
    clsx(styles.link, isActive && styles.active);
  return (
    <header>
      <nav>
        <ul className={styles.navList}>
          <li>
            <NavLink className={buildLinkClass} to="/"> Головна</NavLink>
          </li>
          <li>
            <NavLink className={buildLinkClass} to="/shop">Магазин</NavLink>
          </li>
          <li>
            <NavLink className={buildLinkClass} to="/payment">Правила оплати </NavLink>
          </li>
          <li>
            <NavLink className={buildLinkClass} to="/contacts">Контакти</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
