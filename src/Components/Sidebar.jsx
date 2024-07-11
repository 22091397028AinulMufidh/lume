import React from 'react';
import { AppstoreOutlined, BookOutlined, MailOutlined, ProfileFilled, ProfileOutlined, SettingOutlined, UserAddOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { BookOpenIcon, UserCircleIcon, UserIcon } from '@heroicons/react/24/outline';
const items = [
  {
    key: 'sub1',
    label: 'Courses',
    icon: <BookOutlined />,
    children: [
      {
        key: 'g1',
        label: 'Categories',
        type: 'group',
        children: [
          {
            key: '1',
            label: 'All Courses',
          },
          {
            key: '2',
            label: 'My Courses',
          },
        ],
      },
      {
        key: 'g2',
        label: 'Assignments',
        type: 'group',
        children: [
          {
            key: '3',
            label: 'Exams',
          },
          {
            key: '4',
            label: 'Grades',
          },
        ],
      },
    ],
  },
  {
    type: 'divider',
  },
  {
    key: 'sub2',
    label: 'Profil',
    icon: <UserOutlined />,
    children: [
      {
        key: '5',
        label: 'Profile Settings',
      },
      {
        key: '6',
        label: 'Account Settings',
      },     
    ],
  },
  {
    key: 'sub4',
    label: 'Setting',
    icon: <SettingOutlined />,
    children: [
      {
        key: '9',
        label: 'General',
      },
      {
        key: '10',
        label: 'Security',
      },
      {
        key: '11',
        label: 'Privacy',
      },
    ],
  },
  
];
const App = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};
export default App;