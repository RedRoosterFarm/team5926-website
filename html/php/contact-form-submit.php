<?php
/*
   Copyright 2016 Samuel H. Walker

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
// Only process POST reqeusts.
include('./dbstuff.php');
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Get the form fields and remove whitespace.
  $firstname = strip_tags(trim($_POST["firstname"]));
  $lastname = strip_tags(trim($_POST["lastname"]));
  $telephone = strip_tags(trim($_POST["telephone"]));
  $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
  $message = trim($_POST["message"]);
  // Check that data was sent to the mailer.
  if ( empty($firstname) || empty($lastname) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    // Set a 400 (bad request) response code and exit.
    http_response_code(400);
    echo "Oops! There was a problem with your submission. Please complete the form and try again.";
    exit;
  }
  // MySQL database insert
  $db = new mysqli('localhost',$dbUser,$dbPassword,'Da MOOse');
  if (mysqli_connect_errno()) {
    // Set a 500 (internal server error) response code.
    http_response_code(500);
    echo "Oops! Something went wrong and we couldn't send your message.";
  }
  $query = "
  INSERT INTO `contactForm` (`firstname`, `lastname`, `telephone`, `email`, `message`)
  VALUES ('".$firstname."', '".$lastname."', '".$telephone."', '".$email."', '".$message."')";
      if ($db->query($query)) {
        // Set a 200 (okay) response code.
        http_response_code(200);
        echo "Thank You! Your message has been sent.";
      }
      else {
        // Set a 500 (internal server error) response code.
        http_response_code(500);
        echo "Oops! Something went wrong and we couldn't send your message.";
      }
    }
else {
  // Not a POST request, set a 403 (forbidden) response code.
  http_response_code(403);
  echo "There was a problem with your submission, please try again.";
}
?>
