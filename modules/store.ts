import { configureStore, ThunkAction, Action, AnyAction, combineReducers } from '@reduxjs/toolkit'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import logger from 'redux-logger'
import coinReducer from './coins'
import orderReducer from './orders'
import settingReducer from './settings'
import usersReducer, { UserState } from '../modules/users'
import faqsReducer from './faqs'
import rootSaga from '@/sagas';
import createSagaMiddleware from '@redux-saga/core'
const sagaMiddleware = createSagaMiddleware()
const isDev = process.env.NODE_ENV === 'development'

interface RootStates {
	user: UserState
}

const rootReducer = (
	state: RootStates,
    action: AnyAction
) => {
    if(action.type === HYDRATE) {
        return{
            ...state, ...action.payload
        }
    }
    return combineReducers({
        user: usersReducer
        
    })(state,action)
}

const makestore = () => {
    const store = configureStore({
        reducer: { rootReducer },
        middleware: getDefaultMiddleware =>
            isDev ? getDefaultMiddleware().concat(logger, sagaMiddleware) : getDefaultMiddleware(),
        devTools: isDev
    });
    sagaMiddleware.run(rootSaga)
    return store
}
export const wrapper = createWrapper(makestore, {
    debug: isDev
}) ;

const store = makestore();

export type RootState = ReturnType<typeof rootReducer>
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;