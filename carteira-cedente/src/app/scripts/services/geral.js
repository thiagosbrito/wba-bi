'use strict';
angular.module('wbaBi')
  .factory('apiGeral', ['$http', function ($http) {

    var api = {};

    var _consultaTipoProduto = function () {
      return $http({
        url: 'app/scripts/services/mockups/tipoDeProduto.json',
        method: 'GET'
      }).then(function (results) {
        return results;
      });
    };

    var _consultaUltimasOperacoes = function () {
      return $http({
        url: 'app/scripts/services/mockups/ultimasOperacoes.json',
        method: 'GET'
      }).then(function (results) {
        return results
      });
    }

    var _consultaVOP = function () {
      return $http({
        url: 'app/scripts/services/mockups/vop.json',
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

    api.consultaTipoProduto = _consultaTipoProduto;
    api.consultaUltimasOperacoes = _consultaUltimasOperacoes;
    api.consultaVOP         = _consultaVOP;
    api.getEmpresas         = _getEmpresas;
    api.getCedentes         = _getCedentes;

    api.g

    return api;

}]);