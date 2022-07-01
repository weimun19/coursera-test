(function(){
  'use strict';
  angular.module('MsgApp',[])
  .controller('MsgController', MsgController)
  .filter('meaning', MeaningfulFilter)
  .filter('truth', TruthFilter);

  MsgController.$inject=["$scope","meaningFilter", "truthFilter"];
  function MsgController($scope,meaningFilter,truthFilter){
    $scope.name="weimun";
    $scope.sayMessage= function(){
      var msg="Life is meaningless";
      return msg;
    };

    $scope.sayPositive= function(){
      var msg="Life is meaningless";
      return meaningFilter(msg);
    };

    $scope.sayTruth= function(){
      var msg="Life is meaningless";
      return truthFilter(msg,"meaningless","not easy");
    };

  }

  function MeaningfulFilter(){
    return function (input){
      input=input||"";
      input=input.replace("meaningless","meaningful");
      return input;
    };
  }

  function TruthFilter(){
    return function(input,target,replace){
      input=input||"";
      input=input.replace(target,replace);
      return input;
    };
  }
})();
