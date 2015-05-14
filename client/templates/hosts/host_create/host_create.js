Template.HostCreate.events({
  'form submit' : function (e, tmpl) {
    e.preventDefault();

    // Define form field variables.
    var hostname = e.target.hostname.value;
    var type = e.target.type.value;
    var version = e.target.version.value;

    // Need more validation here.
    if (hostname.val().length) {

      // Create sort field sequence value.
      var total = hosts.find().count();
      if (total == 0) {
        var seq = total;
      } else {
        var seq = total++;
      }

      // Insert data into document.
      hosts.insert({
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

