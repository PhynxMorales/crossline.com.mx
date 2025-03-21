<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//Indisponsable para llamar los documentos que hace que funcione PHPMAILER
require 'Exception.php';
require 'PHPMailer.php';
require 'SMTP.php';

class clsMail{
    
    private $mail = null;
    
    function __construct(){
        //Inicializacion de mailer
        $this->mail = new PHPMailer();
        //Incializacion de protocolo
        $this->mail->isSMTP();
        $this->mail->SMTPAuth = true;
        $this->mail->SMTPSecure = 'tls';
        //Host Server
        $this->mail->Host = "mail.crossline.com.mx";
        //Puerto conexion SMTP SSL
        $this->mail->Port = 587;
        
        //Cuenta donde se manda el correo
        $this->mail->Username = "ventasinternet@crossline.com.mx";
        //Contrasena de aplicacion
        $this->mail->Password = 'PASSWORD';
    }
    
    //Funcion que se usa en vacantes.php para pasar paramentros
    public function metodoEnviar(string $titulo, string $nombre, string $correo, string $asunto, string $bodyHTML){
         $this->mail->setFrom("ventasinternet@crossline.com.mx",$titulo);
         $this->mail->addAddress($correo,$nombre);
         $this->mail->Subject = $asunto;
         $this->mail->Body = $bodyHTML;
         $this->mail->IsHTML(true);
         $this->mail->CharSet = "UTF-8";
         return $this->mail->send();
    }
    
    
}

?>