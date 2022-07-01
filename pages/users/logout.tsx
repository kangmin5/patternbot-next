import Logout from '@/components/users/Logout'
import { NextPage } from 'next'
import React from 'react'

type PropsType = {}

const LogoutPage:NextPage = (props:PropsType) => {
  return (
      <div>
        <Logout/>
    </div>
  )
}

export default LogoutPage