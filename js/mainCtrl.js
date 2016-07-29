  angular.module('mainApp').controller('mainCtrl', function($scope, mainSrv) {

  $scope.score = 0;

  $scope.quotes = [
    {quote: "I'm sick of losing to Jonathan at Foosball.  Hopefully I can beat him at this!", person: "Semo"},
    {quote: "Because this game is so sick, I'm going to set you up with my cousin.", person: "Mike"},
    {quote: "THIS. IS. THE. BEST.", person: "Evan"},
    {quote: "I can't begin to describe the feeling I get when I BuddyBomb someone.", person: "Brandon"},
    {quote: "This is the real world game that Pokemon GO could've been.  Way to go!", person: "Kyle"},
    {quote: "I'm going to BuddyBomb you when you're in Michigan.", person: "John"},
    {quote: "I couldn't believe my eyes when the rested upon this game.  Greatest thing I've ever seen.", person: "Joshua"},
    {quote: "This is soooo much better than Rocket League!", person: "James"}
  ];

  $scope.changeWalk = function() {
    mainSrv.changeWalk();
  };

  mainSrv.getLocation().then(function(response) {
    var city = response.city;
    var state = response.region;
    var googleApiKey = "AIzaSyAtOndEEQavkOjwrDdVGNWrk-88D_WandU";
    $scope.mapImage = "https://maps.googleapis.com/maps/api/staticmap?center=" + city +
    "," + state + "&zoom=12&size=200x350&scale=2&key=" + googleApiKey;
  });

  $scope.tabs1 = "tabs-clicked";
  $scope.tabs2 = "tabs-default";
  $scope.tabs3 = "tabs-default";

  $scope.changeClass = function(tab) {
    if (tab === "tabs1") {
      $scope.tabs1 = "tabs-clicked";
      $scope.tabs2 = "tabs-default";
      $scope.tabs3 = "tabs-default";
    }
    if (tab === "tabs2") {
      $scope.tabs1 = "tabs-default";
      $scope.tabs2 = "tabs-clicked";
      $scope.tabs3 = "tabs-default";
    }
    if (tab === "tabs3") {
      $scope.tabs1 = "tabs-default";
      $scope.tabs2 = "tabs-default";
      $scope.tabs3 = "tabs-clicked";
    }
  };
});
