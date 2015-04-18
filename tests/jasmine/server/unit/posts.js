describe("Posts", function() {

  var userId = 999;
  var userName = "User";
  var message = "Hello!";
  var timeNow = new Date(2000,1,1);
  var userIds = [userId, 111];
  var userNames = ["UserA", "UserB"];

  beforeEach(function () {
    spyOn(Meteor, "userId").and.returnValue(userId);
    jasmine.clock().install();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  })

  it("should publish a post", function() {
    spyOn(Posts, "insert");
    jasmine.clock().mockDate(timeNow);
    
    Posts.publish(message, userName);
    var insertedArgs = Posts.insert.calls.argsFor(0);
    var expectedArgs = [{
      message: message,
      time: new Date(),
      userId: userId,
      name: userName
    }];
    expect(insertedArgs).toEqual(expectedArgs);
  });

  it("should list all user's posts", function() {
    jasmine.clock().mockDate(timeNow);
    var fakeResult = [
      {
        message: "hi", 
        time: new Date(),
        userId: userIds[0],
        name: userNames[0]
      },
      {
        message: "bye", 
        time: new Date(),
        userId: userIds[1],
        name: userNames[1]
      },
    ];
    spyOn(Posts, "find").and.returnValue(fakeResult);

    var posts = Posts.list(userIds);
    var findArgs = Posts.find.calls.argsFor(0);
    var expectedArgs = [
      {userId: {$in: userIds}},
      {sort: {time: -1, name: 1}}
    ];
    expect(findArgs).toEqual(expectedArgs);
  });

});