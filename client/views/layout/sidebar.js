Template.sidebar.helpers({
  links: function () {
    var sidebarLinks = [
      {
        'name':'Dashboard',
        'location':'home',
        'iconClass': 'glyphicon glyphicon-stats',
        'iconColor': '#F03F3B',
      },
      {
        'name':'Create Host',
        'location':'host.create',
        'iconClass': 'glyphicon glyphicon-hdd',
        'iconColor': '#A6CB28',
      },
      {
        'name':'Notifications',
        'location':'notifications',
        'iconClass': 'glyphicon glyphicon-bell',
        'iconColor': '#A26DCA',
      },
    ];
    return sidebarLinks;
  },
});