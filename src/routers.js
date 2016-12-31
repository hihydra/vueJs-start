export default [
  {
    path: '/',
    name: 'index',
    component: require('./views/index')
  }, {
    path: '/list',
    name: 'list',
    component: require('./views/list')
  }, {
    path: '/article',
    name: 'article',
    component: require('./views/article')
  }, {
    path: '*',
    component: require('./views/index')
  }
]