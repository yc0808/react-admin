import { Tabs } from 'antd';
import SyncRedux from './SyncRedux';
import AsyncRedux from './AsyncRedux';

function Dashboard() {
  const items = [
    {
      key: '1',
      label: '同步redux修改示例',
      children: <SyncRedux />,
    },
    {
      key: '2',
      label: '异步redux修改示例',
      children: <AsyncRedux />,
    },
  ];
  return (
    <div>
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
}

export default Dashboard;
