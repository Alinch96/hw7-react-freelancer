import ShopNav from '../../components/ShopNav/ShopNav'
import { Outlet } from 'react-router'
import styles from './ShopLayout.module.css'

const ShopLayout = () => {
  return (
    <div className={styles.shopLayout}>
      <aside className={styles.aside}>
        <ShopNav/>
      </aside>
      <div className={styles.content}>
        <Outlet/>
      </div>
    </div>
  )
}

export default ShopLayout