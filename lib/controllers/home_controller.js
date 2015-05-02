HomeController = RouteController.extend({
  layoutTemplate: 'Layout',

  subscriptions: function () {
  },

  action: function () {
    this.render('HostList');
  }

});
