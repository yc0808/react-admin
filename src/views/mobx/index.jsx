import { observer } from 'mobx-react';
// import counter from '../../mobxStore/counter';
// import channel from '../../mobxStore/channel';
import useStore from '../../mobxStore';
function Subs() {
  const { counter, channel } = useStore();
  return (
    <div>
      <h3>使用mobx</h3>
      <div>counter模块内容</div>
      <div>{counter.count}</div>
      <div>getter:{counter.doubleCount}</div>
      <button onClick={counter.increment}>+1</button>
      <button onClick={() => counter.decrement()}>-1</button>
      <button onClick={counter.reset}>重置</button>
      <div>channel模块内容</div>
      <div>{channel.list}</div>
    </div>
  );
}

export default observer(Subs);
