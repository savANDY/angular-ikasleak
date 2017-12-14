<?php
require_once("../modelo/modelo_Ikasle.php");
$cont=new modelo_ikasle();
$id = $_GET['value'];
$datos=$cont->seleccionarPorId($id);
$ikasleak= json_encode($datos);
 print $ikasleak;
?>
