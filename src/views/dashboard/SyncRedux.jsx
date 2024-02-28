import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, addToNum } from '../../store/modules/counterStore';
function SyncRedux() {
  const { count } = useSelector((state) => state.counter);
  const dispath = useDispatch();
  return (
    <div>
      <button onClick={() => dispath(decrement())}>-</button>
      {count}
      <button onClick={() => dispath(increment())}>+</button>
      <button onClick={() => dispath(addToNum(10))}>to 10</button>
      <button onClick={() => dispath(addToNum(20))}>to 20</button>
    </div>
  );
}

export default SyncRedux;
