import clsx from 'clsx'
import React from 'react'
import MainNav from '../../components/MainNav/MainNav'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div className={clsx("container")}>
      <MainNav />
      <main>
        <Outlet/>
      </main>

    </div>
  )
}

export default MainLayout