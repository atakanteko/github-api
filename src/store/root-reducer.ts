import { AnyAction, CombinedState, Reducer, combineReducers } from 'redux';

import { IStore } from './IStore';
import counterSlice from '../features/counter/counterSlice';

const appReducer: Reducer<CombinedState<IStore>> = combineReducers({
  counter: counterSlice,
});

const rootReducer = (
  state: CombinedState<IStore> | undefined,
  action: AnyAction
) => {
  return appReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
