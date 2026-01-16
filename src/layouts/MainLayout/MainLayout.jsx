import clsx from 'clsx'
import React from 'react'
import MainNav from '../../components/MainNav/MainNav'
import { Outlet } from 'react-router'
import styles from './MainLayout.module.css'

const MainLayout = () => {
  return (
    <div className={clsx(styles.container)}>
      <MainNav />
      <main className={styles.main}>
        <Outlet/>
      </main>
    </div>
  )
}

export default MainLayout