import React from 'react'
import Link from 'next/link';
import styles from '@/styles/Nav.module.css'
import Image from 'next/image';

export default function Nav() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
          <div className={styles.logo} >
          <Link href='/'>
            <Image src="/images/patternbot.png" width={120} height={40} alt="LOGO"/></Link>
          </div>
          <div className={styles.mainMenu}>
              <Link href='/coins/'>거래소</Link>
              <Link href='/orders/order'>투자현황</Link>
              <Link href='/settings/'>설정</Link>
              <Link href='/menu/about'>About</Link>
              <Link href='/menu/contact'>Contact</Link>
              <Link href='/faqs/'>FAQ</Link>

          </div>
        <div className={styles.loginMenu}>
          <div >
            <Link href='/users/login'>
              <a className={styles.login}>로그인</a></Link>
          </div>
          <div >
            <Link href='/users/join' className={styles.register}>
            <a className={styles.register}>회원가입</a></Link>
          </div>
        </div>
      </div>
    </div>
  )
}


