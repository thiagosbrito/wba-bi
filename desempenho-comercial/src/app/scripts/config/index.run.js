(function() {
  'use strict';

  angular
    .module('wbaBi')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
