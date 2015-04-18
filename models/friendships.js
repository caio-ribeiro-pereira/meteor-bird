Friendships = new Mongo.Collection('friendships');

Friendships.follow = function(friendId) {
 this.insert({
  userId: Meteor.userId(),
  friendId: friendId
 });
};
Friendships.unfollow = function(friendId) {
 this.remove({
  userId: Meteor.userId(),
  friendId: friendId
 });
};
Friendships.isFollowing = function(friendId) {
 return this.findOne({
  userId: Meteor.userId(),
  friendId: friendId
 });
};
Friendships.followings = function(userId) {
 return this.find({userId: userId}).count();
};
Friendships.followers = function(friendId) {
 return this.find({friendId: friendId}).count();
};
Friendships.timelineIds = function(userId) {
 var timelineIds = this.find({
  userId: userId
 }).map(function(f) {
  return f.friendId;
 });
 timelineIds.push(userId);
 return timelineIds;
};
Friendships.followersAndFollowings = function(_id) {
 return this.find({$or: [{userId: _id}, {friendId: _id}]});
};