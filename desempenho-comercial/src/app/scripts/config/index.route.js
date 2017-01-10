'use strict';

angular.module('wbaBi')
.config([
  '$stateProvider',
  '$urlRouterProvider',
  '$httpProvider',
  '$locationProvider',
  function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
    'use strict';

    // $locationProvider.html5mode = true;
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.headers.common = {};
    $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {};

    $urlRouterProvider.otherwise('/dashboard/geral');

    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'app/views/dashboard.html',
        controller: 'DashboardController'
      })

      .state('dashboard.geral', {
        url: '/geral',
        templateUrl: 'app/views/geral.html',
        controller: 'GeralController'
      })

      .state('dashboard.duplicatas', {
        url: '/duplicatas',
        templateUrl: 'app/views/duplicatas.html',
        controller: 'DuplicatasController'
      })

      .state('dashboard.sacado', {
        url: '/sacado',
        templateUrl: 'app/views/sacado.html',
        controller: 'SacadoController'
      })

      .state('dashboard.monitore', {
        url: '/monitore',
        templateUrl: 'app/views/monitore.html',
        controller: 'MonitoreController'
      })

  }
]);
