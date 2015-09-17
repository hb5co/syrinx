Meteor.startup(function () {
  // Add hosts features for testing
  if (Hosts.find().count() === 0 ) {
    _.each(hostFixtures, function (host) {
      Hosts.insert(host);
    });
  }
  if (Notifications.find().count() === 0 ) {
    _.each(notificationsFixtures, function (notification) {
      Notifications.insert(notification);
    });
  }

  if (Meteor.isServer) {
    Meteor.methods({
      updateHostStatus: function (hostname) {
        var url = 'http://' + hostname,
          result = Meteor.http.get(url, {timeout: 30000});
        if (result.statusCode === 200) {
          return 'ok';
        }
      }
    });
  }
});
