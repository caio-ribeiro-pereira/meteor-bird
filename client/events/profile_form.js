Template.profileForm.events({
 "submit form": function(e, template) {
  e.preventDefault();
  var inputs = template.findAll("input");
  var name = inputs[0].value;
  var about = inputs[1].value;
  Meteor.call("profileUpdate", name, about);
  Session.set("editProfile", false);
 }
});