Hosts = new Mongo.Collection('hosts');

if (Meteor.isServer) {
  Hosts.allow({
    insert: function () {
      // temporary
      return true;
    },

    update: function () {
      // temporary
      return true;
    },

    remove: function () {
      // temporary
      return true;
    }
  });
}
