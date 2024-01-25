import { Flex } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Topbar = () => {
  return (
    <Flex align="center" justify="space-between" style={{ padding: 16 }}>
      <div style={{ color: '#fff' }}>面包屑</div>
      <Flex>
        <UserOutlined style={{ color: '#fff' }} />
      </Flex>
    </Flex>
  );
};

export default Topbar;
