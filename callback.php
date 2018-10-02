<?
     
    //Если поступили данные..
    if( isset($_POST['name'],$_POST['phone'])){
         
        $name = trim( htmlspecialchars( substr($_POST['name'], 20) ) );
        $phone = trim( htmlspecialchars( substr($_POST['phone'], 20) ) );
 
        if( $name != '' AND $phone != '' ){
             
            $email = "rink_olga@mail.ru";
            $domen = "rmservice.tk";
 
            $message = 'Имя: '.$name.'<br>Телефон: '.$phone;
            $headers  = "Content-type: text/html; charset=utf-8 \r\n";
            $headers .= "From: ".$domen." <robot@".$domen.">\r\n";
            $subject = "Обратный звонок";
            mail($email, $subject, $message, $headers);
            echo 1;
 
        }else echo 0;
    }
 
?>