Template.HostList.events({
});

Template.HostList.helpers({
  // Get list of Hosts sorted by the sort field.
  hosts: function () {
    return Hosts.find({}, {sort: {sort: 1}});
  }
});

Template.HostList.rendered = function () {

  // Make rows sortable/draggable using Jquery-UI.
  this.$('#sortable').sortable({

    stop: function (event, ui) {
      // Define target row items.
      target = ui.item.get(0);
      before = ui.item.prev().get(0);
      after = ui.item.next().get(0);

      // Change the sort value dependnig on target location.
      // If target is now first, subtract 1 from sort value.
      if (!before) {
        newSort = Blaze.getData(after).sort - 1;
      // If target is now last, add 1 to sort value.
      } else if (!after) {
        newSort = Blaze.getData(before).sort + 1;
      // Get value of prev and next elements
      // to determine new target sort value.
      } else {
        newSort = (Blaze.getData(after).sort +
                  Blaze.getData(before).sort) / 2;
      }

      // Update the database with new sort value.
      Hosts.update({_id: Blaze.getData(target)._id}, {
        $set: {
          sort: newSort
        }
      });
    }
  });
};
