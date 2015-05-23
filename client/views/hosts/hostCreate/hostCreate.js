Template.HostCreate.events({
  'submit form' : function (event, template) {
    event.preventDefault();

    // Define form field variables.
    var hostname = event.target.hostname.value;
    var type = event.target.type.value;
    var version = event.target.version.value;

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
        host_created: new Date,
        sort: seq
      });
      // Reset form.
      template.find('form').reset();
    }
  }
});

