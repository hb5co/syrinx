Template.notifications.helpers({
  notifications: function () {
  	// Show newest notifications first (at the top)
    return Notifications.find({}, {sort:{ noticeCreated: -1}});
  }
});
