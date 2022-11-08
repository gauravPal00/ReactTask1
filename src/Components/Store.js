import {createStore} from 'redux'
import { rootReducers } from './Reducers/Reducer'

export const Store = createStore (rootReducers)