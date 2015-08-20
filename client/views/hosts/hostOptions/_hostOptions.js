Template.hostOptions.helpers({
  selected: function (value) {
    var type = this.type,
      selected;
    //console.log("Type: " + type);
    //console.log("Value: " + value);
    selected = type == value ? 'selected' : ''; 
    console.log(selected);
    //return type == value ? ' selected' : '';
    return selected;
  }
});
