Template.followButton.helpers({
 canFollow: function() {
  var userId = Meteor.userId();
  return userId && Session.get('currentUserId') != userId;
 },
 isFollowing: function() {
  return Session.get('isFollowing');
 }
});