var Future = Npm.require("fibers/future");
var exec = Npm.require("child_process").exec;

Meteor.methods({
  runCode: function () {
    this.unblock();
    var future = new Future();
    var command = 'drush @starwood.self ups --format=table --check-disabled';
    exec( command, function (error, stdout, stderr) {
      if (error) {
        console.log(error);
        throw new Meteor.Error(500, command + " failed");
      }
      future.return(stdout, toString());
    });
    console.log(future.wait());
    return future.wait();
  },
  baz: function () {
    return 'baz';
  }
});
