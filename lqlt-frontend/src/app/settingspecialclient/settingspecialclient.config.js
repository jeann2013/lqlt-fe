(function() {
    'use strict';

    angular
        .module('app.settingspecialclient')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/settingspecialclient');

        $stateProvider
        /*.state('settingspecialclient', {
            abstract: true,
            templateUrl: 'app/settingspecialclient/layouts/settingspecialclient.tmpl.html'
        })*/
        .state('triangular.admin-default.settingclient', {
            url: '/settingclient',
            templateUrl: 'app/settingspecialclient/settingclient.tmpl.html',
            // set the controller to load for this page
            controller: 'SettingClientController',
            controllerAs: 'vm'
        });
        triMenuProvider.addMenu({
            name: 'MENU.SETTINGCLIENT',
            icon: 'zmdi zmdi-grade',
            priority: 2.9,
            state: 'triangular.admin-default.settingclient',
            type: 'link'

        });
    }
})();
