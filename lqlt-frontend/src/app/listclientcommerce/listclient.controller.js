(function() {
    'use strict';

    angular
        .module('app.listclientcommerce')
        .controller('ClientCommerceController', ClientCommerceController);
        
   /* @ngInject */

    function ClientCommerceController($scope, $timeout, $q) {

        var vm = this;
        vm.query = {
            filter: '',
            order: 'type',
            limit: 10,
            page: 1
        };
        vm.selected = [];

        vm.filter = {
            options: {
                debounce: 500
            }
        };
        
        
        vm.removeFilter = removeFilter;
        vm.onpagechange = onpagechange;
        vm.onorderchange = onorderchange;
        
        
        vm.users = {
            'total_count': 11,
            'data':[{
                'codclient':'C1',
                'name': 'Cliente1 Prueba',
                'email': 'cliente@prueba.com',
                'type': 'Persona',
                'state': 'Activo',
                'actions': 'Editar-Desactivar-Agregar'}, 
                {'codclient':'C2',
                'name': 'Comercio1 Prueba',
                'email': 'comercio@prueba.com',
                'type': 'Comercial',
                'state': 'Activo',
                'actions': 'Editar-Desactivar-Agregar'},
                {'codclient':'C3',
                'name': 'Cliente2 Prueba',
                'email': 'cliente@prueba.com',
                'type': 'Persona',
                'state': 'Activo',
                'actions': 'Editar-Desactivar-Agregar'},
                {'codclient':'C4',
                'name': 'Comercio2 Prueba',
                'email': 'comercio@prueba.com',
                'type': 'Comercial',
                'state': 'Activo',
                'actions': 'Editar-Desactivar-Agregar'},
                {'codclient':'C5',
                'name': 'Cliente3 Prueba',
                'email': 'cliente@prueba.com',
                'type': 'Persona',
                'state': 'Activo',
                'actions': 'Editar-Desactivar-Agregar'},
                {'codclient':'C6',
                'name': 'Comercio3 Prueba',
                'email': 'comercio@prueba.com',
                'type': 'Comercial',
                'state': 'Activo',
                'actions': 'Editar-Desactivar-Agregar'},
                {'codclient':'C7',
                'name': 'Cliente4 Prueba',
                'email': 'cliente@prueba.com',
                'type': 'Persona',
                'state': 'Activo',
                'actions': 'Editar-Desactivar-Agregar'},
                {'codclient':'C8',
                'name': 'Comercio4 Prueba',
                'email': 'comercio@prueba.com',
                'type': 'Comercial',
                'state': 'Activo',
                'actions': 'Editar-Desactivar-Agregar'},
                {'codclient':'C9',
                'name': 'Cliente5 Prueba',
                'email': 'cliente@prueba.com',
                'type': 'Persona',
                'state': 'Activo',
                'actions': 'Editar-Desactivar-Agregar'},
                {'codclient':'C10',
                'name': 'Comercio5 Prueba',
                'email': 'comercio@prueba.com',
                'type': 'Comercial',
                'state': 'Activo',
                'actions': 'Editar-Desactivar-Agregar'},
                {'codclient':'C11',
                'name': 'Cliente6 Prueba',
                'email': 'cliente@prueba.com',
                'type': 'Persona',
                'state': 'Activo',
                'actions': 'Editar-Desactivar-Agregar'}
            ]};

        function onpagechange() {
            var deferred = $q.defer();
            $timeout(function () {
                deferred.resolve(); 
            }, 2000);
            return deferred.promise;
        }
        function onorderchange() {
            var deferred = $q.defer();
            $timeout(function () {
                deferred.resolve();
            }, 2000);
            return deferred.promise;
        }
        function removeFilter() {
            vm.filter.show = false;vm.query.filter = '';
            if(vm.filter.form.$dirty) {
                vm.filter.form.$setPristine();
            }
        }
    }   
})();
