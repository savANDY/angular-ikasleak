<?php
require_once("../modelo/modelo_Ikasle.php");
$cont=new modelo_ikasle();
$nombre = $_GET['nombre'];
$apellido1 = $_GET['apellido1'];
$apellido2 = $_GET['apellido2'];
$ciclo = $_GET['ciclo'];
$curso = $_GET['curso'];
$datos=$cont->insertar_ikasle($nombre,$apellido1,$apellido2,$ciclo,$curso);
 print $datos;
?>
