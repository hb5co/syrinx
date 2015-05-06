Meteor.publish('hosts', function () {
  return Hosts.find();
});

// @todo Pass doc ID as parameter.
Meteor.publish('host', function (id) {
  return Hosts.find({_id: id});
});
