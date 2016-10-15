angular.module('myApp')
  .controller('TranslateController', ['$translate', '$scope', function ($translate, $scope) {
    $scope.changeLanguage = function (langKey) {
      $translate.use(langKey);
    };
  }])
  .controller('ReviewController', ['$translate', '$scope', function ($translate, $scope) {

    $scope.reviews = reviews;
    $scope.formReview = "./templates/form_reviews.html";
    $scope.reviewsList = "./templates/reviews_list.html";
    $scope.sortOptions = ['Oldest', 'Newest'];

    $scope.addReview = function () {
      reviews.push({
        nickname: $scope.name,
        body: $scope.message,
        date: new Date()
      });

      localStorage.setItem("reviews", JSON.stringify(reviews));
      $scope.name = "";
      $scope.message = "";
    };

    $scope.sort = function (keyname) {
      $scope.sortKey = keyname;
      $scope.reverse = !$scope.reverse;
    };
}]);
