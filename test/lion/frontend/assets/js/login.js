var app = angular.module('login', []);
app.controller('loginCtrl', function ($scope, $http) {
    $scope.userName = "";
    $scope.password = "";

    $scope.login = function () {
        sessionStorage.clear();

        $http({
            url: '../backend/LogWeb.asmx/Login',
            method: "POST",
            data: {
                userName: $scope.userName,
                password: $scope.password
            }
        })
    .then(function (response) {
        if (response.data.d == $scope.userName) {
            sessionStorage.setItem("username", $scope.userName);
            window.location.href = "Index.html";
        } else {
            alert(response.data.d);
        }
    },
    function (response) {
        alert(response.data.d);
    });
    }

});