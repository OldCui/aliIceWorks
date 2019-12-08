// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
  {
    name: '反馈',
    path: 'https://github.com/alibaba/ice',
    external: true,
    newWindow: true,
    icon: 'message',
    id: 'Menu_373kh',
  },
  {
    name: '帮助',
    path: 'https://alibaba.github.io/ice',
    external: true,
    newWindow: true,
    icon: 'bangzhu',
    id: 'Menu_qktws',
  },
  { name: '退出', path: '/user/login', icon: 'yonghu', id: 'Menu_aed82' },
];

const asideMenuConfig = [
  { name: '工作台', path: '/dashboard', icon: 'home2', id: 'Menu_kqqjj' },
  { name: '订单报表', path: '/order/report', icon: 'chart', id: 'Menu_0ibhk' },
  { name: '订单管理', path: '/order/list', icon: 'shopcar', id: 'Menu_2b6w2' },
  { name: '退单管理', path: '/chargeback', icon: 'cascades', id: 'Menu_tfn9b' },
  { name: '发货管理', path: '/dispatch', icon: 'clock', id: 'Menu_05joi' },
  { name: '商品管理', path: '/goods', icon: 'shopcar', id: 'Menu_j0llf' },
  { name: '添加商品', path: '/add/goods', icon: 'publish', id: 'Menu_34sfs' },
  { name: '添加订单', path: '/add/order', icon: 'edit2', id: 'Menu_m3krf' },
  { name: '我的流程图', path: '/biz-process', icon: 'publish', id: 'Menu_ajwrp' },
  { name: '我的配置页面', path: '/page-config', icon: 'edit2', id: 'Menu_pzym' },
];

export { headerMenuConfig, asideMenuConfig };
