angular.module('mainApp').directive('buddyBomb', function() {

  return {
    templateUrl: '../views/buddyBomb.html',
    restrict: 'E',
    controller: function($scope, $interval, mainSrv) {

      $scope.pos = {
        top: "0px",
        left: "0px"
      };
      $scope.img = "../img/ash/ash-down-stand.gif";
      $scope.bombCheck = false;

      $scope.newPos = function() {
        if ($scope.bombCheck === true) {
          $scope.show = false;
          $scope.bombX = undefined;
          $scope.bombY = undefined;
          $scope.bombCheck = false;
        }

        var newCoordinates = mainSrv.moveAsh($scope.pos.top, $scope.pos.left);
        var ashImg = newCoordinates.img;
        var ashFinalImg = ashImg.stand;
        $scope.img = ashImg.left;

        var ashX = Number($scope.pos.left.substring(0, $scope.pos.left.length - 2));
        var ashY = Number($scope.pos.top.substring(0, $scope.pos.top.length - 2));
        var bombX = $scope.bombX - 20;
        var bombY = $scope.bombY - 25;
        console.log(newCoordinates.left + ", " + newCoordinates.top);
        console.log(bombX + ", " + bombY);
        var hypotenuse = 50;
        var finalPointY;
        var finalPointX;

        if ((bombX + 35 > ashX) && (ashX > bombX - 35)) {
          var shortLeg = Math.abs(bombX - ashX);
          var longLegDistance = Math.sqrt((Math.pow(hypotenuse, 2) - Math.pow(shortLeg, 2)));
          if (ashY < bombY) {
            finalPointY = bombY - longLegDistance;
            if (newCoordinates.top > finalPointY) {
              console.log("BOOM1");
              console.log(newCoordinates.left + ', ' + finalPointY);
              newCoordinates.top = finalPointY;
              ashFinalImg = ashImg.burn;
              $scope.bombCheck = true;
              $scope.score = $scope.score + 1;
            }
          }
          if (bombY < ashY) {
            finalPointY = bombY + longLegDistance;
            if (newCoordinates.top < finalPointY) {
              console.log("BOOM2");
              console.log(newCoordinates.left + ', ' + finalPointY);
              newCoordinates.top = finalPointY;
              ashFinalImg = ashImg.burn;
              $scope.bombCheck = true;
              $scope.score = $scope.score + 1;
            }
          }
        }

        if ((bombY + 35 > ashY) && (ashY > bombY - 35)) {
          var shortLeg = Math.abs(bombY - ashY);
          var longLegDistance = Math.sqrt((Math.pow(hypotenuse, 2) - Math.pow(shortLeg, 2)));
          if (ashX < bombX) {
            finalPointX = bombX - longLegDistance;
            if (newCoordinates.left > finalPointX) {
              console.log("BOOM3");
              console.log(finalPointX + ', ' + newCoordinates.top);
              newCoordinates.left = finalPointX;
              ashFinalImg = ashImg.burn;
              $scope.bombCheck = true;
              $scope.score = $scope.score + 1;
            }
          }
          if (bombX < ashX) {
            finalPointX = bombX + longLegDistance;
            if (newCoordinates.left < finalPointX) {
              console.log("BOOM4");
              console.log(finalPointX + ', ' + newCoordinates.top);
              newCoordinates.left = finalPointX;
              ashFinalImg = ashImg.burn;
              $scope.bombCheck = true;
              $scope.score = $scope.score + 1;
            }
          }
        }




        var i = 1;

        var imgFunction = function() {
          if (i % 2 === 0 && i < 5) {
            $scope.img = ashImg.left;
          }
          else if (i % 2 !== 0 && i < 5) {
            $scope.img = ashImg.right;
          }
          else {
            $scope.img = ashFinalImg;
          }
          i++;
        };

        $interval(imgFunction, 500, 5);
        $scope.pos.top = newCoordinates.top + "px";
        $scope.pos.left = newCoordinates.left + "px";
      };
      $interval($scope.newPos, 4000);


      $scope.clickCheck = false;
      $scope.bombClick = function() {
        $scope.clickCheck = true;
      };

      $scope.plantBomb = function(event) {

        $scope.bombStatus = "Not Ready";
        $scope.bombX = event.offsetX ;
        $scope.bombY = event.offsetY;

        var imageX = (event.offsetX - 16);
        var imageY = (event.offsetY - 20);
        imageX = imageX + "px";
        imageY = imageY + "px";

        $scope.location = {
          top: imageY,
          left: imageX,
        };


        // setTimeout(function() {
        //   $scope.show = false;
        //   $scope.bombX = undefined;
        //   $scope.bombY = undefined;
        //   $scope.bombStatus = undefined;
        // }, 50000);


        $scope.clickCheck = false;
        $scope.show = true;
      };
    }
  };
});
