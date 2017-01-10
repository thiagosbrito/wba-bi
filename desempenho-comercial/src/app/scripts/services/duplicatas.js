'use strict';
angular.module('wbaBi')
  .factory('apiDuplicatas', ['$http', function ($http) {

    var api = {};

    var _consultaTipoCobranca = function () {
      return $http({
        url: 'app/scripts/services/mockups/tipoCobranca.json',
        method: 'GET'
      }).then(function (results) {
        return results;
      });
    };

    var _consultaChecagem = function () {
      return $http({
        url: 'app/scripts/services/mockups/ultimasOperacoes.json',
        method: 'GET'
      }).then(function (results) {
        return results
      });
    }

    var _consultaLiquidezHistorica = function () {
      return $http({
        url: 'app/scripts/services/mockups/liquidezHistorica.json',
        method: 'GET'
      }).then(function (results) {
        return results
      }); 
    }

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

    api.consultaTipoCobranca = _consultaTipoCobranca;
    api.consultaChecagem = _consultaChecagem;
    api.consultaLiquidezHistorica         = _consultaLiquidezHistorica;
    api.getEmpresas         = _getEmpresas;
    api.getCedentes         = _getCedentes;

    api.g

    return api;

}]);