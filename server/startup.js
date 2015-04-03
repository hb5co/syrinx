Meteor.startup(function () {
  // Add hosts features for testing
  if (Hosts.find().count() === 0 ) {
    _.each(hostFixtures, function(host){
      Hosts.insert(host);
    });
  }
});
