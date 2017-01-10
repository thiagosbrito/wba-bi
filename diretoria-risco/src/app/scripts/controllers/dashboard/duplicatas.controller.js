'use strict';

angular.module('wbaBi')

  .controller('DuplicatasController', [
    '$scope',
    '$state',
    'apiDuplicatas',
    function ($scope, $state, apiDuplicatas) {
      
      $scope.pieChart = {
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
      }
      $scope.donutChart = {
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
          type: 'pie',
          name: 'VALOR TITULO',
          innerSize: 80,
          data: []
        }],
        title: {
            text: ''
        },

        loading: false
      }
      $scope.barChart = {
        options: {
          chart: {
            type: 'column'
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
          type: 'bar',
          data: []
        }],
        title: {
            text: ''
        },
        loading: false
      }

      $scope.getTipoCobranca = function () {
        apiDuplicatas.consultaTipoCobranca().then(
          function (res) {
            var tiposCobranca = res.data.data;
            var arrTCobranca = [];
            angular.forEach(tiposCobranca, function (value) {
              arrTCobranca.push({name: value[0], y: value[1]})
            });
            $scope.pieChart.series[0].data = arrTCobranca;
          }
        )
      }();

      $scope.getChecagem = function () {
        apiDuplicatas.consultaChecagem().then(
          function (res) {
            var checagem = res.data.data;
            var arrChecagem = [];
            angular.forEach(checagem, function (value) {
              arrChecagem.push({name: value[0], y: value[1]})
            });
            $scope.donutChart.series[0].data = arrChecagem;
          }
        )
      }();

      $scope.splitter = function(str) {
        str = str.replace(/([A-Z])/g, ' $1');
        str = str;
        return str;
      };

      $scope.getLiquidezHistorica = function () {
        apiDuplicatas.consultaLiquidezHistorica().then(
          function (res) {
            var liquidez = res.data.data;
            var arrLiquidez = [];
            angular.forEach(liquidez, function (value) {
              arrLiquidez.push({name: value[0], y: value[1]})
            });
            $scope.barChart.series[0].data = arrLiquidez;
          }
        )
      }();

    }
  ])