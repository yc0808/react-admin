import React, { useState, useEffect } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Menu, Flex } from 'antd';
import userSrc from '../assets/user.png';
import { useNavigate, useLocation } from 'react-router-dom';
import menuData from './data';

const Silderbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState(['']); //当前展开的SubMenu菜单项key 数组
  const [selectKeys, setSelectKeys] = useState(['']); //当前选中的菜单项 key 数组

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    const { pathname } = location;
    const pathArr = pathname.split('/');
    setOpenKeys(pathArr);
    setSelectKeys(pathArr.pop());
  }, [location]);

  const onOpenChange = (openKeys) => {
    // console.log(openKeys);
    setOpenKeys(openKeys);
  };

  const handleMenuOnClick = (e) => {
    // console.log(e);
    setSelectKeys(e.key);
    const path = e.keyPath.reverse();
    navigate(`/${path.join('/')}`);
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
      <Menu mode="inline" theme="dark" inlineCollapsed={collapsed} items={menuData} openKeys={openKeys} selectedKeys={selectKeys} onClick={handleMenuOnClick} onOpenChange={onOpenChange} />
    </div>
  );
};
export default Silderbar;
