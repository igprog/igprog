angular.module('app', ['ngMaterial', 'chart.js'])

.controller('AppCtrl', ['$scope', '$mdDialog', '$timeout', '$q', '$log', '$rootScope', function ($scope, $mdDialog, $timeout, $q, $log, $rootScope) {
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
            'isActive': '1',
            'price': '200'
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
            'isActive': '0',
            'price': '250'
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
            'dateTo': '2017-01-07',
            'isActive': '1',
            'price': '200'
        }
    ];

    $scope.client = 
        {
            'id': Math.floor((Math.random() * 10000) + 1),
            'firstName': '',
            'lastName': '',
            'birthDate': '',
            'phone': '',
            'email': '',
            'tip': '',
            'dateFrom': '',
            'dateTo': '',
            'isActive': '',
            'price': 0
        }
    ;


    //CheckIn
    if ($scope.currentClients == undefined) {
        $scope.currentClients = [];
    }
    if ($rootScope.currentNumberOfClients == undefined) {
        $rootScope.currentNumberOfClients = 0;
    } else {
        $rootScope.currentNumberOfClients = $scope.currentClients.length;
    }

    //Check In Dialog
    $scope.showCheckIn = function () {
        $mdDialog.show({
            controller: CheckInDialogController,
            templateUrl: 'assets/partials/popup/checkinpopup.html',
            parent: angular.element(document.body),
            targetEvent: '',
            clickOutsideToClose: true,
            fullscreen: $scope.customFullscreen, // Only for -xs, -sm breakpoints.
            currentClients: $scope.currentClients,
            currentNumberOfClients: $rootScope.currentNumberOfClients
        })
        .then(function (answer) {
            $scope.status = 'You said the information was "' + answer + '".';
        }, function () {
            $scope.status = 'You cancelled the dialog.';
        });
    };

    function CheckInDialogController($scope, $mdDialog, currentClients, currentNumberOfClients, $rootScope) {
        $scope.currentClients = currentClients;
        $rootScope.currentNumberOfClients = $scope.currentClients.length;
        $scope.currentNumberOfClients = $scope.currentClients.length;
        $scope.hide = function () {
            $rootScope.currentNumberOfClients = $scope.currentClients.length;
            $mdDialog.hide();
        };

        $scope.cancel = function () {
            $rootScope.currentNumberOfClients = $scope.currentClients.length;
            $mdDialog.cancel();
           
        };

        $scope.answer = function (answer) {
            $mdDialog.hide(answer);
        };
    }

    $scope.checkIn = function (x) {
        angular.forEach($scope.clients, function (value, key) {
            if (value.id == x) {
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth() < 10 ? '0' + now.getMonth() + 1 : now.getMonth() + 1;
                var day = now.getDate() < 10 ? '0' + now.getDate() : now.getDate();
                var hours = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
                var minutes = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
                $scope.currentClients.splice(0, 0, {
                    id: value.id,
                    firstName: value.firstName,
                    lastName: value.lastName,
                    checkInDate: day + '.' + month + '.' + year,
                    checkInTime: hours + ':' + minutes
                })
                self.selectedItem = null;
                self.searchText = "";
            }
        })
        $scope.currentNumberOfClients = $scope.currentClients.length;
        $rootScope.currentNumberOfClients = $scope.currentClients.length;
    }



    $scope.showClient = function (x) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'assets/partials/popup/clientpopup.html',
            parent: angular.element(document.body),
            targetEvent: x,
            clickOutsideToClose: true,
            fullscreen: $scope.customFullscreen, // Only for -xs, -sm breakpoints.
            client: x,
            clients: $scope.clients
        })
        .then(function (answer) {
            $scope.status = 'You said the information was "' + answer + '".';
        }, function () {
            $scope.status = 'You cancelled the dialog.';
        });
    };

    function DialogController($scope, $mdDialog, client, clients) {
        $scope.client = client;
        $scope.clients = clients;
        $scope.hide = function () {
            $mdDialog.hide();
        };

        $scope.cancel = function () {
            $mdDialog.cancel();
        };

        $scope.save = function (client) {
            for (i = 0; i < $scope.clients.length; i++) {
                //update client
                if ($scope.clients[i].id == client.id) {
                    $scope.clients[i].firstName = client.firstName;
                    $scope.clients[i].lastName = client.lastName;
                    $scope.clients[i].birthDate = client.birthDate;
                    $scope.clients[i].phone = client.phone;
                    $scope.clients[i].email = client.email;
                    $scope.clients[i].tip = client.tip;
                    $scope.clients[i].dateFrom = client.dateFrom;
                    $scope.clients[i].dateTo = client.dateTo;
                    $scope.clients[i].isActive = client.isActive;
                    $scope.clients[i].price = client.price;
                    $mdDialog.hide();
                    return;
                }
            }
            //save client
            $scope.clients.push(client);
            $mdDialog.hide();
        };
    }

    //<md-autocomplete
    var self = this;

    self.simulateQuery = false;
    self.isDisabled = false;

    // list of `state` value/display objects
    self.states = loadAll();
    self.querySearch = querySearch;
    self.selectedItemChange = selectedItemChange;
    self.searchTextChange = searchTextChange;

    self.newState = newState;

    function newState(state) {
        alert("Sorry! You'll need to create a Constitution for " + state + " first!");
    }

    // ******************************
    // Internal methods
    // ******************************

     //Search for states... use $timeout to simulate remote dataservice call.
    function querySearch(query) {
        var results = query ? self.states.filter(createFilterFor(query)) : self.states,
            deferred;
        if (self.simulateQuery) {
            deferred = $q.defer();
            $timeout(function () { deferred.resolve(results); }, Math.random() * 1000, false);
            return deferred.promise;
        } else {
            return results;
        }
    }

    function searchTextChange(text) {
        $log.info('Text changed to ' + text);
    }

    function selectedItemChange(item) {
        $log.info('Item changed to ' + JSON.stringify(item));
    }


    // Build `states` list of key/value pairs
    function loadAll() {
        $scope.clientsDdl = [];
        angular.forEach($scope.clients, function (value, key) {
            $scope.clientsDdl.push({
                display: value.id + ' ' + value.firstName + ' ' + value.lastName,
                value: value.id
            })
        })
        return $scope.clientsDdl;
    }


     // Create filter function for a query string

    function createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);

        return function filterFn(state) {
            return (state.value.indexOf(lowercaseQuery) === 0);
        };
    }

  


}])

.controller("BarCtrl", ['$scope', '$timeout', function ($scope, $timeout) {

    $scope.labels = [];
    var i = 1;
    for (i = 1; i <= 31; i++) {
        $scope.labels.push(i);
    }

    $scope.series = ['Novi članovi', 'Stalni članovi', 'Gosti'];

    $scope.data = [
      [10, 12, 24, 16, 18, 26, 8, 10, 19, 9, 10, 12, 24, 16, 18, 26, 8, 10, 19, 9, 10, 12, 24, 16, 18, 26, 8, 10, 19, 9, 13],
      [18, 26, 8, 10, 19, 9, 10, 12, 24, 16, 18, 26, 8, 10, 19, 9, 10, 12, 24, 16, 18, 26, 8, 10, 19, 9, 13, 10, 12, 24, 16],
      [2, 3, 5, 2, 8, 4, 2, 6, 3, 4, 2, 2, 3, 5, 2, 8, 4, 2, 6, 3, 4, 2, 3, 5, 2, 8, 4, 2, 6, 3, 4 ]
    ];

    $scope.options = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: true
        }
    }

    $scope.colors = ["rgb(159,204,0)", "rgb(250,109,33)", "rgb(150,100,22)"];
}])





;