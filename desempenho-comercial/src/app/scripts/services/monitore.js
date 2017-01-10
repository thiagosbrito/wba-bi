'use strict';
angular.module('wbaBi')
  .factory('apiMonitore', ['$http', function ($http) {

    var api = {};

    var _getCedentes = function () {
      return $http({
        url: 'app/scripts/services/mockups/cedentes.json',
        method: 'GET'
      }).then(function (results){
        return results;
      })
    };
    
    var _getEmpresas = function () {
      return $http({
        url: 'app/scripts/services/mockups/empresas.json',
        method: 'GET'
      }).then(function (results){
        return results;
      })
    };

    
    api.getEmpresas         = _getEmpresas;
    api.getCedentes         = _getCedentes;

    api.g

    return api;

}]);