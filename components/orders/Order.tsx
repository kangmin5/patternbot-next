import React from 'react'
import styles from '@/styles/Order.module.css'
import OrderTable from './OrderTable'

const Order = () => {
  return (
    <div className={styles.container}>
      <h1>자동매매</h1>
      <div>
        <p style={{fontSize:"0.5rem",textAlign:"end"}}>[단위: 원]</p>
        <OrderTable />
      </div>
      <div>
        <button className={styles.button1}>주문현황</button>
        <button className={styles.button1}>수익현황</button>
      </div>
      <div>
        <p style={{fontSize:"0.5rem",textAlign:"end"}}>[단위: 원]</p>
        <OrderTable/>
      </div>
    </div>
  )
}

export default Order