'use strict';

angular.module('wbaBi')

  .controller('MonitoreController', [
    '$scope',
    '$state',
    function ($scope, $state) {
      

      $scope.monitoreChart = {
        options: {
          chart: {
            renderTo: 'GraficoMonitore',
            type: 'line',
            marginRight: 130,
            marginBottom: 25
          },
          title: {
            text: null,
            x: -20 //center
          },
          subtitle: {
            text: null,
            x: -20
          },
          xAxis: {
            categories: 'categoria_'
          },
          yAxis: {
            title: {
              text: 'Monitore'
            },
            plotLines: [{
              value: 0,
              width: 1,
              color: '#808080'
            }]
          },
          tooltip: {
            formatter: function() {
              return '<b>'+ this.series.name +'</b><br/>'+
              this.x +': '+ this.y ;
            }
          },
          legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -10,
            y: 100,
            borderWidth: 0
          },
          credits: {
            enabled: false
          }
        },
        series: [
          {
            name: 'Protesto',
            data: []
          },
          {
            name: 'Cheques s/Fundo',
            data: []
          },
          {
            name: 'Falencia',
            data: []
          }
        ]
      }
    }
  ])