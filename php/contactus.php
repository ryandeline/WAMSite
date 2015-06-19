<?php

$first_name = trim($_POST['firstname']);
$last_name = trim($_POST['lastname']);
$email = trim($_POST['email']);
$message = trim($_POST['message']);

$recipient = 'ryan.deline@gmail.com';
$subject = 'Web Contact';
$headers = "From: {$_POST['email']} \n";

$message_full= "Rick, 
$first_name $last_name has sent you the message below:
		
\"$message\"
		
His/her email is $email. You should reply soon! 
		
Web Admin"; 

if($email != "" && $message != "" ){
mail($recipient, $subject, $message_full, $headers);

echo "<p>Thank you for your note {$first_name}. We'll get back to you as soon as we can! </p>
      <p><a href=\"http://www.williamsaerial.com\"><u>Home</u></a></p>";
}
else{

echo "<p>We're sorry {$first_name}. We were unable to send your message because there was no content and/or no contact email address.</p>
      <p><a href=\"http://www.williamsaerial.com\"><u>Home</u></a></p>";

}


?>