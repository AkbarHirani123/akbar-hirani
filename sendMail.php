<?php
// If you are using Composer
require 'vendor/autoload.php';

function helloEmail()
{
    $from = new Email(null, "test@example.com");
    $subject = "Hello World from the SendGrid PHP Library";
    $to = new Email(null, "test@example.com");
    $content = new Content("text/plain", "some text here");
    $mail = new Mail($from, $subject, $to, $content);
    $to = new Email(null, "akbar.hirani123@gmail.com");
    $mail->personalization[0]->addTo($to);
    //echo json_encode($mail, JSON_PRETTY_PRINT), "\n";
    return $mail;
}

function sendHelloEmail()
{
    $apiKey = getenv('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');
    $sg = new \SendGrid($apiKey);
    $request_body = helloEmail();
    $response = $sg->client->mail()->send()->post($request_body);
    echo $response->statusCode();
    echo $response->body();
    echo $response->headers();
}

sendHelloEmail(); 