(function(){
  'use strict';
  angular.module('MsgApp',[])
  .controller('MsgController', MsgController);

  MsgController.$inject=["$scope","$filter"];
  function MsgController($scope,$filter){
    $scope.name="weimun";
    $scope.cookiesCost=.45;
    $scope.img="tree1.jpg";
    var img1="tree1.jpg";
    var img2="moon.jpg";
    $scope.sayMessage= function(){
      var msg="Life is meaningless";
      var output=$filter('uppercase')(msg);
      return output;
    };

    $scope.changeImage=function(){
      if($scope.img==img1){
        $scope.img=img2;
      }
      else {
        $scope.img=img1;
      }
    };
  }


})();
