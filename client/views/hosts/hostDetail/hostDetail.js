Template.HostDetail.events({
  'submit form' : function (e, tmpl) {
    e.preventDefault();

    // Define form field variables.
    var id = this._id,
      hostname = e.target.hostname.value,
      type = e.target.type.value,
      version = e.target.version.value;

    // Need more validation here.
    if (hostname.length) {

      // Update data in document.
      Hosts.update({_id: id}, {
        $set: {
          hostname: hostname,
          type: type,
          version: version,
          hostUpdated: new Date
        }
      });
      // After update, go to detail view page.
      Router.go('host.detail', {_id: id});
    }
  },
  'click #delete' : function (event) {
      Hosts.remove(this._id);
  }
});

