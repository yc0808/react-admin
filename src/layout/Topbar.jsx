import { Flex } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Topbar = () => {
  const [items, setItems] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const { pathname } = location;
    const pathArr = pathname.split('/');
    pathArr.shift();
    const nextPathArr = pathArr.map((item) => {
      return {
        title: item || '/',
      };
    });
    setItems(nextPathArr);
  }, [location]);

  return (
    <Flex align="center" justify="space-between" className="topbar" style={{ padding: 16 }}>
      <Breadcrumb items={items} />
      <Flex>
        <UserOutlined style={{ color: '#000' }} />
      </Flex>
    </Flex>
  );
};

export default Topbar;
