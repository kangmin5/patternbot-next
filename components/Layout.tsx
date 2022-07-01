import React, { PropsWithChildren } from 'react'
import styles from '@/styles/Layout.module.css'

const Layout = ({ children }:PropsWithChildren) => {
   
  return (
    <div className={styles.container}>
      <main>{children }</main>
    </div>
  )
}
export default Layout;