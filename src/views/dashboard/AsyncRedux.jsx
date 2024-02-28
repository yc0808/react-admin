import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchChannnelList } from '../../store/modules/channelStore';

function AsyncRedux() {
  const { channelList } = useSelector((state) => state.channel);
  const dispathch = useDispatch();
  useEffect(() => {
    dispathch(fetchChannnelList());
  }, [dispathch]);
  return (
    <div>
      <ul>
        {channelList.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default AsyncRedux;
