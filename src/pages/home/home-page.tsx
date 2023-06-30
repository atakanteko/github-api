import { Button } from 'antd';

import { decrement, increment } from '../../features/counter/counterSlice';
import { useAppSelector, useAppDispatch } from '../../hooks/use-store';
// import { useGetGithubUserInfoQuery } from '../../services/user-api';
import { RootState } from '../../store/store';

function HomePage() {
  const count = useAppSelector((state: RootState) => state.counter.value);
  const dispatch = useAppDispatch();
  // const { data, isLoading, error } = useGetGithubUserInfoQuery();

  // console.log('debug-issue', data, isLoading, error);

  return (
    <div>
      <Button onClick={() => dispatch(increment())}>Inc</Button>
      <span>{count}</span>
      <Button onClick={() => dispatch(decrement())}>Dec</Button>
    </div>
  );
}

export default HomePage;
