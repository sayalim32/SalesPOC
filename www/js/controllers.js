angular.module('starter.controllers', ['chart.js'])

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

.controller("salesDashBoardCtrl", function($scope) {
 console.log('inside salesDashBoardCtrl');
    $scope.graph = {};
  $scope.graph.data = [
    //Awake
    [16, 15, 20, 12, 16, 12, 8],
    //Asleep
    [8, 9, 4, 12, 8, 12, 14]
  ];
  $scope.graph.labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  $scope.graph.series = ['Awake', 'Asleep'];
 
});