(function() {
    'use strict';

    angular
        .module('app.detailaccountcustomer')
        .controller('DetailCustomerController', DetailCustomerController);
        
   /* @ngInject */

    function DetailCustomerController($timeout, $q) {

        var vm = this;
        vm.query = {
            filter: '',
            order: 'type',
            limit: 5,
            page: 1
        };

        vm.selected = [];

        vm.filter = {
            options: {
                debounce: 500
            }
        };

        vm.imgPath='assets/images/prueba.png';
        //vm.imgpath='assets/images/avatars/avatar-5.png';
        vm.user = {
            firstName: 'Cliente',
            lastName: 'Prueba',
            identification: '00-0000-00000',
            identificationType: 'Cedula',
            birthdate: '01-01-1970',
            email: 'cliente@prueba.com',
            gender: 'Masculino',
            registrationDate: '01-10-2015',
            preferenceOffice: 'Perejil'
        };


        vm.removeFilter = removeFilter;
        vm.onpagechange = onpagechange;
        vm.onorderchange = onorderchange;


        vm.users = {
            'total_count': 3,
            'data':[{'codclient':'c1-1',
                    'name': 'Contacto Prueba',
                    'phone': '8888-9999',
                    'email': 'contacto@prueba.com',
                    'address': 'Panama-Panama-Bella Vista-Perejil'}, 
                    {'codclient':'c1-2',
                    'name': 'Contacto2 Prueba',
                    'phone': '8888-9999',
                    'email': 'contacto2@prueba.com',
                    'address': 'Panama-Panama-Bella Vista-Perejil'},
                    {'codclient':'c1-3',
                    'name': 'Contacto3 Prueba',
                    'phone': '8888-9999',
                    'email': 'contacto3@prueba.com',
                    'address': 'Panama-Panama-Bella Vista-Perejil'}
                 ]};
        vm.orders = {
            'total_count': 3,
            'data':[{'codorder':'C1-0001',
                    'typeorder': 'Compra Por Ti',
                    'activ': '23-09-2015',
                    'balanc': '$0.00',
                    'state': 'Completa',
                    'actions': 'Reclamo-Comentario Pagar feedback imprimir'}, 
                    {'codorder':'C1-0002',
                    'typeorder': 'Recibe Por Ti',
                    'activ': '23-09-2015',
                    'balanc': '$10.00',
                    'state': 'Shipped ',
                    'actions': 'Reclamo-Comentario Pagar'},
                    {'codorder':'C1-0003',
                    'typeorder': 'Compra Por Ti',
                    'activ': '23-09-2015',
                    'balanc': '$100.00',
                    'state': 'Partial Ship',
                    'actions': 'Reclamo-Comentario Pagar'}
                    ]};
        vm.request = {
            'total_count': 3,
            'data':[{'codrequest':'C1-P0001',
                    'typeorder': 'Compra Por Ti',
                    'activ': '23-09-2015',
                    'balanc': '$10.00',
                    'state': 'Pendiente de Aprobacion',
                    'actions': 'Actualizar-Registrar Pago'}, 
                    {'codrequest':'C1-P0002',
                    'typeorder': 'Compra Por Ti',
                    'activ': '23-09-2015',
                    'balanc': '$30.00',
                    'state': 'Pendiente de Aprobacion',
                    'actions': 'Actualizar-Registrar Pago'},
                    {'codrequest':'C1-P0003',
                    'typeorder': 'Compra Por Ti',
                    'activ': '23-09-2015',
                    'balanc': '$100.00',
                    'state': 'Pendiente de Aprobacion',
                    'actions': 'Actualizar-Registrar Pago'}
                ]};
        vm.deposits = {
            'total_count': 3,
            'data':[{'coddeposits':'CT-0001',
                    'method': 'Tranferencia Bancaria',
                    'date': '23-09-2015',
                    'amount': '$10.00',
                    'state': 'Pendiente',
                    'actions': 'Actualizar'}, 
                    {'coddeposits':'CT-0002',
                    'method': 'Transaccion de tarjeta de credito',
                    'date': '23-09-2015',
                    'amount': '$30.00',
                    'state': 'Pendiente',
                    'actions': 'Actualizar'},
                    {'coddeposits':'CT-0003',
                    'method': 'Pago en Sucursal',
                    'date': '23-09-2015',
                    'amount': '$100.00',
                    'state': 'Pendiente',
                    'actions': 'Actualizar'}
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
