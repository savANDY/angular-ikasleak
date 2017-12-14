var miAplicacion = angular.module('miAplicacion',[]);

miAplicacion.controller('mainController', function($scope,$http){

  $http.get("controlador/cCargardatos.php").then(function (response) {
    $scope.lista = response.data.records;
    //alert(response.data);
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
  });

  $scope.verAgregaralumno='false';
  $scope.VerMenu='true';

  $scope.Iniciaragregar = function(){
    $scope.verAgregaralumno='true';
    $scope.VerMenu='false';
  }

  $scope.EditarEste = function(id) {

    $http({url: "controlador/recoger_datos_por_id.php",
    method: "GET",
    params: {value:id}
  }).then(successCallback, errorCallback);

  function successCallback(response){

    //alert(response.data);
    $scope.misdatos.id = id;
    $scope.misdatos.nombre=response.data.nombre;
    $scope.misdatos.apellido1=response.data.apellido1;
    $scope.misdatos.apellido2=response.data.apellido2;
    $scope.misdatos.ciclo=response.data.ciclo;
    $scope.misdatos.curso=response.data.curso;
    $scope.verAgregaralumno='false';
    $scope.verEditaralumno='true';
    $scope.VerMenu='false';

  }
  function errorCallback(error){
    console.error('Error occurred:', response.status, response.data);
  }
}

$scope.BorrarEste = function(id) {
  if (confirm('¿Seguro que quieres borrar el alumno con id: ' + id + '?')) {
    $http({url: "controlador/borrar_ikasle.php",
    method: "GET",
    params: {value:id}
  }).then(successCallback, errorCallback);

  function successCallback(response){
    alert("Borrado " + id);
    var elem = document.getElementById("ikasle"+id);
    elem.parentNode.removeChild(elem);
  }
  function errorCallback(error){
    console.error('Error occurred:', response.status, response.data);
  }
}
}

$scope.agregar = function() {

  $http({url: "controlador/insertar_ikasle.php",
  method: "GET",
  params: {nombre:$scope.misdatos.nombre,
    apellido1:$scope.misdatos.apellido1,apellido2:$scope.misdatos.apellido2,
    ciclo:$scope.misdatos.ciclo,curso:$scope.misdatos.curso}
  }).then(successCallback, errorCallback);

  function successCallback(response){
    alert(response.data);
    
    $scope.lista.push({id:response.data,nombre:$scope.misdatos.nombre,
      apellido1:$scope.misdatos.apellido1,apellido2:$scope.misdatos.apellido2,
      ciclo:$scope.misdatos.ciclo,curso:$scope.misdatos.curso});
      $scope.misdatos.nombre='';
      $scope.misdatos.apellido1='';
      $scope.misdatos.apellido2='';
      $scope.misdatos.ciclo='';
      $scope.misdatos.curso='';
      $scope.verAgregaralumno='false';
      $scope.VerMenu="true";
      //$scope.lista.push(response.data);
    }
    function errorCallback(error){
      console.error('Error occurred:', response.status, response.data);
    }
  };

  $scope.editar = function() {

    $http({url: "controlador/editar_ikasle.php",
    method: "GET",
    params: {id:$scope.misdatos.id,nombre:$scope.misdatos.nombre,
      apellido1:$scope.misdatos.apellido1,apellido2:$scope.misdatos.apellido2,
      ciclo:$scope.misdatos.ciclo,curso:$scope.misdatos.curso}
    }).then(successCallback, errorCallback);

    function successCallback(response){
      //alert(response.data);
      //alert($scope.misdatos.id);

      for (i = 0; i < $scope.lista.length; i++) {
        if ($scope.lista[i].id == $scope.misdatos.id) {
          $scope.lista[i].nombre = $scope.misdatos.nombre;
          $scope.lista[i].apellido1 = $scope.misdatos.apellido1;
          $scope.lista[i].apellido2 = $scope.misdatos.apellido2;
          $scope.lista[i].ciclo = $scope.misdatos.ciclo;
          $scope.lista[i].curso = $scope.misdatos.curso;
        }
      }
      $scope.misdatos.nombre='';
      $scope.misdatos.apellido1='';
      $scope.misdatos.apellido2='';
      $scope.misdatos.ciclo='';
      $scope.misdatos.curso='';
      $scope.verEditaralumno='false';
      $scope.VerMenu="true";
      //alert("Editado con exito");
      // $scope.lista.push({response.data});
    }
    function errorCallback(error){
      console.error('Error occurred:', response.status, response.data);
    }
  };

  $scope.cancelar = function() {
    //  alert($scope.misdatos.id);
    $scope.misdatos.id = '';
    $scope.misdatos.nombre = '';
    $scope.misdatos.apellido1='';
    $scope.misdatos.apellido2='';
    $scope.misdatos.ciclo='';
    $scope.misdatos.curso='';
    $scope.verAgregaralumno='false';
    $scope.verEditaralumno='false';
    $scope.VerMenu="true";
  };

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
