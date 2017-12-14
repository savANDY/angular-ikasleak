<?php
require_once("../modelo/modelo_Ikasle.php");
$cont=new modelo_ikasle();
$id = $_GET['id'];
$nombre = $_GET['nombre'];
$apellido1 = $_GET['apellido1'];
$apellido2 = $_GET['apellido2'];
$ciclo = $_GET['ciclo'];
$curso = $_GET['curso'];
$datos=$cont->editar_ikasle($id,$nombre,$apellido1,$apellido2,$ciclo,$curso);
// $ikasleak= json_encode($datos);
//  print $ikasleak;
?>
