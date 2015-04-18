Router.route("/user/:_id/follow", function() {
  var _id = this.params._id;
  Meteor.call("followUser", _id);
  this.redirect("/user/" + _id);
}, { name: "user.follow" });

Router.route("/user/:_id/unfollow", function() {
  var _id = this.params._id;
  Meteor.call("unfollowUser", _id);
  this.redirect("/user/" + _id);
}, { name: "user.unfollow" });