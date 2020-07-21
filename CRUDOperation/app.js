var app = angular.module('myApp', []);
 app.controller('myCtrl', function($scope,$http) {
 $scope.data = {};
$scope.submit= function(){
    console.log('clicked submit');
    $http({
        url: 'http://localhost:4000/create',
        method: 'POST',
        data: $scope.data
    }).then(function (httpResponse) {
        alert(httpResponse.data);
        console.log(httpResponse.data);
    })
   }
 });
