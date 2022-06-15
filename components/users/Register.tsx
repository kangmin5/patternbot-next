import React from 'react'
import styles from '@/styles/Register.module.css'
import Link from 'next/link'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function Register() {
    return (
        <div className={styles.container}>
            <h1>회원가입</h1>
            <div>
            <TextField
              margin="normal"
              required
              fullWidth
              id=""
              label="이름"
              name="name"
              autoComplete="name"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id=""
              label="아이디"
              name="username"
              autoComplete="username"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="비밀번호"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id=""
              label="이메일"
              name="email"
              autoComplete="email"
            />  
          </div>
        
            <div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 1 }}
            >
              회원가입
            </Button>
            </div>
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
