import TennantsPage from './pages/TennantsPage';
import EmployeesPage from './pages/EmployeesPage';

const baseName = '/';

const routes = () => [
  {
    iconClass: 'fa fa-user',
    title: 'Tennants',
    to: '/',
    component: TennantsPage
  },
  {
    iconClass: 'fa fa-star',
    title: 'Employees',
    to: '/employee',
    component: EmployeesPage
  }
];

export { baseName, routes };
