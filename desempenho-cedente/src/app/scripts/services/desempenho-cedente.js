'use strict';

angular.module('wbaBi')
  .factory('apiDesempenhoCedente', [
    '$http',
    function($http){
      
      var api = {};


      var _getRecebiveisCarteira = function () {
        return $http({
          url: 'app/scripts/services/mockups/recebiveis-carteira.json',
          method: 'GET'
        }).then(
          function (results) {
            return results;
          }
        )
      }

      var _getEvolucaoOperacao = function () {
        return $http({
          url: 'app/scripts/services/mockups/evolucao-operacao.json',
          method: 'GET'
        }).then(
          function (results) {
            return results;
          }
        )
      }

      var _getEvolucaoOperacaoTop5 = function () {
        return $http({
          url: 'app/scripts/services/mockups/evolucao-operacao-top-5.json',
          method: 'GET'
        }).then(
          function (results) {
            return results;
          }
        )
      }

      api.getRecebiveisCarteira     = _getRecebiveisCarteira;
      api.getEvolucaoOperacao       = _getEvolucaoOperacao;
      api.getEvolucaoOperacaoTop5   = _getEvolucaoOperacaoTop5;

      return api;

    }
  ])