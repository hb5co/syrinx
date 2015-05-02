HomeController = RouteController.extend({
  layoutTemplate: 'Layout',

  subscriptions: function () {
    this.subscribe('hosts');
  },

  action: function () {
    this.render('HostList');
  }

});
