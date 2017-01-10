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

    $urlRouterProvider.otherwise('/desempenho-cedente');

    $stateProvider
      .state('desempenho-cedente', {
        url: '/desempenho-cedente',
        templateUrl: 'app/views/desempenho-cedente.html',
        controller: 'DesempenhoCedenteController'
      })

  }
]);
