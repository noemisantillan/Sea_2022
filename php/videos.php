<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('content-type: application/json; charset=utf-8');

//recibe valores externo en formato json
$data = file_get_contents('php://input');

if(!$data){
  echo "No hay datos";
}else{
  //conversion a array
  $data = json_decode($data, true);
  //asignacion de datos en variables
  $asg = $data['asg'];

  include 'conecta.php';
  $q = "SELECT * FROM `sea-audiovisuales`.cont_videos inner join`sea-audiovisuales`. t_video on t_video.id_tvideo = cont_videos.id_tipo_v where id_asg =".$asg."
  order by idvideos;" ;
  
  $conn	=	conecta_bd();
  if ($result = mysqli_query($conn,$q)) {
    while($row = $result->fetch_array(MYSQLI_ASSOC)) {
      $myArray[] = $row;
    }
  }
  desconectar_bd($conn);
  //para mostrar en navegador
  $arbol_php = json_encode($myArray);
  //para guardar en archivo json
  $jsonencoded = json_encode($myArray,JSON_UNESCAPED_UNICODE);
  $data = str_replace("\\/", "/", $jsonencoded);
  echo $data;
}
	

?>