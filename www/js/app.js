// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','chart.js','starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html'
      }
    }
  })

  .state('app.welcome', {
    url: '/welcome',
    views: {
      'menuContent': {
        templateUrl: 'templates/welcome.html'
      }
    }
  })

  .state('app.teamsales', {
    url: '/teamsales',
    views: {
      'menuContent': {
        templateUrl: 'templates/teamsales.html'
      }
    }
  })

   .state('app.findteam', {
    url: '/findteam',
    views: {
      'menuContent': {
        templateUrl: 'templates/findteam.html'
      }
    }
  })
   .state('app.salesdash', {
    url: '/salesdash',
    views: {
      'menuContent': {
        templateUrl: 'templates/salesdashboard.html'
      }
    }
  })

   .state('app.rewards', {
    url: '/rewards',
    views: {
      'menuContent': {
        templateUrl: 'templates/rewards.html'
      }
    }
  })

   .state('app.paywithpoints', {
    url: '/paywithpoints',
    views: {
      'menuContent': {
        templateUrl: 'templates/paywithpoints.html'
      }
    }
  })
      .state('app.sendotp', {
    url: '/sendotp',
    views: {
      'menuContent': {
        templateUrl: 'templates/sendotp.html'
      }
    }
  })

 .state('app.transactions', {
    url: '/transactions',
    views: {
      'menuContent': {
        templateUrl: 'templates/transactions.html'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/welcome');
});
