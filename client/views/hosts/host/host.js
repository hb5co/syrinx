Template.Host.helpers({

  host: function () {
    var id = this._id;
    return Hosts.findOne({_id: id});
  }

});
