
Template.HostDetail.events({
  'submit form' : function (e, tmpl) {
    e.preventDefault();

    // Define form field variables.
    var id = this._id;
    var hostname = e.target.hostname.value;
    var type = e.target.type.value;
    var version = e.target.version.value;

    // Need more validation here.
    if (hostname.length) {

      // Update data in document.
      Hosts.update({_id: id}, {
        $set: {
          hostname: hostname,
          type: type,
          version: version,
          host_updated: new Date
        }
      });
      // After update, go to detail view page.
      Router.go('host.detail', {_id: id});
    }
  }
});

