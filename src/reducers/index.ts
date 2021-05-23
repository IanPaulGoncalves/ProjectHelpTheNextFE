import { combineReducers } from 'redux';
import accountReducer from './account/reducer';

const rootReducer = combineReducers({ account: accountReducer });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
