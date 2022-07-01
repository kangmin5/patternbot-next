import React, {  useState } from 'react'
import styles from '@/styles/Join.module.css'
import Link from 'next/link'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {  User, userActions } from '@/modules/users/userSlice'
import { useDispatch } from 'react-redux';

const Join = () => {
  const dispatch = useDispatch();
  
  const [user, setUser] = useState<User>({
    username: '', password: '', email: '', name: ''
  })
  const onChange = (e: { preventDefault: () => void; target: { name: string;  value:string}}) => {
    e.preventDefault();
    const { name, value } = e.target
    setUser({...user,[name]:value})
  }
  
    return (
        <div className={styles.container}>
            <h1>회원가입</h1>
          <form onSubmit={e => {
            e.preventDefault();
            alert(`1. 진행확인: 회원가입클릭 ${JSON.stringify(user)}`)
            dispatch(userActions.joinRequest(user));
            setUser({username: '', password: '', email: '', name: ''})
          }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="이름"
                  name="name"
                  autoComplete="name"
                  onChange={onChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="아이디"
                  name="username"
                  autoComplete="username"
                  onChange={onChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="비밀번호"
                  type="password"
                  autoComplete="current-password"
                  onChange={onChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id=""
                  label="이메일"
                  name="email"
                  autoComplete="email"
                  onChange={onChange}
                />  
                
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 1 }}
                  >
                    회원가입
                  </Button>
              </form>
        
            <div>
            <Link href='/users/login' >
                <h5 style={{ marginTop: "0.5rem",textAlign:"end",color:"#5e5ee6",cursor:"pointer" }}>
						로그인
            </h5>
            </Link>            
            </div>
            <div>
                <h5>계속 진행하면 PatternBOT 서비스 약관 및 개인정보 보호정책에 동의한 것으로 간주됩니다.</h5>
            </div>

        
    </div>
    )
}
export default Join