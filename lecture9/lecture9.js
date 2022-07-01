// (function(){
//   'use strict';
//
//   angular.module('DIApp',[])
//   .controller('DIController',DIController);
//
// DIController.$inject=['$scope','$filter','$injector'];
//   function DIController ($scope, $filter, $injector){
//     $scope.name="weimun";
//
//
//     $scope.upper=function(){
//       var upCase=$filter('uppercase');
//       $scope.name=upCase($scope.name);
//     };
//   }
// })();

!function(){"use strict";function a(a,b,c){a.name="weimun",a.upper=function(){var c=b("uppercase");a.name=c(a.name)}}angular.module("DIApp",[]).controller("DIController",a),a.$inject=["$scope","$filter","$injector"]}()
