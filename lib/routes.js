Route.config({
  layoutTemplate: 'Layout',
  loadingTemplate: 'Loading'
});

Router.route('/', {
  name:  'home',
  controller:  'HomeController',
  action: 'action',
  where: 'client'
});

