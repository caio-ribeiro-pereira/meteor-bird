Router.route("/user/:_id", function() {
 var _id = this.params._id;
 this.subscribe("posts", _id).wait();
 this.subscribe("friendship", _id);
 this.subscribe("user", _id);
 var isFollowing = Friendships.isFollowing(_id);
 Session.set("currentUserId", _id);
 Session.set("isFollowing", isFollowing);
 this.render("user", {
  data: function() {
   return {
    user: Meteor.users.findOne({_id: _id}),
    posts: Posts.list([_id]),
    followers: Friendships.followers(_id),
    followings: Friendships.followings(_id)
   }
  }
 });
}, { 
  name: "user",
  fastRender: true
});