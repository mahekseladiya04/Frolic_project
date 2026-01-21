// assets
import { ChromeOutlined, QuestionOutlined } from '@ant-design/icons';

// icons
const icons = {
  ChromeOutlined,
  QuestionOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
  id: 'support',
  title: 'Support',
  type: 'group',
  children: [
    // {
    //   id: 'sample-page',
    //   title: 'Sample Page',
    //   type: 'item',
    //   url: '/sample-page',
    //   icon: icons.ChromeOutlined
    // },
    // {
    //   id: 'documentation',
    //   title: 'Documentation',
    //   type: 'item',
    //   url: 'https://codedthemes.gitbook.io/mantis/',
    //   icon: icons.QuestionOutlined,
    //   external: true,
    //   target: true
    // },
    {
      id: 'InstituteListPage',
      title: 'InstituteListPage',
      type: 'item',
      url: '/InstituteListPage',
      icon: icons.QuestionOutlined
    },
     {
      id: 'DepartmentListPage',
      title: 'DepartmentListPage',
      type: 'item',
      url: '/DepartmentListPage',
      icon: icons.QuestionOutlined
    },
     {
      id: 'EventsListPage',
      title: 'EventsListPage',
      type: 'item',
      url: '/EventsListPage',
      icon: icons.QuestionOutlined
    }
  ]
};

export default support;
