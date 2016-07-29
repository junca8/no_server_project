angular.module('mainApp').service('mainSrv', function($http) {

  var googleApiKey = "AIzaSyAtOndEEQavkOjwrDdVGNWrk-88D_WandU";

  this.getLocation = function() {
    return $http({
      url: "http://ipinfo.io",
      method: 'GET'
    })
    .then(function(response) {
      console.log(response.data);
      return response.data;
    });
  };

  var normalWalk = [
    {
      direction: 'left',
      multiplier: 1,
      images: {
        stand: '../img/ash_new/ash-right-stand.gif',
        left: '../img/ash/ash-right-left.gif',
        right: '../img/ash/ash-right-right.gif',
        burn: '../img/ash/ash-right-burn.gif'
      }
    },
    {
      direction: 'left',
      multiplier: -1,
      images: {
        stand: '../img/ash/ash-left-stand.gif',
        left: '../img/ash/ash-left-left.gif',
        right: '../img/ash/ash-left-right.gif',
        burn: '../img/ash/ash-left-burn.gif'
      }
    },
    {
      direction: 'top',
      multiplier: 1,
      images: {
        stand: '../img/ash/ash-down-stand.gif',
        left: '../img/ash/ash-down-left.gif',
        right: '../img/ash/ash-down-right.gif',
        burn: '../img/ash/ash-down-burn.gif'
      }
    },
    {
      direction: 'top',
      multiplier: -1,
      images: {
        stand: '../img/ash/ash-up-stand.gif',
        left: '../img/ash/ash-up-left.gif',
        right: '../img/ash/ash-up-right.gif',
        burn: '../img/ash/ash-up-burn.gif'
      }
    }
  ];

  var moonWalk = [
    {
      direction: 'left',
      multiplier: 1,
      images: {
        stand: '../img/ash/ash-left-stand.gif',
        left: '../img/ash/ash-left-left.gif',
        right: '../img/ash/ash-left-right.gif',
        burn: '../img/ash/ash-left-burn.gif'
      }
    },
    {
      direction: 'left',
      multiplier: -1,
      images: {
        stand: '../img/ash/ash-right-stand.gif',
        left: '../img/ash/ash-right-left.gif',
        right: '../img/ash/ash-right-right.gif',
        burn: '../img/ash/ash-right-burn.gif'
      }
    },
    {
      direction: 'top',
      multiplier: 1,
      images: {
        stand: '../img/ash/ash-up-stand.gif',
        left: '../img/ash/ash-up-left.gif',
        right: '../img/ash/ash-up-right.gif',
        burn: '../img/ash/ash-up-burn.gif'
      }
    },
    {
      direction: 'top',
      multiplier: -1,
      images: {
        stand: '../img/ash/ash-down-stand.gif',
        left: '../img/ash/ash-down-left.gif',
        right: '../img/ash/ash-down-right.gif',
        burn: '../img/ash/ash-down-burn.gif'
      }
    }
  ];

  this.changeWalk = function() {
    if (this.directionArray === normalWalk) {this.directionArray = moonWalk;}
    else {this.directionArray = normalWalk;}
  };

  this.directionArray = normalWalk;

  this.moveAsh = function(top, left) {
    var newDirectionArray = [];
    var left = Number(left.substring(0, left.length - 2));
    var top = Number(top.substring(0, top.length - 2));
    var leftMin = 0;
    var leftMax = 275;
    var topMin = 0;
    var topMax = 410;

    if (left !== leftMax) { newDirectionArray.push(this.directionArray[0]); }
    if (left !== leftMin) { newDirectionArray.push(this.directionArray[1]); }
    if (top !== topMax) { newDirectionArray.push(this.directionArray[2]); }
    if (top !== topMin) { newDirectionArray.push(this.directionArray[3]); }

    var int = Math.floor(Math.random() * (newDirectionArray.length));
    var direction = newDirectionArray[int];

    if (direction.direction === "left") {
      var distance = (Math.random() * 100) + 25;
      var left = left + (distance * direction.multiplier);
      if (left < leftMin) {left = leftMin;};
      if (left > leftMax) {left = leftMax;};
    }
    if (direction.direction === "top") {
      var distance = (Math.random() * 200) + 50;
      var top = top + (distance * direction.multiplier);
      if (top < topMin) {top = topMin;};
      if (top > topMax) {top = topMax;};
    }

    return {
      top: top,
      left: left,
      img: direction.images
    };
  };
});
