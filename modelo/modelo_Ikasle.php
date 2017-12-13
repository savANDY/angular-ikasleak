<?php
require_once 'conector.php';
class modelo_ikasle{
  private $link;
  private $outp;
  private $ikasle;

  public function __construct(){
    $this->link=Conectar::conexion();
  }

  public function get_ikasles(){
    $sql="SELECT * FROM ikasle";
    $consulta=$this->link->query($sql);
    $this->outp = "";
    while ($rs = mysqli_fetch_array($consulta, MYSQLI_ASSOC)) {
      if ($this->outp != "") {
        $this->outp .= ",";
      }
      $this->outp .= '{"id":"'  . $rs["id"]                . '",';
      $this->outp .= '"nombre":"'   . $rs["nombre"]        . '",';
      $this->outp .= '"apellido1":"'   . $rs["apellido1"]  . '",';
      $this->outp .= '"apellido2":"'   . $rs["apellido2"]  . '",';
      $this->outp .= '"ciclo":"'   . $rs["ciclo"]          . '",';
      $this->outp .= '"curso":"'. $rs["curso"]             . '"}';
  }
    $this->outp ='{"records":['.$this->outp.']}';
    $consulta->free_result();
    $this->link->close();
    return $this->outp;
  }

  public function borrar_ikasle($id){
    $sql="DELETE FROM `ikasle` WHERE `ikasle`.`id` = '$id'";
    $consulta=$this->link->query($sql);
    $this->ikasle = mysqli_fetch_array($consulta, MYSQLI_ASSOC);
    $consulta->free_result();
    $this->link->close();
    return $this->ikasle;
  }

  public function insertar_ikasle($nombre,$apellido1,$apellido2,$ciclo,$curso) {
    $sql = "CALL insertar_ikasle('$nombre','$apellido1','$apellido2','$ciclo','$curso')";
    $consulta=$this->link->query($sql);
    $this->outp = "";
    $rs = mysqli_fetch_array($consulta, MYSQLI_ASSOC);
    $this->outp .= 'id:"'  . $rs["id"]                . '",';
    $this->outp .= 'nombre:"'   . $rs["nombre"]        . '",';
    $this->outp .= 'apellido1:"'   . $rs["apellido1"]  . '",';
    $this->outp .= 'apellido2:"'   . $rs["apellido2"]  . '",';
    $this->outp .= 'ciclo:"'   . $rs["ciclo"]          . '",';
    $this->outp .= 'curso:"'. $rs["curso"]             . '"';

    return $this->outp;
  }
}
