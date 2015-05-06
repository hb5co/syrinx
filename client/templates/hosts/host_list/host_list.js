Template.HostList.events({
});

Template.HostList.helpers({
  hosts: function () {
    return Hosts.find();
  }
});
