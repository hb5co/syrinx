Template.hostDetail.events({
  'submit form' : function (e, tmpl) {
    e.preventDefault();

    // Define form field variables.
    var id = this._id,
      hostname = e.target.hostname.value,
      type = e.target.type.value,
      version = e.target.version.value;

    // Need more validation here.
    if (hostname.length) {
      
      // Hold previous values so we can notify what edits were made 
      var updates = [];
      var oldValues = Hosts.findOne({_id: id});
      
      // Update data in document.
      Hosts.update({_id: id}, {
        $set: {
          hostname: hostname,
          type: type,
          version: version,
          hostUpdated: new Date
        }
      });

      var newValues = Hosts.findOne({_id: id});
        for (var i in newValues){
          // Ignore the timestamp
          if (newValues[i] != oldValues[i] && i != 'hostUpdated' && i != 'hostCreated'){
            updates.push(hostname + ' "' + i + '" from "' + oldValues[i] + '" to "' + newValues[i] + '"');
          }
        }

        // Log the changes
        updates.forEach(function(s){
          Notifications.insert({
            type: 'Updated',
            body: s,
            noticeCreated: new Date
          });
        });

      // After update, go to detail view page.
      Router.go('host.detail', {_id: id});
    }
  },
  'click #delete' : function (event) {
      Notifications.insert({
          type: 'Host Deleted',
          body: this.hostname,
          noticeCreated: new Date
      });
      Hosts.remove(this._id);
  }
});

