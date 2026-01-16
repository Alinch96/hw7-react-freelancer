
import ShopNav from '../../components/ShopNav/ShopNav'
import { Outlet } from 'react-router'

const ShopLayout = () => {
  return (
    <div className=''>
    <ShopNav/>
    <Outlet/>
    </div>
  )
}

export default ShopLayout