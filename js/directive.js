angular.module('myApp')
  .directive('reviewsList', function () {
    return {
      restrict: 'E',
      templateUrl: './templates/reviews_list.html'
    };
  });
