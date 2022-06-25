import React from 'react'
import styles from '@/styles/Layout.module.css'

const Layout = ({ children }:any) => {
   
  return (
    <div className={styles.container}>
      <main>{children }</main>
    </div>
  )
}
export default Layout;