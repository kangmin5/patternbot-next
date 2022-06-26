import { createSlice } from "@reduxjs/toolkit";

export interface User{
    username:string , password:string, email:string, name:string
}
export interface UserState {
    data: User[],
    status: 'idle' | 'loading' | 'succeeded' |'failed'
}
const initialState: UserState = {
    data: [],
    status: 'idle'
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        joinRequest(state: UserState, _payload) {
            alert(`진행 2 : 회원가입 데이터 ${state.data}`)
            state.status = 'loading';
            
        },
        joinSuccess(state: UserState, {payload}){
            state.status = 'idle'
            state.data = [...state.data, payload]
        },
        joinFailure(state: UserState, {payload}){
            state.status = 'failed'
            state.data = payload
        },
        loginRequest(state: UserState, _payload){
            state.status = 'loading';
            
        },
        loginSuccess(state: UserState, {payload}){
            state.status = 'idle'
            state.data = [...state.data, payload]
            alert(`진행 2 : 회원가입 데이터 ${state.data}`)
        },
        loginFailure(state: UserState, {payload}){
            state.status = 'failed'
            state.data = payload
        }
    }
})
export const { joinRequest, joinSuccess, joinFailure,
    loginRequest, loginSuccess, loginFailure} = userSlice.actions;

const {reducer, actions} = userSlice
export const userActions = actions
export default reducer;