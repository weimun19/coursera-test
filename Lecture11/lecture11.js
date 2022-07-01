(function(){
  'use strict';
  angular.module('MsgApp',[])
  .controller('MsgController', MsgController);

  MsgController.$inject=["$scope"];
  function MsgController($scope){
    $scope.name="weimun";

    $scope.sayMessage= function(){
      return "Life is meaningless";
    }
  }
})();
