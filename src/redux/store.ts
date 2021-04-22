import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk';
import allCharactersReducer from './allCharactersReducer'
import aboutCharacterReducer from './aboutCharacterReducer'
import createSagaMiddleware from 'redux-saga'
import { rootWatcher } from './saga/index'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  allCharactersReducer,
  aboutCharacterReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

const storage = createStore(rootReducer, applyMiddleware(thunkMiddleware, sagaMiddleware))

sagaMiddleware.run(rootWatcher)

export default storage