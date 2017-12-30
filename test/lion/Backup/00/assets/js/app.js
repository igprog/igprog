angular.module('app', ['ngMaterial'])
.controller('AppCtrl', function ($scope, $mdDialog) {
    $scope.currTpl = 'assets/partials/dashboard.html';
    $scope.activeTab = 0;
    $scope.toggleTpl = function (x, y) {
        $scope.currTpl = x;
        $scope.activeTab = y;
    };

    $scope.getDateDiff = function (x) {
        var today = new Date();
        var date1 = today;
        var date2 = new Date(x);
        var diffDays = parseInt((date2 - date1) / (1000 * 60 * 60 * 24));
        return diffDays;
    }
   

    $scope.clients = [
        {
            'id': '1213',
            'firstName': 'Ivan',
            'lastName': 'Ivanović',
            'birthDate': '1977-07-07',
            'phone': '+38598123456',
            'email': 'email@gmail.com',
            'tip': 'tip1',
            'dateFrom': '2016-11-31',
            'dateTo': '2016-12-26',
            'isActive': '1'
        },
        {
            'id': '2215',
            'firstName': 'Marko',
            'lastName': 'Marković',
            'birthDate': '1985-07-09',
            'phone': '+38598123456',
            'email': 'email1@gmail.com',
            'tip': 'tip2',
            'dateFrom': '2016-11-12',
            'dateTo': '2016-12-01',
            'isActive': '0'
        },
        {
            'id': '3245',
            'firstName': 'Petar',
            'lastName': 'Petrović',
            'birthDate': '1980-12-01',
            'phone': '+38598123456',
            'email': 'email1@gmail.com',
            'tip': 'tip1',
            'dateFrom': '2016-12-12',
            'dateTo': '2016-12-31',
            'isActive': '1'
        }
    ];


    $scope.showClient = function (x) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'assets/partials/popup/clientpopup.html',
            parent: angular.element(document.body),
            targetEvent: x,
            clickOutsideToClose: true,
            fullscreen: $scope.customFullscreen, // Only for -xs, -sm breakpoints.
            client: x
        })
        .then(function (answer) {
            $scope.status = 'You said the information was "' + answer + '".';
        }, function () {
            $scope.status = 'You cancelled the dialog.';
        });
    };

    function DialogController($scope, $mdDialog, client) {
        $scope.client = client;
        $scope.hide = function () {
            $mdDialog.hide();
        };

        $scope.cancel = function () {
            $mdDialog.cancel();
        };

        $scope.answer = function (answer) {
            $mdDialog.hide(answer);
        };
    }


});