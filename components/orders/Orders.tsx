import React from 'react'
import styles from '@/styles/Orders.module.css'
import OrdersTable from './OrdersTable'

const Orders = () => {
  return (
    <div className={styles.container}>
      <h1>자동매매</h1>
      <div>
        <p style={{fontSize:"0.5rem",textAlign:"end"}}>[단위: 원]</p>
        <OrdersTable />
      </div>
      <div>
        <button className={styles.button1}>주문현황</button>
        <button className={styles.button1}>수익현황</button>
      </div>
      <div>
        <p style={{fontSize:"0.5rem",textAlign:"end"}}>[단위: 원]</p>
        <OrdersTable/>
      </div>
    </div>
  )
}

export default Orders