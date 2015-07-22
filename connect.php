<?php
              use Playlyfe\Sdk\Playlyfe;
              use Playlyfe\Sdk\PlaylyfeException;

              session_start();
              ini_set('display_errors', 'on');
              require_once("./playlyfe-php-sdk/src/Playlyfe.php");
              require_once("secret.php");
              if(array_key_exists('logout', $_GET)) {
                session_destroy();
              }
              /*echo "<form method = 'Post' action = 'trigger.php'>";*/
              $pl = new Playlyfe(
                array(

                  'client_id' => $client_id,
                  'client_secret' => $client_secret,
                  'type' => 'client',
                  'store' => function($access_token) {
                    print 'Storing';
                    $_SESSION['access_token1'] = $access_token;
                  },
                  'load' => function() {

                    if(array_key_exists('access_token', $_SESSION)){
                      return $_SESSION['access_token1'];
                    }
                    else {
                      return null;
                    }
                  }
                  )
                );
              ?>