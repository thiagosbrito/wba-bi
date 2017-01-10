'use strict';

angular.module('wbaBi')

  .controller('GeralController', [
    '$scope',
    '$state',
    'apiGeral',
    '$filter',
    function ($scope, $state, apiGeral, $filter) {

      $scope.pageSize = 10;
      $scope.currentPage = 1;

      $scope.getEmpresas = function () {
        apiGeral.getEmpresas().then(
          function (res) {
            $scope.empresas = res.data.data;
          },
          function (err) {
            console.log(err)
          }
        )
      }();
      $scope.getCedentes = function (id) {
        apiGeral.getCedentes(id).then(
          function (res) {
            $scope.cedentes = res.data.data;
          },
          function (err) {
            console.log(err)
          }
        )
      }();

      $scope.chartConfig = {
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
      $scope.chartConfig2 = {
        options: {
          chart: {
            type: 'area',
            zoomType: 'x',
            spacingRight: 20
          },
          xAxis: {
            type: 'date',
            title: {
              text: null
            }
          },
          yAxis: {
            title:{
            text: ''
            },
            min: 0.6,
            startOnTick: false,
            showFirstLabel: true
          },
          tooltip: {
              shared: true
          },
          legend: {
              enabled: false
          }, credits: {
              enabled: false
          },
          plotOptions: {
            area: {
              fillColor: {
                linearGradient: { x1: 1, y1: 0, x2: 0, y2: 1},
                stops: [
                  [0, Highcharts.getOptions().colors[1]],
                  [1, 'rgba(2,0,0,0)']
                ]
              },
              lineWidth: 1,
              marker: {
                enabled: false,
                states: {
                  hover: {
                    enabled: true,
                    radius: 3
                  }
                }
              },
              shadow: true,
              states: {
                hover: {
                  lineWidth: 1
                }
              }
            }
          }
        },
        series: [{
          type: 'area',
          name: 'VALOR TITULO',
          data: []
        }],
        title: {
            text: ''
        },

        loading: false
      }
      

      $scope.getTipoData = function () {
        apiGeral.consultaTipoProduto().then(
          function (res) {
            var dadosGrafico = res.data.data;
            var array = [];
            angular.forEach(dadosGrafico, function (value) {
              array.push({name: value[0], y: value[1]})
            });
            $scope.chartConfig.series[0].data = array;
          }
        )
      }();
      $scope.splitter = function(str) {
        str = str.replace(/([A-Z])/g, ' $1');
        str = str;
        return str;
      };
      $scope.getUltimasOperacoes = function () {
        apiGeral.consultaUltimasOperacoes().then(
          function (res) {
            var columnNames = res.data.metadata.columns;
            $scope.columnData = res.data.data;
            $scope.colunas = [];
            angular.forEach(columnNames, function (value, key) {
              if (key != 0) {
                if(value == 'DATA') {
                  value = value.toLowerCase();
                }
                $scope.colunas.push(value.replace(/([A-Z])/g, ' $1').replace(/^./, function(str) {return str.toUpperCase()}));
              }
            });
          }
        )
      }();

      $scope.getVop = function () {
        apiGeral.consultaVOP().then(
          function (res) {
            var dadosArea = res.data.data;
            var arr = [];
            angular.forEach(dadosArea, function (value) {
              arr.push({name: value[0], y: value[1]})
            });
            $scope.chartConfig2.series[0].data = arr;
          }
        )
      }()

    }
  ])