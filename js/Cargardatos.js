var miAplicacion = angular.module('miAplicacion',[]);

miAplicacion.controller('mainController', function($scope,$http){

    $http.get('JSON/datosJSON.json').then(function (response){
      $scope.lista = response.data;
        //alert($scope.lista.length);

  $scope.misdatos = {
    id:"",
    nombre:"",
    apellido1:"",
    apellido2:"",
    ciclo:"",
    curso:""
  }
  //CALCULAR NUEVO ID
  $scope.ultimoID=$scope.lista[parseInt($scope.lista.length)-1].id;
  $scope.misdatos.id = parseInt($scope.ultimoId) + 1;

  $scope.verAgregaralumno='false';
  $scope.VerMenu='true';

  $scope.Iniciaragregar = function(){
    $scope.verAgregaralumno='true';
    $scope.VerMenu='false';
  }

  $scope.agregar = function() {
    $scope.lista.push({id:$scope.misdatos.id,nombre:$scope.misdatos.nombre,
      apellido1:$scope.misdatos.apellido1,apellido2:$scope.misdatos.apellido2,
      ciclo:$scope.misdatos.ciclo,curso:$scope.misdatos.curso});

      $scope.misdatos.id++;
      $scope.misdatos.nombre='';
      $scope.misdatos.apellido1='';
      $scope.misdatos.apellido2='';
      $scope.misdatos.ciclo='';
      $scope.misdatos.curso='';
      $scope.verAgregaralumno='false';
      $scope.VerMenu="true";
  };

  $scope.cancelar = function() {
    alert($scope.misdatos.id);
    $scope.misdatos.id = $scope.misdatos.id;
    $scope.misdatos.nombre = '';
    $scope.misdatos.apellido1='';
    $scope.misdatos.apellido2='';
    $scope.misdatos.ciclo='';
    $scope.misdatos.curso='';
    $scope.verAgregaralumno='false';
    $scope.VerMenu="true";
  };

  $scope.Eliminarlista = function() {
    $scope.lista = [];
  };

  $scope.Eliminaralumno = function() {
    var milista= $scope.lista;
    $scope.lista = [];
    angular.forEach(milista, function(item){
      if (!item.seleccionado){
        $scope.lista.push(item);
      }
    });
    $scope.ultimoId=$scope.lista[parseInt($scope.lista.length)-1].id;
    $scope.misdatos.id = parseInt($scope.ultimoId) + 1;
  };

  $scope.cambiar = function() {
    for (i = 0; i < $scope.lista.length; i++) {
      if($scope.lista[i].id==$scope.misdatos.id){
        $scope.lista[i].nombre = $scope.misdatos.nombre;
        $scope.lista[i].edad = $scope.misdatos.edad;
      }
    }
  }

  //codigo de busqueda se busca por cualquiera de las caract. Primero se da al boton Iniciar
  // busqueda para ver los campos de busqueda y luego se filtra
  $scope.VerFormBusqueda=false;
  $scope.Buscar = function() {
    $scope.VerFormBusqueda=true;
  }

  $scope.finbuscar = function() {
    $scope.TEXTObusqueda="";
    $scope.VerFormBusqueda=false;
  }

      });
});
