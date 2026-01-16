import clsx from 'clsx';
import styles from './ShopNav.module.css';
import { NavLink } from 'react-router';

const ShopNav = () => {
    const buildLinkClass = ({ isActive }) =>
        clsx(styles.link, isActive && styles.active);
  return (
    <aside>
        <nav>
            <ul className={styles.navList}>
              <li>
                <NavLink className={buildLinkClass} to="televisions">Телевізори</NavLink>
              </li>
              <li>
                <NavLink className={buildLinkClass} to="notebooks">Ноутбуки</NavLink>
              </li>
              <li>
                <NavLink className={buildLinkClass} to="smartphones">Телефони</NavLink>
              </li>
              <li>
                <NavLink className={buildLinkClass} to="monitors">Монітори</NavLink>
              </li>
            </ul>
          </nav>
    </aside>
     
  )
}

export default ShopNav