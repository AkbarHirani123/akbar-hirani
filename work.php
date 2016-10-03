<?php

require __DIR__ . '/vendor/autoload.php';
include(dirname(__DIR__) . '/lib/Client.php');

$path_to_config = dirname(__DIR__);

function sendEmailTo( $sentFromName, $sentFromEmail, $messageIs ){
    $from = new SendGrid\Email(null, "akbar-hirani-herokuapp@example.com");
    $subject = "You have  a Message! From: " . $sentFromName;
    $to = new SendGrid\Email(null, "akbar.hirani123@gmail.com");
    $content = new SendGrid\Content("text/html", "This message is from: 
        <br><p><strong>Name: </strong>" . $sentFromName . "</p> 
        <p><strong>Email: </strong><a href=mailto:" . $sentFromEmail .">". $sentFromEmail ."</a></p>
        <p><strong>Message is: </strong></p>
        <p>". $messageIs ."</p>");
    $mail = new SendGrid\Mail($from, $subject, $to, $content);
    $mail->setTemplateId("3d828577-a0f9-4224-8ae7-6b29e04ac58d");

    $apiKey = getenv('SENDGRID_API_KEY');
    $sg = new \SendGrid($apiKey);

    try {
        $response = $sg->client->mail()->send()->post($mail);
    } catch (Exception $e) {
        echo 'Caught exception: ',  $e->getMessage(), "\n";
    }

    $subject = "Conformation Email For Contacting Akbar Hirani";
    $to = new SendGrid\Email(null, $sentFromEmail);
    $content = new SendGrid\Content("text/html", "<p>Hello ". $sentFromName ."!</p>
        <p>Thank you for contacting me, Akbar Hirani. Your message is very important and I will reach out to you as soon as I can. In the mean time check out my work <a href='https://akbar-hirani.herokuapp.com/work.html'> here</a>.</p>
        <p>The message you sent contained the following information:</p> 
        <div style='padding: 25px;' ><p><strong>Name: </strong>" . $sentFromName . "</p> 
        <p><strong>Email: </strong><a href=mailto:" . $sentFromEmail .">". $sentFromEmail ."</a></p>
        <p><strong>Message was: </strong></p>
        <p>". $messageIs ."</p></div><p>Note: This is an automated message. Please do not reply to this email.</p>");
    $mail = new SendGrid\Mail($from, $subject, $to, $content);
    $mail->setTemplateId("3d828577-a0f9-4224-8ae7-6b29e04ac58d");

    try {
        $response = $sg->client->mail()->send()->post($mail);
    } catch (Exception $e) {
        echo 'Caught exception: ',  $e->getMessage(), "\n";
    }

}

if(!is_null($_POST['contactName'])) {
    $sentFromN = "" .$_POST['contactName'];
    $sentFromE = "" .$_POST['contactEmail'];
    $messageI = "" .$_POST['contactMessage'];
    
    sendEmailTo($sentFromN, $sentFromE, $messageI);
}

include_once("work.html");
?>
