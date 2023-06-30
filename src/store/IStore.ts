import { appService } from '../services/api';
import { ICounterState } from '../types';

type ApiSlice = ReturnType<typeof appService.reducer>;

export interface IStore {
  counter: ICounterState;
  api: ApiSlice;
}
