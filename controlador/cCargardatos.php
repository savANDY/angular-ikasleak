<?php
require_once("../modelo/modelo_Ikasle.php");
$cont=new modelo_ikasle();
$datos=$cont->get_ikasles();
 print $datos;
?>
