<?php
require_once("../modelo/modelo_Ikasle.php");
$cont=new modelo_ikasle();
$id = $_GET['value'];
$datos=$cont->borrar_ikasle($id);
 print $datos;
?>
