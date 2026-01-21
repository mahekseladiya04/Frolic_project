import { lazy } from 'react';

// project imports
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/Dashboard';
import InstituteListPage from '../pages/extra-pages/InstituteListPage.jsx';
import DepartmentListPage from '../pages/extra-pages/DepartmentListPage.jsx';
import EventsListPage from '../pages/extra-pages/EventsListPage.jsx';
import AddInstitute from '../pages/extra-pages/Institute/addInstitute.jsx';
import AddDepartment from '../pages/extra-pages/Department/AddDepartment.jsx';
import AddEvent from '../pages/extra-pages/Event/AddEvent.jsx';

// render- Dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/default')));

// render - color
const Color = Loadable(lazy(() => import('pages/component-overview/color')));
const Typography = Loadable(lazy(() => import('pages/component-overview/typography')));
const Shadow = Loadable(lazy(() => import('pages/component-overview/shadows')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <DashboardLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'typography',
      element: <Typography />
    },
    {
      path: 'color',
      element: <Color />
    },
    {
      path: 'shadow',
      element: <Shadow />
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'InstituteListPage',
      element: <InstituteListPage />
    },
    {
      path: 'DepartmentListPage',
      element: <DepartmentListPage/>
    },
    {
      path: 'EventsListPage',
      element: <EventsListPage/>
    },
    {
      path: 'InstituteListPage/add',
      element: <AddInstitute/>
    },
    {
      path: 'DepartmentListPage/add',
      element: <AddDepartment/>
    },
    {
      path: 'EventsListPage/add',
      element: <AddEvent/>
    },
  ]
};

export default MainRoutes;
