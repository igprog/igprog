angular.module('appModel', [])

//app controllers
.controller('appCtrl', function ($scope, $http) {

$scope.message = "Web page under construction.";

 $http.get("json/products.json")
            .then(function(response){
                $scope.products = response.data.products;
            });


if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
      $scope.$apply(function(){
        $scope.position = position;
        $scope.myLatitude = position.coords.latitude;
        $scope.myLongitude = position.coords.longitude;
           angular.forEach($scope.products, function(obj){
                    obj.Distance = distance($scope.myLatitude, $scope.myLongitude, obj.Latitude, obj.Longitude, 'K');
                });
      });
    });
  };

  function distance(lat1, lon1, lat2, lon2, unit) {
        var radlat1 = Math.PI * lat1/180
        var radlat2 = Math.PI * lat2/180
        var radlon1 = Math.PI * lon1/180
        var radlon2 = Math.PI * lon2/180
        var theta = lon1-lon2
        var radtheta = Math.PI * theta/180
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        dist = Math.acos(dist)
        dist = dist * 180/Math.PI
        dist = dist * 60 * 1.1515
        if (unit=="K") { dist = dist * 1.609344 }
        if (unit=="N") { dist = dist * 0.8684 }
        return dist.toFixed(2);
}

   $scope.orderValue = "Distance"
    $scope.sort = function (x) {
        $scope.orderValue = x;
    };

    $scope.filterValue = "";
    $scope.filter = function (x) {
        $scope.filterValue = x;
    };

    $scope.filterCategory1 = "Events";
    $scope.filterCategory2 = "Accommodation";
    $scope.filterCategory3 = "Restaurants";

})


//app directives
.directive('sortDirective', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/filterCtrl.html'
    };
})

.directive('productDirective', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/products.html',
    };
});






