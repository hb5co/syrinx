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

