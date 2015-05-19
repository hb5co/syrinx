Template.Layout.helpers({
  totalHosts: function () {
    return Hosts.find().count();
  }
});

Template.Layout.events({
});
