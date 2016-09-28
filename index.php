<?php

require __DIR__ . '/vendor/autoload.php';
include(dirname(__DIR__) . '/lib/Client.php');

// This gets the parent directory, for your current directory use getcwd()
$path_to_config = dirname(__DIR__);

$apiKey = getenv('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');

$headers = array(
    'Content-Type: application/json',
    'Authorization: Bearer '.$api_key
);
$client = new SendGrid\Client('https://api.sendgrid.com', $headers, '/v3/user/profile');

// GET Collection
$query_params = array('limit' => 100, 'offset' => 0);
$request_headers = array('X-Mock: 200');
$response = $client->api_keys()->get(null, $query_params, $request_headers);
echo $response->statusCode();
echo $response->body();
echo $response->headers();

?> 

<p>Next stuff</p>

<?php

/*
THIS WORKS!!!!!!!!!!!!!!
require __DIR__ . '/vendor/autoload.php';

include(dirname(__DIR__) . '/lib/Client.php');

// This gets the parent directory, for your current directory use getcwd()
$path_to_config = dirname(__DIR__);
$apiKey = getenv('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');
$headers = ['Authorization: Bearer ' . $apiKey];
$client = new SendGrid\Client('https://api.sendgrid.com', $headers, '/v3');

$query_params = ['limit' => 100, 'offset' => 0];
$request_headers = ['X-Mock: 200'];
$response = $client->api_keys()->get(null, $query_params, $request_headers);
echo $response->statusCode();
echo $response->body();
echo $response->headers();
*/

?>
<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">

        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="main.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

        <!-- Optional theme -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">
        
        <!-- ****** faviconit.com favicons ****** -->
        <link rel="shortcut icon" href="assets/imgs/favicon.ico">
        <link rel="icon" sizes="16x16 32x32 64x64" href="assets/imgs/favicon.ico">
        <link rel="icon" type="image/png" sizes="196x196" href="assets/imgs/favicon-192.png">
        <link rel="icon" type="image/png" sizes="160x160" href="assets/imgs/favicon-160.png">
        <link rel="icon" type="image/png" sizes="96x96" href="assets/imgs/favicon-96.png">
        <link rel="icon" type="image/png" sizes="64x64" href="assets/imgs/favicon-64.png">
        <link rel="icon" type="image/png" sizes="32x32" href="assets/imgs/favicon-32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="assets/imgs/favicon-16.png">
        <link rel="apple-touch-icon" href="assets/imgs/favicon-57.png">
        <link rel="apple-touch-icon" sizes="114x114" href="assets/imgs/favicon-114.png">
        <link rel="apple-touch-icon" sizes="72x72" href="assets/imgs/favicon-72.png">
        <link rel="apple-touch-icon" sizes="144x144" href="assets/imgs/favicon-144.png">
        <link rel="apple-touch-icon" sizes="60x60" href="assets/imgs/favicon-60.png">
        <link rel="apple-touch-icon" sizes="120x120" href="assets/imgs/favicon-120.png">
        <link rel="apple-touch-icon" sizes="76x76" href="assets/imgs/favicon-76.png">
        <link rel="apple-touch-icon" sizes="152x152" href="assets/imgs/favicon-152.png">
        <link rel="apple-touch-icon" sizes="180x180" href="assets/imgs/favicon-180.png">
        <meta name="msapplication-TileColor" content="#FFFFFF">
        <meta name="msapplication-TileImage" content="assets/imgs/favicon-144.png">
        <meta name="msapplication-config" content="assets/imgs/browserconfig.xml">
        <!-- ****** faviconit.com favicons ****** -->
        
        <title>Akbar Hirani | Software Developer And A Thinker</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <header class="navbar-inverse">
            <div class="container">
                <nav rol="navigation">
                    <div class="container-fluid">
                        <!-- Brand and toggle get grouped for better mobile display -->
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand" href="#">Akbar Hirani</a>
                        </div>

                        <!-- Collect the nav links, forms, and other content for toggling -->
                        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul class="nav navbar-nav">
                                <li><a href="/">Home<span class="sr-only">(current)</span></a></li>
                                <li><a target="_blank" href="https://github.com/AkbarHirani123/">GitHub</a></li>
                                <li><a target="_blank" href="https://www.linkedin.com/in/akbarhirani123/">LinkedIn</a></li>
                                <li class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">More <span class="caret"></span></a>
                                    <ul class="dropdown-menu">
                                        <li><a href="/skills.html">Skills & Tool Set</a></li>
                                        <li role="separator" class="divider"></li>
                                        <li><a href="/work.html">Work Experience</a></li>
                                        <li role="separator" class="divider"></li>
                                        <li><a href="/service.html">Voluntary Experience</a></li>
                                        <li role="separator" class="divider"></li>
                                        <li><a href="/interests.html">Interests</a></li>
                                    </ul>
                                </li>
                            </ul>
                            
                        </div><!-- /.navbar-collapse -->
                    </div><!-- /.container-fluid -->
                </nav>
            </div>
        </header>
        
        <div class="container ptb">
            <div class="row">
                <h2 class="centered mb">I craft handsome sites & stunning apps<br/>that empower your brand.</h2>
                <div class="col-md-6">
                    <p>I am a New York based web deveopler that works on both object-oriented web deveoplment using Java Spring and modern scripting languages and practices such as PHP, HTML, CSS, and CMS such as WordPress.</p>
                </div><!--/col-md-6-->
                <div class="col-md-6">
                    <p>To look at my detailed work, please check out the work experience section in the navigation bar above. I have listed all my projects and my work history there. My Voluntary services show great deal about my leadership and team working skills.</p>
                </div><!--/col-md-6-->
            </div><!--/row-->
        </div><!-- /.container -->
        
        <div id="sep">
            <div class="container">
                <div class="row centered">
                    <div class="col-md-8 col-md-offset-2">
                        <h1>I live in New York City</h1>
                        <h3 class="mb">For questions, comments,<br/>and concers, please send me a message using the button below.</h3>
                        <button class="btn btn-inverse" data-toggle="modal" data-target="#contactme">Contact Me</button>
                    </div>
                </div><!--/row-->
            </div><!--/container-->
        </div><!--/.sep-->

        <!-- Modal Contact me -->
        <div class="modal fade" id="contactme" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class = "modal-header">
                        <p><strong>Contact Me</strong></p>
                    </div>
                    <form id="loginForm" method="post" class="form-horizontal">
                        <div class = "modal-body">
                            <div class="form-group">
                                <label for="contact-name" class="col-lg-2 control-label">Name:</label>
                                <div class="col-lg-10">
                                    <input type="text" class="form-control" id="contactName" placeholder="Enter Full Name" autofocus required>
                                </div>
                            </div>
                        </div>
                        <div class = "modal-body">
                            <div class="form-group">
                                <label for="contact-email" class="col-lg-2 control-label">Email:</label>
                                <div class="col-lg-10">
                                    <input type="email" class="form-control" id="contactEmail" placeholder="you@example.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" required>
                                </div>
                            </div>
                        </div>
                        <div class = "modal-body">
                            <div class="form-group">
                                <label for="contact-message" class="col-lg-2 control-label">Message:</label>
                                <div class="col-lg-10">
                                    <textarea class="form-control" rows="8" id="contactMessage" placeholder="Enter Message" required></textarea> 
                                </div>
                            </div>
                        </div>
                        <div class = "modal-footer">
                            <button class="btn btn-default" data-dismiss="modal">Close</button>
                            <button class="btn btn-inverse" type="submit">Send!</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <script src="https://code.jquery.com/jquery.js"></script>
        <script src="https://code.jquery.com/jquery-1.12.1.min.js"></script>
        <script src="https://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        <script src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.11.1/jquery.validate.min.js"></script>        
        <script src="jquery-events.js"></script>

        
        <!-- Latest compiled and minified JavaScript -->        
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
    </body>
</html>
