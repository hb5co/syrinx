Template.HostCreate.events({
  'submit form' : function (event, template) {
    event.preventDefault();

    // Define form field variables.
    var hostname = event.target.hostname.value,
      type = event.target.type.value,
      version = event.target.version.value;

    // Need more validation here.
    if (hostname.length) {

      // Create sort field sequence value.
      var total = Hosts.find().count();
      if (total == 0) {
        var seq = total;
      } else {
        var seq = total++;
      }

      // Insert data into document.
      Hosts.insert({
        hostname: hostname,
        type: type,
        version: version,
        status: "refresh",
        hostCreated: new Date,
        sort: seq
      }, function (insertError, id) {
        // Update the status of the host once a response has been determined
        // asynchronously.
        Meteor.call("updateHostStatus", hostname, function(hostError, response) {
          // If there was an error or if there was no response, then consider this
          // site to be offline.
          if (hostError || response != "ok") {
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
      });

      // Reset form.
      template.find('form').reset();
      Router.go('home');
    }
  }
});

