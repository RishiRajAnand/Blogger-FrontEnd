(function() {
  'use strict';

  angular
    .module('bloggerFrontEnd')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
