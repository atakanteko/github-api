import { AnyAction, CombinedState, Reducer, combineReducers } from 'redux';

import { IStore } from './IStore';
import counterSlice from '../features/counter/counterSlice';
import { appService } from '../services/api';

const appReducer: Reducer<CombinedState<IStore>> = combineReducers({
  counter: counterSlice,
  [appService.reducerPath]: appService.reducer,
});

const rootReducer = (
  state: CombinedState<IStore> | undefined,
  action: AnyAction
) => {
  return appReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
