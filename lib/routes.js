Router.configure({
  layoutTemplate: 'Layout',
  loadingTemplate: 'Loading'
});

Router.route('/', {
  name:  'home',
  controller:  'ListController',
  action: 'action',
  where: 'client'
});

Router.route('/host/:_id', {
  name:  'host.detail',
  controller:  'HostController',
  action: 'detail',
  where: 'client'
});

Router.route('/host/:_id/edit', {
  name:  'host.edit',
  controller:  'HostController',
  action: 'edit',
  where: 'client'
});

Router.route('/host/create', {
  name:  'host.create',
  controller:  'HostController',
  action: 'create',
  where: 'client'
});

