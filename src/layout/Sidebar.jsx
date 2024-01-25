import React, { useState } from 'react';
import { AppstoreOutlined, SettingOutlined, MenuFoldOutlined, MenuUnfoldOutlined, HomeOutlined } from '@ant-design/icons';
import { Button, Menu, Flex } from 'antd';
import userSrc from '../assets/user.png';
import { useNavigate } from 'react-router-dom';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [getItem('Dashboard', '/', <HomeOutlined />), getItem('Table', '/table', null, [getItem('table1', '/table1'), getItem('table2', '/table2')]), getItem('Page', '/page', <AppstoreOutlined />, [getItem('page1', '/page1'), getItem('page2', '/page2'), getItem('Submenu', '/submenu', null, [getItem('smenu1', '/smenu1'), getItem('smenu2', '/smenu2')])]), getItem('Chart', '/chart', <SettingOutlined />, [getItem('Bar Chart', '/bar'), getItem('Pie Chart', '/pie'), getItem('Line Chart', '/line')])];

const Silderbar = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleMenuOnClick = ({ item, key, keyPath, domEvent }) => {
    const path = keyPath.reverse();
    navigate(path.join(''));
  };
  return (
    <div
      style={{
        width: collapsed ? 80 : 256,
        paddingTop: 20,
      }}
    >
      {collapsed && (
        <Flex justify="center" align="center" style={{ paddingBottom: 15 }}>
          <Button type="primary" shape="circle" onClick={toggleCollapsed}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
        </Flex>
      )}
      {!collapsed && (
        <div>
          <Flex justify="space-between" align="center" style={{ padding: '5px 35px 5px 20px' }}>
            <div style={{ color: '#fff', fontSize: 25 }}>ADMINIS</div>
            <Button type="primary" shape="circle" onClick={toggleCollapsed}>
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
          </Flex>
          <Flex justify="center" align="center" style={{ margin: '20px 0 10px 0' }}>
            <img alt="profile-user" width="100px" height="100px" src={userSrc} style={{ cursor: 'pointer', borderRadius: '50%' }} />
          </Flex>
          <Flex justify="center" align="center">
            <div style={{ color: '#fff', fontSize: 26, fontWeight: 'bold' }}>yanyan</div>
          </Flex>
          <Flex justify="center" align="center" style={{ margin: '8px 0 35px 0' }}>
            <div style={{ color: '#4cceac', fontSize: 16, fontWeight: 400 }}>Strange Admin</div>
          </Flex>
        </div>
      )}
      <Menu mode="inline" theme="dark" inlineCollapsed={collapsed} items={items} onClick={handleMenuOnClick} />
    </div>
  );
};
export default Silderbar;
