
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

      // Update the status of the host once a response has been determined
      // asynchronously.
      Meteor.call("updateHostStatus", hostname, function(err, response) {

        // If there was an error or if there was no response, then consider this
        // site to be offline.
        if (err || response != "ok") {
          Hosts.update({_id: id}, {
            $set: {
              status: "remove"
            }
          });
        }

        // If a response was successful, then consider this site to be online.
        else {
          Hosts.update({_id: id}, {
            $set: {
              status: "ok"
            }
          });
        }
      });

      // After update, go to detail view page.
      Router.go('host.detail', {_id: id});
    }
  }
});

