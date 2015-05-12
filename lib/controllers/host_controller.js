HostController = RouteController.extend({
  subscriptions: function () {
    this.subscribe('host', this.params._id);
  },
  
  data: function () {
    return Hosts.findOne({_id: this.params._id});
  },

  detail: function () {
    this.render('HostDetail');    
  },

  edit: function () {
    this.state.set('isEditing', true);
    this.render('HostDetail');
  }

});
