(function() {
    'use strict';

    angular
        .module('app.registrationshelves')
        .controller('EditShelvesController', EditShelvesController);
        
   /* @ngInject */

    function EditShelvesController() {
        var vm = this;
        vm.editshelvesClick = editshelvesClick;
       
        vm.shelvesoffice = {  
            'data':[{
                'level':'Nivel1',
                'quantity': '7',
                'sequence': '25170001,25170002,25170003,25170004,25170005,25170006,25170007'}, 
                {'level':'Nivel2',
                'quantity': '5',
                'sequence': '25550001,25550002,25550003,25550004,25550006,25550006,25550007'},
                 {'level':'Nivel3',
                'quantity': '5',
                'sequence': '25310001,25310002,25310003,25310004,25310006,25310006,25310007'},
                {'level':'Nivel4',
                'quantity': '5',
                'sequence': '25410001,25410002,25410003,25410004,25410006,25410006,25410007'}
            ]};


        function editshelvesClick() {
            //$state.go('triangular.admin-default.introduction');
        }

    }   
})();
