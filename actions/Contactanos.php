<?php
require_once("clsMail.php");

$mailSend = new clsMail();
$mailName = "Crossline";
$mailSubject = "Nueva Cotización Crossline";
$mailTitle = "Cotización Producto";

$nombre = isset($_POST['nombre']) ? $_POST['nombre'] : '';
$correo = isset($_POST['correo']) ? $_POST['correo'] : '';
$producto = isset($_POST['producto']) ? $_POST['producto'] : '';
$empresa = isset($_POST['empresa']) ? $_POST['empresa'] : '';
$asunto = isset($_POST['asunto']) ? $_POST['asunto'] : '';
$mensajeUsuario = isset($_POST['mensaje']) ? $_POST['mensaje'] : '';

// Aquí se define el destinatario según el asunto
$destinatario = "";

if ($asunto == "Cotización") {
    $destinatario = "ventas@crossline.com.mx"; // Para cotizaciones
} elseif ($asunto == "Información técnica") {
    $destinatario = "soporte@crossline.com.mx"; // Información técnica
} elseif ($asunto == "Quiero ser distribuidor") {
    $destinatario = "distribuidores@crossline.com.mx"; // Distribuidores
} elseif ($asunto == "Agendar una capacitación.mx") {
    $destinatario = "capacitaciones@crossline.com.mx"; // Capacitaciones
} else {
    $destinatario = "contacto@crossline.com"; // Otros asuntos
}

enviarEmail($mailSend, $mailTitle, $mailName, $destinatario, $mailSubject, $nombre, $correo, $producto, $empresa, $asunto, $mensajeUsuario);

function enviarEmail($mailSend, $mailTitle, $mailName, $destinatario, $mailSubject, $nombre, $correo, $producto, $empresa, $asunto, $mensajeUsuario) {
    $mensaje = "
    <html>
    <head>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                color: #333;
                padding: 20px;
            }
            .email-container {
                background-color: #ffffff;
                border-radius: 8px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                padding: 20px;
            }
            .email-header {
                text-align: center;
                border-bottom: 2px solid #ddd;
                padding-bottom: 10px;
                margin-bottom: 20px;
                background: #229ad6;
            }
            .email-header img {
                max-width: 2rem;
            }
            .email-body {
                padding: 20px;
            }
            .email-footer {
                border-top: 2px solid #ddd;
                padding-top: 10px;
                margin-top: 20px;
                text-align: center;
                font-size: 12px;
                color: #777;
                background: #229ad6;
            }
        </style>
    </head>
    <body>
        <div class='email-container'>
            <div class='email-header' style='text-align: center; border-bottom: 2px solid #ddd; padding-bottom: 10px; margin-bottom: 20px; background-color: #229ad6;'>
                <img src='https://www.crossline.com.mx/Assets/logotipo_CL_blanco.svg' alt='Crossline' style='max-width: 10rem;'>
                <h2 style='color: #ffffff;'>Cotización Solicitada</h2>
            </div>
            <div class='email-body'>
                <p>Nueva solicitud de cotización desde la página web:</p>
                <p><strong>Nombre:</strong> $nombre</p>
                <p><strong>Correo:</strong> $correo</p>
                <p><strong>Producto de interés:</strong> $producto</p>
                <p><strong>Empresa:</strong> $empresa</p>
                <p><strong>Asunto:</strong> $asunto</p>
                <p><strong>Mensaje:</strong> $mensajeUsuario</p>
                <p><strong>Enviado el:</strong> " . date('d/m/Y', time()) . "</p>
            </div>
            <div class='email-footer'>
                <p style='color: #ffffff;'>Esta cotización llegó porque alguien en la página web de Crossline solicitó una cotización. No dudes en contactarnos, estamos aquí para ayudarte.</p>
                <i>Si tienes dudas, por favor contacta a nuestro equipo.</i>
            </div>
        </div>
    </body>
    </html>";

    // Enviar el correo
    $enviado = $mailSend->metodoEnviar($mailTitle, $mailName, $destinatario, $mailSubject, $mensaje);

    if ($enviado) {
        header('Location: https://www.crossline.com.mx/contactanos#registro');
        exit(); // Asegura que el script se detiene después de redirigir
    } else {
        // Manejo de errores en caso de que el correo no se haya enviado
        echo "Error al enviar el correo. Por favor, inténtelo nuevamente.";
    }
}
?>
