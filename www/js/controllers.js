angular.module('starter.controllers', ['ngCordova','starter.services','chart.js','nvd3'])


.factory('UserService', function ($rootScope, $q) {
        return {
            isAuthorized: function () {
              console.log('inside isauth function');
                if (window.sessionStorage.getItem('user') === null ) {
                  console.log('inside false');
                    $rootScope.$broadcast('user.notAuthorized'); 
                    return false;
                }
                return true;
            },

            authorize: function (email, password) {
                deffered = $q.defer();
                // ...
                return deffered.promise;
            }
        };
    })

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('welcomeCtrl', function($scope,$state) {
  console.log('inside welcomeCtrl');

  $scope.data = [
    {
      rank: "1",
      friendName: "Sophia Lee",
      totalPoints: "52,200",
     
    },
    {
      rank: "2",
      friendName: "Lee Lee Chin",
      totalPoints: "30,420",
     
    },
    {
      rank: "3",
      friendName: "Joshua Cheong",
      totalPoints: "25,300",
     
    }
  ];

  $scope.joinEvent =function (){
  console.log('inside function join event');
$state.go('app.teamsales');
}
  
})

.controller('teamSalesCtrl', function($scope,$state) {
  console.log('inside teamSalesCtrl');


  
$scope.findTeam =function (){
  console.log('inside function join event');
$state.go('app.findteam');
}
  
})

.controller('findTeamCtrl', function($scope,$state) {
  console.log('inside teamSalesCtrl');


  
$scope.joinTeam =function (){
  console.log('inside function join team');
$state.go('app.salesdash');
}
  
})

.controller('rewardsCtrl', function ($scope, $state) {
  console.log('inside rewardsCtrl');
  $scope.payPoints =function (){
  console.log('inside function join team');
$state.go('app.paywithpoints');
}
        
    })


.controller('TxnCtrl', function ($scope, $state,$ionicPopup, $ionicModal) {
   console.log('inside TxnCtrl');
    $scope.data = { "pinnumber":null};
    $scope.payTxnpoints =function(){
      alert ('Transaction is sucesssful');
    }
        $ionicModal.fromTemplateUrl('templates/sendotp.html', function(modal) {

            $scope.oModal1 = modal;
        }, {
          id:1,
            scope: $scope,
            animation: 'slide-in-up'
        });

         $ionicModal.fromTemplateUrl('templates/transactions.html', function(modal) {

            $scope.oModal2 = modal;
        }, {
          id:2,
            scope: $scope,
            animation: 'slide-in-up'
        });


        // Open our new task modal
        $scope.opensendotp = function() {
            $scope.oModal1.show();
        };

        $scope.closesendotp = function() {
          $scope.data.pinnumber = null;
            $scope.oModal1.hide();
        };

      $scope.openTxn = function() {
            $scope.oModal1.hide();
            $scope.oModal2.show();
        };

        $scope.closeTxn = function() {
          $scope.data.pinnumber = null;
            $scope.oModal2.hide();
            $state.go('app.rewards');
        };
      })

.controller('CardCtrl', function ($scope, $state,$ionicPopup, $ionicModal) {
   console.log('inside CardCtrl');
    
    $scope.submitform =function(){
      alert ('Details are submitted successfully.');
      $scope.oModal.hide();

    }
        $ionicModal.fromTemplateUrl('templates/signup.html', function(modal) {

            $scope.Modal = modal;
        }, {
          id:1,
            scope: $scope,
            animation: 'slide-in-up'
        });


        // Open our new task modal
        $scope.opensignup = function() {
            $scope.oModal.show();
        };

        $scope.closesignup = function() {
            $scope.oModal.hide();
        };
      })

.controller("recFriendsCtrl", function($scope, $cordovaSocialSharing) {
 
    $scope.shareAnywhere = function() {
        $cordovaSocialSharing.share("Use my Citi Promo Code, WWCITI77, and get up to $120 Cash Back on 2 New Credit Cards!", "$120 Cash Back Promotion",null, "https://www.citibank.com.sg");
    }
 
})

.controller("salesTrackCtrl", function($scope, $cordovaSocialSharing) {
 
    $scope.shareAnywhere = function() {
        $cordovaSocialSharing.share("Hey Chin Yan,just wanted to remind you to continue the Citi card signup process.Have a wonderful day ahead!", null,null, null);
    } 
})

.controller("salesDashBoardCtrl", function($scope) {
 console.log('inside salesDashBoardCtrl');
  $scope.vm = {};

  $scope.vm.options = {  
      chart: {
        type: 'multiBarChart',
        height: 300,
        x: function(d){return d.label;},
        y: function(d){return d.value;},
        showControls: false,
        showValues: true,
        duration: 500,
        margin: {left:100,top:50,bottom:50,right:100},
        xAxis: {
          showMaxMin: false
        },
        yAxis: {
          tickValues: 0,
          showMaxMin: true,
          tickFormat: function(d) {
            return d3.format(',.')(d);
          }
        }
      }
    };

  $scope.vm.stars = {  
    "Mon" : [7210,0],
    "Tue" : [6310,0],
    "Wed" : [3610,0],
    "Thu" : [5500,0],
    "Fri" : [8110,0],
    "Sat" : [1009,0],
    "Sun" : [2620,0]
  };

    $scope.vm.data = [  
      {
        "key": "Points",
        "color": "#1f77b4",
        "values": [
           { 
             "label" : "Mon" , 
             "value" : $scope.vm.stars.Mon[0] 
           },
           { 
             "label": "Tue" , 
             "value" : $scope.vm.stars.Tue[0] 
           },
           { 
             "label" : "Wed" , 
             "value" : $scope.vm.stars.Wed[0] 
           },
           { 
             "label" : "Thu" , 
             "value" : $scope.vm.stars.Thu[0] 
           },
           { 
             "label" : "Fri" , 
             "value" : $scope.vm.stars.Fri[0] 
           },
           { 
             "label" : "Sat" , 
             "value" : $scope.vm.stars.Sat[0] 
           },
           { 
             "label" : "Sun" , 
             "value" : $scope.vm.stars.Sun[0] 
           }
        ]
      },
      {
        "key": "",
        "color": "#ffffff",
        "values": [
           { 
             "label" : "Mon" , 
             "value" : $scope.vm.stars.Mon[1] 
           },
           { 
             "label": "Tue" , 
             "value" : $scope.vm.stars.Tue[1] 
           },
           { 
             "label" : "Wed" , 
             "value" : $scope.vm.stars.Wed[1] 
           },
           { 
             "label" : "Thu" , 
             "value" : $scope.vm.stars.Thu[1] 
           },
           { 
             "label" : "Fri" , 
             "value" : $scope.vm.stars.Fri[1] 
           },
           { 
             "label" : "Sat" , 
             "value" : $scope.vm.stars.Sat[1] 
           },
           { 
             "label" : "Sun" , 
             "value" : $scope.vm.stars.Sun[1] 
           }
        ]
      }
    ];
})


.controller('HomeCtrl', function ($scope, $state,UserService,$ionicPopup, $ionicModal,LoginService) {
   console.log('inside loginctrl');
  $scope.data = {};
      var initialized = false;

        $ionicModal.fromTemplateUrl('templates/home.html', function(modal) {

            $scope.oModal1 = modal;
        }, {
          id:1,
            scope: $scope,
            animation: 'slide-in-up'
        });

         $ionicModal.fromTemplateUrl('templates/login.html', function(modal) {

            $scope.oModal2 = modal;
        }, {
          id:2,
            scope: $scope,
            animation: 'slide-in-up'
        });

         $ionicModal.fromTemplateUrl('templates/signup.html', function(modal) {

            $scope.oModal3 = modal;
        }, {
          id:3,
            scope: $scope,
            animation: 'slide-in-up'
        });

       $scope.opensignup = function() {
            $scope.oModal3.show();
        };

        $scope.closesignup = function() {
            $scope.oModal3.hide();
        };
        // Open our new task modal
        $scope.openHome = function() {
            $scope.oModal1.show();
        };

        $scope.closeHome = function() {
            $scope.oModal1.hide();
        };

        $scope.doLogOut = function() {
          window.sessionStorage.setItem("user", null);
          var isauth= window.sessionStorage.getItem("user");
              console.log('logout: ', isauth);
            $scope.oModal1.show();
        };

      $scope.openLogin = function() {
            $scope.oModal2.show();
        };

        $scope.closeLogin = function() {
            $scope.oModal2.hide();
        };

    $scope.doLogin = function() {
      console.log('inside doLogin function');
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $scope.oModal1.hide();
            $scope.oModal2.hide();
            $state.go('app.welcome');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    }
        $scope.$on('user.notAuthorized', function(e) {
            if (!initialized) {
                initialized = true;
                //$scope.openModal();
                setTimeout( function() {$scope.openHome()}, 500);
               window.sessionStorage.setItem("user", "AUTH");
               var isauth= window.sessionStorage.getItem("user");
              console.log('isauth: ', isauth);
               

            }
        });

        UserService.isAuthorized();
      })

.controller('LoginCtrl', function ($scope, $state,UserService,$ionicPopup, $ionicModal,LoginService) {
  console.log('inside LoginCtrl');
  $scope.data = {};
        var initialized = false;

        $ionicModal.fromTemplateUrl('templates/login.html', function(modal) {
            $scope.modal = modal;
        }, {
            scope: $scope,
            animation: 'slide-in-up'
        });

        // Open our new task modal
        
    });
