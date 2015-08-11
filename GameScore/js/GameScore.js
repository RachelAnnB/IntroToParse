Parse.initialize("XfQ2RSF5dxzBHfAkVFJeWbht27DsZP2oWPuLZFsj", "LH1z92IwTYPqzvbRoZnuABxLJ0jHukGNG2yXm3TT");

//Simple syntax to create a new subclass of Parse.Object.
var GameScore = Parse.Object.extend("GameScore");

//Retrieving a Parse.Object
var query = new Parse.Object("GameScore");
query.get("objectId", {
  success: function(gameScore) {
    //The object was retrieved successfully
  },
  
  error: function(gameScore, error) {
    //The object retrieval failed
    //Error is a Parse.Error with an error code and message
  }
}); 

//Create a new instance of that class.
var gameScore = new GameScore();

gameScore.set("score", 32);
gameScore.set("userName", "John Smith");
gameScore.set("cheatMode", false);

gameScore.save(null, {
  success: function(gameScore) {
    //Execute any logic that should take place after the object is saved
    alert('New object created with objectId: ' + gameScore.id);
  },
  
  error: function(gameScore, error) {
    //Execute any logic that should take place if the save fails
    //Error is a Parse.Error with an error code and message
    alert('Failed to create a new object, with error code: ' + error.message);
  }
});

//Alternatively, you can use the typical Backbone syntax
var Achievement = Parse.Object.extend({
  className: "Achievement"
});
