(function (){
  'use strict';

  angular.module('CounterApp',[])
  .controller('CounterController',CounterController);

  CounterController.$inject=['$scope'];
  function CounterController($scope){
    $scope.onceCounter=0;
    $scope.counter=0;
    $scope.name="weimun";

    $scope.showNumberOfWatchers=function(){
      console.log("# of Watchers",$scope.$$watchersCount);
    };

    $scope.countOnce=function(){
      $scope.onceCounter=1;
      // using the built-in watch function, it will fired the watcher twice at the first timeout
      // and once after the first timeout
      // first time:
        // update the value once
        // check the value once
      // after that:
        // only check the value but no update
    };

    $scope.upCounter=function(){
      $scope.counter++;
      // using the built-in watch function, it will fired the watcher twice each time:
        // update the value once
        // check the value once
    };

    // $scope.$watch("onceCounter",function(newValue,oldValue){
    //   console.log("onceCounter old value: ",oldValue);
    //   console.log("onceCounter new value: ",newValue);
    // });
    //
    // $scope.$watch("counter",function(newValue,oldValue){
    //   console.log("Counter old value: ",oldValue);
    //   console.log("Counter new value: ",newValue);
    // });

    // buidt-in watch function
    $scope.$watch(function(){
      console.log("Digest loop fired");
      // fired twice here
      // $scope.onceCounter=0;
      // $scope.counter=0;
    });
  }
})();
