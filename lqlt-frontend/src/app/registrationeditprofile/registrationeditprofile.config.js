(function() {
    'use strict';

    angular
        .module('app.registrationeditprofile')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/registrationeditprofile');

        $stateProvider
        /*.state('registrationeditprofile', {
            abstract: true,
            templateUrl: 'app/registrationeditprofile/layouts/registrationeditprofile.tmpl.html'
        })*/
        .state('triangular.admin-default.editprofile', {
            url: '/editprofile',
            templateUrl: 'app/registrationeditprofile/editprofile.tmpl.html',
            // set the controller to load for this page
            controller: 'EditProfileController',
            controllerAs: 'vm'
        });
        triMenuProvider.addMenu({
            name: 'MENU.EDITPROFILE',
            icon: 'zmdi zmdi-grade',
            priority: 3.9,
            state: 'triangular.admin-default.editprofile',
            type: 'link'

        });
    }
})();
