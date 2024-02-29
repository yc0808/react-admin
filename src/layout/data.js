import { AppstoreOutlined, SettingOutlined, HomeOutlined } from '@ant-design/icons';

const getItem = (label, key, icon, children, type) => {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Dashboard', '', <HomeOutlined />),
  getItem('Mobx', 'mobx', <HomeOutlined />),
  getItem('Table', 'table', null, [
    getItem('table1', 'table1'),
    getItem('table2', 'table2')
  ]),
  getItem('Page', 'page', <AppstoreOutlined />, [
    getItem('page1', 'page1'),
    getItem('page2', 'page2'),
    getItem('Submenu', 'submenu', null, [
      getItem('smenu1', 'smenu1'),
      getItem('smenu2', 'smenu2')
    ])
  ]),
  getItem('Chart', 'chart', <SettingOutlined />, [
    getItem('Bar Chart', 'bar'),
    getItem('Pie Chart', 'pie'),
    getItem('Line Chart', 'line')
  ])
];

export default items