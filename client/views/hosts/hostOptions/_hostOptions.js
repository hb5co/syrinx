Template.hostOptions.helpers({
  selected: function (value) {
    var type = this.type,
      selected;
    selected = type === value ? 'selected' : '';
    return selected;
  }
});
