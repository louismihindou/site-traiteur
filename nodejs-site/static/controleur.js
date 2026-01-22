var app = angular.module('myApp', []);
app.controller('myCtrl', ["$scope", "$http", function ($scope, $http) {
        $http.get('/menus').then(function (reponse) {
                $scope.menus = reponse.data;
        });

        $scope.$watch("selection", function (value) {
                $http.get('/menu/' + value).then(function (reponse) {
                        $scope.detail = reponse.data;
                });
        });

}]);
