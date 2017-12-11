var miAplicacion = angular.module('miAplicacion',[]);

miAplicacion.controller('mainController', function($scope){
  $scope.lista = [
    {id:'1',nombre:"ANA",apellido1:"ANSOLA",apellido2:"BAaaaRTET",ciclo:"APLICACIONES WEB",curso:"primero",seleccionado:false},
    {id:'2',nombre:"SARA",apellido1:"ANSUATEGI",apellido2:"ETXABE",ciclo:"APLICACIONES WEB",curso:"segundo",seleccionado:true},
    {id:'4',nombre:"ENEKO",apellido1:"ARRIETA",apellido2:"GABIOLA",ciclo:"APLICACIONES WEB",curso:"segundo",seleccionado:false},
    {id:'5',nombre:"MIREN",apellido1:"BALZATEGI",apellido2:"ZUMELAGA",ciclo:"CUIDADOS AUX ENF",curso:"primero",seleccionado:false},
    {id:'6',nombre:"ASIER",apellido1:"ETXEANDIA",apellido2:"RASIER",ciclo:"APLICACIONES WEB",curso:"segundo",seleccionado:false}
  ];

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
