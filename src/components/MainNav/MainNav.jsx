import clsx from "clsx";
import styles from "./MainNav.module.css";
import { Link, NavLink, useMatch } from "react-router";

const MainNav = () => {
     const isShopPage = useMatch('/shop/*');
  const buildLinkClass = ({ isActive }) =>
    clsx(styles.link, isActive && styles.active);
  return (
    <header>
      <nav className={styles.nav}>
        <Link className={styles.logo} to="/">
        <span role="img" aria-label="computer icon">
          💻
        </span>{' '}
      </Link>
        <ul className={styles.navList}>
          <li>
            <NavLink className={buildLinkClass} to="/"> Головна</NavLink>
          </li>
          <li>
            <Link className={clsx(styles.link, isShopPage && styles.active)} to="/shop/televisions">Магазин</Link>
          </li>
          <li>
            <NavLink className={buildLinkClass} to="/payment">Правила оплати </NavLink>
          </li>
          <li>
            <NavLink className={buildLinkClass} to="/contacts"> Контакти</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
