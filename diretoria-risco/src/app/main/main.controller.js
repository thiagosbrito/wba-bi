'use strict';

angular.module('wbaBi')
  .controller('MainController', [
    '$scope',
    '$timeout',
    'webDevTec',
    'toastr',
    'apiTeste',
    function ($scope, $timeout, webDevTec, toastr, apiTeste) {
      // var vm = this;
      // vm.teste = function () {
      //   apiTeste.consultaCep().then(
      //     function (res) {
      //       console.log(res);
      //     }
      //   )
      // };
      // vm.teste();
    }
  ])

// (function() {
//   'use strict';

//   angular
//     .module('wbaBi')
//     .controller('MainController', MainController);

//   /** @ngInject */
//   function MainController($timeout, webDevTec, toastr, apiTeste) {
//     var vm = this;

//     vm.awesomeThings = [];
//     vm.classAnimation = '';
//     vm.creationDate = 1481719428807;
//     vm.showToastr = showToastr;

//     activate();

//     function getTesteData () {

//     }

//     function activate() {
//       getWebDevTec();
//       $timeout(function() {
//         vm.classAnimation = 'rubberBand';
//       }, 4000);
//     }

//     function showToastr() {
//       toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
//       vm.classAnimation = '';
//     }

//     function getWebDevTec() {
//       vm.awesomeThings = webDevTec.getTec();

//       angular.forEach(vm.awesomeThings, function(awesomeThing) {
//         awesomeThing.rank = Math.random();
//       });
//     }
//   }
// })();
