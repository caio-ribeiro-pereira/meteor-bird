Template.post.events({
 "submit form": function(e, template) {
  e.preventDefault();
  var textarea = template.find("textarea");
  var name = Meteor.user().profile.name;
  Meteor.call("publishPost", textarea.value, name);
  textarea.value = "";
 }
});