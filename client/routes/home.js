Router.route("/", function() {
 var _id = Meteor.userId();
 this.subscribe("posts", _id).wait();
 this.subscribe("friendship", _id);
 var timelineIds = Friendships.timelineIds(_id);
 this.render("home", {
  data: function() {
   return {
    posts: Posts.list(timelineIds),
    followers: Friendships.followers(_id),
    followings: Friendships.followings(_id)
   }
  }
 });
}, { 
  name: "home", 
  fastRender: true
});