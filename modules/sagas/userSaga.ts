import { PayloadAction } from '@reduxjs/toolkit'
import { call, delay, put, takeLatest } from 'redux-saga/effects'
// yarn add @redux-saga/is --dev , yarn add @types/redux, yarn add redux-saga
import { userActions } from '@/modules/users/userSlice';
import { userJoinApi, userLoginApi,userUpdateApi, userDeleteApi, userFindAllApi,
     userFindAllSortApi, userFindAllPageableApi, userCountApi, userFindByIdApi } from '@/modules/apis/userApi'

interface UserJoinType{
    type: string;
    payload: {
        name:string,username:string, password:string, email:string, 
        
    }
}
interface UserJoinSuccessType{
    type: string;
    payload: {
        name:string, username:string, password:string, email:string, 
        
    }
}

interface UserLoginType{
    type: string;
    payload: {
        email:string, password:string
    }
}
interface UserLoginSuccessType{
    type: string;
    payload: {
        email:string, password:string,
        /* username:string, name:string, phone:string, birth:string, address:string */
    }
}
function* join(user: UserJoinType){
    try {
        console.log('3 saga내부 join 성공  ' + JSON.stringify(user))
        alert('3 saga내부 join 성공  '+ JSON.stringify(user))
        const response: UserJoinSuccessType = yield userJoinApi(user.payload)
        yield put(userActions.joinSuccess(response))
    }catch(error){
         console.log('3 saga내부 join 실패  ') 
         yield put(userActions.joinFailure(error))
    }
}
function* login(login: UserLoginType){
    try{
        alert(' 진행 3: saga내부 성공  '+ JSON.stringify(login))
        const response: UserLoginSuccessType = yield userLoginApi(login.payload)
        yield put(userActions.loginSuccess(response))
    }catch(error){
         alert('진행 3: saga내부 join 실패  ') 
         yield put(userActions.loginFailure(error))
    }
}

export function* watchJoin(){
    yield takeLatest(userActions.joinRequest, join)
}
export function* watchLogin(){
    yield takeLatest(userActions.loginRequest, login)
}