Template.HostCreate.events({
  'submit form' : function (event, template) {
    event.preventDefault();

    // Define form field variables.
    var hostname = event.target.hostname.value.trim(),
      type = event.target.type.value,
      version = event.target.version.value,
      environment = event.target.environment.value;
    
    // Need more validation here.
    if (hostname.length) {

      // Create sort field sequence value.
      var total = Hosts.find().count();
      if (total == 0) {
        var seq = total;
      } else {
        var seq = total++;
      }

      // Hold generated warnings
      var warnings = [];

      // Try to find a host matching the input 'hostname'
      var match = Hosts.findOne({hostname: {$regex: '^' + hostname + '$', $options: 'i'}}, {fields:{hostname:1, environment:1}});
    	
      // If found & it has the same environment, it's a duplicate
    	if (match && environment == match.environment) {
    		warnings.push(match.hostname + ' (' + match.environment + ') already exists');
      }

      // Make sure the '- Select Type-' isn't passed
      if (type.search(/^-\s?/) > -1) {
      	warnings.push('Must select a host <b>type</b>');
      }

      // Check that a version was entered
      if (!version){
      	warnings.push('Must specify a <b>version</b>');
      }

      // If there are warnings, display a notification & don't save.
      if (warnings.length) {
      	sAlert.error('<b>Warning:</b><br>' + warnings.map(function(s){return '• ' + s;}).join('<br>'), 
      		{ effect: 'bouncyflip', 
      			position: 'bottom', 
      			timeout: 5000, 
      			onRouteClose: false, 
      			html: true, 
      			stack: false, 
      			offset: '0px'
      		});
				return  
      }

      // Insert data into document.
      Hosts.insert({
        hostname: hostname,
        type: type,
        version: version,
        environment: environment,
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

      Notifications.insert({
        type: 'New host created',
        body: hostname,
        noticeCreated: new Date
      });

      // Reset form.
      template.find('form').reset();
      Router.go('home');
    }
  }
});

