Template.Layout.helpers({
  totalHosts: function () {
    return Hosts.find().count();
  },
  totalNotifications: function () {
    return Notifications.find().count();
  }
});

Template.Layout.events({
});
