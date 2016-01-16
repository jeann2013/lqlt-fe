
(function() {
    'use strict';

    angular
        .module('app.registrationeditcardcredit')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/registrationeditcardcredit');

        $stateProvider
        /*.state('registrationeditcardcredit', {
            abstract: true,
            templateUrl: 'app/registrationeditcardcredit/layouts/registrationeditcardcredit.tmpl.html'
        })*/
        .state('triangular.admin-default.editcardcredit', {
            url: '/editcardcredit',
            templateUrl: 'app/registrationeditcardcredit/editcardcredit.tmpl.html',
            // set the controller to load for this page
            controller: 'EditCardCreditController',
            controllerAs: 'vm'
        });
        triMenuProvider.addMenu({
            name: 'MENU.EDITCARDCREDIT',
            icon: 'zmdi zmdi-grade',
            priority: 5.1,
            state: 'triangular.admin-default.editcardcredit',
            type: 'link'

        });
    }
})();
