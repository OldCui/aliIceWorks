import UserLogin from '@/pages/UserLogin';
import UserRegister from '@/pages/UserRegister';
import Dashboard from '@/pages/Dashboard';
import OrderReport from '@/pages/OrderReport';
import OrderList from '@/pages/OrderList';
import ChargeBack from '@/pages/ChargeBack';
import Dispatch from '@/pages/Dispatch';
import Goods from '@/pages/Goods';
import AddOrder from '@/pages/AddOrder';
import AddGoods from '@/pages/AddGoods';
import NotFound from '@/pages/NotFound';

import UserLayout from '@/layouts/UserLayout';
import BasicLayout from '@/layouts/BasicLayout';

import PageConfig from '@/pages/PageConfig';
import BizProcess from '@/pages/BizProcess';

const routerConfig = [
  {
    path: '/user',
    component: UserLayout,
    children: [
      { path: '/login', component: UserLogin },
      { path: '/register', component: UserRegister },
    ],
  },
  {
    path: '/',
    component: BasicLayout,
    children: [
      { path: '/dashboard', component: Dashboard },
      { path: '/order/report', component: OrderReport },
      { path: '/order/list', component: OrderList },
      { path: '/chargeback', component: ChargeBack },
      { path: '/dispatch', component: Dispatch },
      { path: '/goods', component: Goods },
      { path: '/add/order', component: AddOrder },
      { path: '/add/goods', component: AddGoods },
      { path: '/page-config', component: PageConfig },
      { path: '/biz-process', component: BizProcess },
      { path: '/', redirect: '/dashboard' },
      { component: NotFound },
    ],
  },
];

export default routerConfig;
