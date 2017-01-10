// desempenho-cedente.controller.js
'use strict';

angular.module('wbaBi')
  .controller('DesempenhoCedenteController', [
    '$scope',
    '$state',
    'apiDesempenhoCedente',
    function ($scope, $state, apiDesempenhoCedente) {
      
      $scope.recebiveisCarteiraChart = {
        options: {
          chart: {
            type: 'pie'
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                enabled: false,
                color: '#000000',
                connectorColor: '#000000',
                formatter: function() {
                    return '<b>'+ this.point.name +':</b><br> '+ this.y;
                }
              },
              showInLegend: true
            }
          },
          legend: {
            layout: 'horizontal',
            align: 'left',
            verticalAlign: 'bottom',
            x: 15,
            y: 0,
            floating: false
          }
        },
        series: [{
          data: []
        }],
        title: {
          text: ''
        },
        loading: false,
        func: function (chart) {
          console.log(chart)
        }
      };
      $scope.getRecebiveisCarteira = function () {
        apiDesempenhoCedente.getRecebiveisCarteira().then(
          function (res) {
            var dadosGrafico = res.data;
            var array = [];
            angular.forEach(dadosGrafico, function (value) {
              console.log(value);
              array.push({name: value.TIPORECEBIVEIS, y: parseFloat(value.VALORTITULO)})
            });
            $scope.recebiveisCarteiraChart.series[0].data = array;
          }
        )
      }();

      $scope.getEvolucaoOperacao = function (){
        apiDesempenhoCedente.getEvolucaoOperacao().then(
          function (res) {
            console.log(res.data);
            var dadosGrafico = res.data;
            var array = [];
            angular.forEach(dadosGrafico, function (value) {
              array.push({name: value.TIPORECEBIVEIS, y: parseFloat(value.VALORTITULO)})
            });
            $scope.recebiveisCarteiraChart.series[0].data = array;
          }
        )
      }();

      $scope.getEvolucaoOperacaoTop5 = function () {
        apiDesempenhoCedente.getEvolucaoOperacaoTop5().then(
          function (res) {
            console.log(res.data);
          }
        )
      }();



      $scope.evolucaoOperacaoChart = {
        options: {
          chart: {
            type: 'pie'
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                enabled: false,
                color: '#000000',
                connectorColor: '#000000',
                formatter: function() {
                    return '<b>'+ this.point.name +':</b><br> '+ this.y;
                }
              },
              showInLegend: true
            }
          },
          legend: {
            layout: 'horizontal',
            align: 'left',
            verticalAlign: 'bottom',
            x: 15,
            y: 0,
            floating: false
          }
        },
        series: [{
          data: []
        }],
        title: {
          text: ''
        },
        loading: false,
        func: function (chart) {
          console.log(chart)
        }
      };
      $scope.evolucaoOperacaoTop5Chart = {
        options: {
          chart: {
            type: 'pie'
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                enabled: false,
                color: '#000000',
                connectorColor: '#000000',
                formatter: function() {
                    return '<b>'+ this.point.name +':</b><br> '+ this.y;
                }
              },
              showInLegend: true
            }
          },
          legend: {
            layout: 'horizontal',
            align: 'left',
            verticalAlign: 'bottom',
            x: 15,
            y: 0,
            floating: false
          }
        },
        series: [{
          data: []
        }],
        title: {
          text: ''
        },
        loading: false,
        func: function (chart) {
          console.log(chart)
        }
      };
      

    }
  ])