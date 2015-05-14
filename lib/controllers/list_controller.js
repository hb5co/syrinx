ListController = RouteController.extend({
  layoutTemplate: 'Layout',

  subscriptions: function () {
    this.subscribe('hosts', {
      sort: {sort: 1}
    });
  },

  action: function () {
    this.render('HostList');
  }

});
