<!DOCTYPE html>
<html>
<head> 
<meta charset="utf-8">
<link href="https://fonts.googleapis.com/css?family=McLaren&display=swap&subset=latin-ext" rel="stylesheet">
<title>momentum</title>
<script type="text/javascript" src="./js/login.js"></script>
</head>
<body> 
	<section>
        <div id="main_content">
      		<div id="login_box">
	    		<div id="login_title">
		    	<h2 id = 'logintitle'>Log In</h2>
	    		</div>
	    		<div id="login_form">
          		<form name="login_form" method="post" action="login.php">		       	
                  	<ul>
                    <input type="text" id = "id" name="id" placeholder="  Your ID" > <br>
                    <input type="password" id="pass" name="pass" placeholder="  Password" > <!-- pass -->
                  	</ul>
                  	<div id="login_btn">
					  <a href="#"><img src="./img/login.png" id="log_btn" onclick="check_input()"></a>
					  <br><br>
					  <p5>Are you not a member? Then sign up!</p5><br>
					  <a href="signup_form.php"><img src="./img/signup.png" id="sign_btn"></a>
                  	</div>		    	
           		</form>
        		</div> <!-- login_form -->
    		</div> <!-- login_box -->
        </div> <!-- main_content -->
	</section> 
	<link href="./css/login_form.css?ver=1" rel="stylesheet" type="text/css">
</body>
</html>

