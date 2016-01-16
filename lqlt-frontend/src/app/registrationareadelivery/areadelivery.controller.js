(function() {
    'use strict';

    angular
        .module('app.registrationareadelivery')
        .controller('AreaDeliveryController', AreaDeliveryController);
        
   /* @ngInject */

    function AreaDeliveryController() {
        var vm = this;
        vm.areadeliveryClick = areadeliveryClick;
       
        vm.user = {
            correg1: false,
            correg2: false,
            correg3: false,
            correg4: false,
            correg5: false,
            correg6: false,
            correg7: false,
            correg8: false,
            correg9: false,
            correg10: false,
            correg11: false,
            correg12: false
        };

        function areadeliveryClick() {
            //$state.go('triangular.admin-default.introduction');
        }

    }   
})();
