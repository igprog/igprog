angular.module('app', ['ngMaterial', 'chart.js', 'ngStorage'])

    .config(function($mdDateLocaleProvider) {
        $mdDateLocaleProvider.formatDate = function(date) {
            return moment(date).format("DD.MM.YYYY");
        }
    })

.controller('AppCtrl', ['$scope', '$mdDialog', '$timeout', '$q', '$log', '$rootScope', '$localStorage', function ($scope, $mdDialog, $timeout, $q, $log, $rootScope, $localStorage) {
    $scope.currTpl = 'assets/partials/dashboard.html';
    $scope.activeTab = 0;
    $scope.toggleTpl = function (x, y) {
        $scope.currTpl = x;
        $scope.activeTab = y;
    };

    $scope.today = new Date();

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
            'service': 'Crossfit',
            'clientType': 'Stalni član',
            'feeType': 'Mjesečna članarina',
            'fee': '200',
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
            'service': 'Pilates',
            'clientType': 'Stalni član',
            'feeType': 'Godišnja članarina',
            'fee': '200',
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
            'service': 'Solarij',
            'clientType': 'Gost',
            'feeType': 'Jedan trening',
            'fee': '75',
            'dateFrom': '2016-12-12',
            'dateTo': '2017-01-17',
            'isActive': '1'
        }
    ];

    $scope.services = [
      {
          'value': '1',
          'text': 'Crossfit'
      },
      {
          'value': '2',
          'text': 'Pilates'
      },
      {
          'value': '3',
          'text': 'Solarij'
      },
      {
          'value': '4',
          'text': 'Sauna'
      }
    ];

    $scope.clientTypes = [
        {
            'value': '1',
            'text': 'Stalni član'
        },
        {
            'value': '2',
            'text': 'Gost'
        }
    ];

    $scope.feeTypes = [
        {
            'value': '0',
            'text': 'Jedan trening',
            'fee': '50'
        },
        {
            'value': '7',
            'text': 'Jedan tjedan',
            'fee': '100'
        },
        {
            'value': '31',
            'text': 'Mjesečna članarina',
            'fee': '200'
        },
        {
            'value': '365',
            'text': 'Godišnja članarina',
            'fee': '2000'
        }
    ];

    //$scope.fees = [
    //    {
    //        'value': '50',
    //        'text':  '50'
    //    },
    //    {
    //        'value': '100',
    //        'text': '100'
    //    },
    //    {
    //        'value': '200',
    //        'text': '200'
    //    },
    //    {
    //        'value': '2000',
    //        'text': '2000'
    //    }
    //]

    $scope.newClient = function(){
        $scope.client = 
        {
            'id': Math.floor((Math.random() * 10000) + 1),
            'firstName': '',
            'lastName': '',
            'birthDate': '',
            'phone': '',
            'email': '',
            'service': '',
            'clientType': '',
            'feeType': '',
            'fee': '',
            'dateFrom': new Date(),
            'dateTo': '',
            'isActive': 0
        }
        $scope.showSaveMessage = false;
        // $scope.showClient($scope.client);
    };

    $scope.client = $scope.newClient;

    $scope.membershipType = function (x) {
        var date = new Date();
        $scope.client.fee = x.fee;
        $scope.client.dateTo = new Date(date.setDate(date.getDate() + parseInt(x.value)));
    }



    //CheckIn
    if ($localStorage.currentClients == undefined) {
        $scope.currentClients = [];
    } else {
        $scope.currentClients = $localStorage.currentClients
    }
   // if ($scope.currentNumberOfClients == undefined) {
     //   $scope.currentNumberOfClients = 0;
   // } //else {
    //    $scope.currentNumberOfClients = $scope.currentClients.length;
    //}

   // $scope.numberOfClientsFilter = function (clientType) {
       
        //array.filter(value => value.age === 23).length;
       // $scope.clients.filter(value => value.clientType === clientType).length;


      // return  $scope.clients.length;
    //  }

    $scope.clientsFilter = function (clientType) {
        var obj = $scope.clients;
        return function (obj) {
            return obj.clientType === clientType;
        };
    };

    $scope.currentNumberOfClients = function () {
        return $scope.currentClients.length;
    }

    $scope.expirationMembership = function () {
        var count = 0;
        angular.forEach($scope.clients, function (value, key) {
            if ($scope.getDateDiff(value.dateTo) < 0) {
                count ++;
            }
        })
        return count;
    }

    $scope.NumberOfNewMembers = function () {
        var count = 0;
        angular.forEach($scope.clients, function (value, key) {
            if ($scope.getDateDiff(value.dateFrom) > -30) {
                console.log($scope.getDateDiff(value.dateFrom));
                count++;
            }
        })
        return count;
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
              //  var month = now.getMonth() < 10 ? '0' + now.getMonth() + 1 : now.getMonth() + 1;
                var month = now.getMonth() + 1;
             //   var day = now.getDate() < 10 ? '0' + now.getDate() : now.getDate();
                var day = now.getDate();
                var hours = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
                var minutes = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
                $scope.currentClients.splice(0, 0, {
                    id: value.id,
                    firstName: value.firstName,
                    lastName: value.lastName,
                    service: value.service,
                    checkInDate: day + '.' + month + '.' + year,
                    checkInTime: hours + ':' + minutes
                })
                self.selectedItem = null;
                self.searchText = "";
            }
        })
        $scope.currentNumberOfClients();
        //$scope.currentNumberOfClients = $scope.currentClients.length;
        //$rootScope.currentNumberOfClients = $scope.currentClients.length;
    }

    $scope.removeCurrentClient = function (x) {
        $scope.currentClients.splice(x, 1);
        $localStorage.currentClients = $scope.currentClients;
        $scope.currentNumberOfClients();
    }

    $scope.showSaveMessage = false;
    $scope.save = function (client) {
        for (i = 0; i < $scope.clients.length; i++) {
            //update client
            if ($scope.clients[i].id == client.id) {
                $scope.clients[i].firstName = client.firstName;
                $scope.clients[i].lastName = client.lastName;
                $scope.clients[i].birthDate = client.birthDate;
                $scope.clients[i].phone = client.phone;
                $scope.clients[i].email = client.email;
                $scope.clients[i].service = client.service;
                $scope.clients[i].clientType = client.clientType;
                $scope.clients[i].feeType = client.feeType;
                $scope.clients[i].fee = client.fee;
                $scope.clients[i].dateFrom = client.dateFrom;
                $scope.clients[i].dateTo = client.dateTo;
                $scope.clients[i].isActive = client.isActive;
               // $rootScope.clients = $scope.clients;
                $localStorage.clients = $scope.clients;
                //   $scope.client = $scope.newClient;
                $scope.newClient();
                $scope.showSaveMessage = true;
                loadAll();
              //  $mdDialog.hide();
                return;
            }
        }
        //save client
        $scope.clients.push(client);
      //  $rootScope.clients = $scope.clients;
        $localStorage.clients = $scope.clients;
        $scope.showSaveMessage = true;
        loadAll();
      //  $mdDialog.hide();
    };


    $scope.showClient = function (x) {
                $scope.client.id = x.id
                $scope.client.firstName = x.firstName;
                $scope.client.lastName = x.lastName;
                $scope.client.birthDate = x.birthDate;
                $scope.client.phone = x.phone;
                $scope.client.email = x.email;
                $scope.client.service = x.service;
                $scope.client.clientType = x.clientType;
                $scope.client.feeType = x.feeType;
                $scope.client.fee = x.fee;
                $scope.client.dateFrom = x.dateFrom;
                $scope.client.dateTo = x.dateTo;
                $scope.client.isActive = x.isActive;
      $scope.toggleTpl('assets/partials/newclient.html', 2);

        //$mdDialog.show({
        //    controller: DialogController,
        //    templateUrl: 'assets/partials/popup/clientpopup.html',
        //    parent: angular.element(document.body),
        //    targetEvent: x,
        //    clickOutsideToClose: true,
        //    fullscreen: $scope.customFullscreen, // Only for -xs, -sm breakpoints.
        //    client: x,
        //    clients: $scope.clients,
        //    clientsDdl: $scope.clientsDdl,
        //    clientTypes: $scope.clientTypes,
        //    feeTypes: $scope.feeTypes,
        //    fees: $scope.fees

        //})
        //.then(function (answer) {
        //    $scope.status = 'You said the information was "' + answer + '".';
        //}, function () {
        //    $scope.status = 'You cancelled the dialog.';
        //});


    };

    function DialogController($scope, $mdDialog, client, clients, $rootScope, clientsDdl, clientTypes, feeTypes, fees, $localStorage) {
        $scope.client = client;
        $scope.clients = clients;
        $scope.clientTypes = clientTypes;
        $scope.feeTypes = feeTypes;
        $scope.fees = fees;
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
                    $scope.clients[i].service = client.service;
                    $scope.clients[i].clientType = client.clientType;
                    $scope.clients[i].feeType = client.feeType;
                    $scope.clients[i].fee = client.fee;
                    $scope.clients[i].dateFrom = client.dateFrom;
                    $scope.clients[i].dateTo = client.dateTo;
                    $scope.clients[i].isActive = client.isActive;
                    $rootScope.clients = $scope.clients;
                    $localStorage.clients = $scope.clients;
                 //   $scope.client = $scope.newClient;
                    loadAll();
                    $mdDialog.hide();
                    return;
                }
            }
            //save client
            $scope.clients.push(client);
            $rootScope.clients = $scope.clients;
            $localStorage.clients = $scope.clients;
            loadAll();
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

   // self.newState = newState;

    //function newState(state) {
    //    alert("Sorry! You'll need to create a Constitution for " + state + " first!");
    //}

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
        if ($localStorage.clients != undefined) {
            $scope.clients = $localStorage.clients;
        }
        angular.forEach($scope.clients, function (value, key) {
            $scope.clientsDdl.push({
                display: value.id + ' ' + value.firstName + ' ' + value.lastName,
                value: value.id
            })
        })
        var self = this;
        self.states = $scope.clientsDdl;
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

    $scope.colors = ["rgb(55,155,150)", "rgb(51,183,71)", "rgb(183,237,47)"];

}])



.controller("CalendarCtrl", ['$scope', '$localStorage', function ($scope, $localStorage) {
    //Test calendar

    $scope.testContent = localStorage.testContent || '';

    YUI().use(
    'aui-scheduler',
    function (Y) {
        var events = [
        {
            content: $scope.testContent,  // 'Partial Lunar Eclipse',
            endDate: new Date(2013, 3, 25, 5),
            startDate: new Date(2013, 3, 25, 1)
        },
        {
            color: "#8d8",
            content: 'Earth Day Lunch',
            disabled: true,
            endDate: new Date(2013, 3, 22, 13),
            meeting: true,
            reminder: true,
            startDate: new Date(2013, 3, 22, 12)
        },
        {
            content: "Weeklong",
            endDate: new Date(2013, 3, 27),
            startDate: new Date(2013, 3, 21)
        }
        ];

        var agendaView = new Y.SchedulerAgendaView();
        var dayView = new Y.SchedulerDayView();
        var weekView = new Y.SchedulerWeekView();
        var monthView = new Y.SchedulerMonthView();

        var eventRecorder = new Y.SchedulerEventRecorder();

        new Y.Scheduler(
        {
            activeView: weekView,
            boundingBox: '#myScheduler',
            date: new Date(2013, 3, 25),
            eventRecorder: eventRecorder,
            items: events,
            render: true,
            views: [dayView, weekView, monthView, agendaView]
        }
      );
    }
    );


}])



;