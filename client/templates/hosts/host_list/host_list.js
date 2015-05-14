Template.HostList.events({
});

Template.HostList.helpers({
  hosts: function () {
    return Hosts.find();
  }
});

// Make sortable rows.
Template.HostList.rendered = function() {

  this.$('#sortable').sortable({

    stop: function(e, ui) {

      target = ui.item.get(0);
      before = ui.item.prev().get(0);
      after = ui.item.next().get(0);

      if (!before) {
        newSort = Blaze.getData(after).sort -1;
      } else if (!after) {
        newSort = Blaze.getData(before).sort +1;
      } else {
        newSort = (Blaze.getData(after).sort +
                  Blaze.getData(before).sort) / 2;
      }

      Host.update(
        {_id: Blaze.getData(target)._id},
        {$set: {sort: newSort}}
      );
    }
  });

}
