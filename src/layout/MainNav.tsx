import { Divider, Menu, Typography } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { AppstoreOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

function MainNav() {
  const { Title } = Typography;
  const navigate = useNavigate();

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group'
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }

  const items: MenuProps['items'] = [
    getItem('Channels', 'channel', <AppstoreOutlined />, [
      getItem('Option 1', '1'),
      getItem('Option 2', '2'),
      getItem('Option 3', '3'),
    ]),
    { type: 'divider' },
    getItem('Direct Messages', 'dm', <AppstoreOutlined />, [
      getItem('Option 1', '2-1'),
      getItem('Option 2', '2-2'),
      getItem('Option 3', '2-3'),
    ]),
  ];

  const menuClick = (e: any) => {
    const path = e.keyPath[1];
    if (path === 'channel') {
      navigate(`/workspace/${'test'}/channel/${e.key}`);
    } else if (path === 'dm') {
      navigate(`/workspace/${'test'}/dm/${e.key}`);
    }
  };

  return (
    <Sider
      width={300}
      style={{
        background: 'var(--color-purple)',
      }}
    >
      <div
        style={{
          padding: '18px 0px 0px 18px',
        }}
      >
        <Title
          level={3}
          style={{
            color: 'white',
          }}
        >
          Woojung
        </Title>
      </div>
      <Divider style={{ backgroundColor: 'var(--color-gray-light)' }} />
      <Menu
        defaultOpenKeys={['sub1', 'sub2']}
        mode='inline'
        items={items}
        onClick={menuClick}
        style={{
          background: 'transparent',
          color: 'var(--color-gray-light)',
          fontSize: '15px',
        }}
      />
    </Sider>
  );
}

export default MainNav;
