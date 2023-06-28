import { Button } from 'antd';

import { decrement, increment } from '../../features/counter/counterSlice';
import { useAppSelector, useAppDispatch } from '../../hooks/use-store';
import { RootState } from '../../store/store';

function HomePage() {
  const count = useAppSelector((state: RootState) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <Button onClick={() => dispatch(increment())}>Inc</Button>
      <span>{count}</span>
      <Button onClick={() => dispatch(decrement())}>Dec</Button>
    </div>
  );
}

export default HomePage;
