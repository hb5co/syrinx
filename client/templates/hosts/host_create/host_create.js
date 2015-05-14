Template.HostCreate.events({
  'submit form' : function (e, tmpl) {
    e.preventDefault();

    // Define form field variables.
    var hostname = e.target.hostname.value;
    var type = e.target.type.value;
    var version = e.target.version.value;

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
      tmpl.find('form').reset();
    }
  }
});

