<?php
    session_start();
    if (isset($_SESSION["userid"])) $userid = $_SESSION["userid"];
    else $userid = "";
    if (isset($_SESSION["username"])) $username = $_SESSION["username"];
    else $username = "";

    $logged = "Hi, ".$username;
?>	


<head>
    <meta charset="utf-8">
    <title>Momentum</title>
    <link href="./css/main.css" type="text/css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=McLaren&display=swap&subset=latin-ext" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script>
        function gettingJSON(){
            $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=seoul&APPID=1938448af9afcbacf460f7b411694646",function(json){
                console.log(json);
                document.getElementByClassName("weather").textContent = json["weather"][0]["main"];
            });
        }

        window.onload = function(){
            gettingJSON();
            document.querySelector("#date").textContent = getTime();
            init();
        }
    </script>
    <script src = "./js/main.js"></script>
</head>

<body>
    <div id="header">
        <span id = "date">날짜</span>
        <div>
            <span class = "time">시간</span>
            <span class = "weather">날씨</span>
        </div>
        <form method=get action="http://www.google.co.kr/search" target="_blank">
            <div id="goo">
                <input type="search" name="q" class="goo_text" size=25 maxlength=255 placeholder="  Search in Google"/>
                <!-- type="image"는 "submit"역할을 하는 이미지 버튼 -->
                <input type="image" name="btnG" class="goo_button" src="./img/google.png" value="Google 검색" onclick = "open_page('http://www.google.co.kr/search)">
            </div>
        </form>
    </div>

    <div id ="main">
        <p3><?=$logged?></p3><br>
        <p3>What is your main focus today?</p3><br>
        <a href="#"><img class="todo_button" src="./img/b_result.gif"></a>
    </div>

    <div id="footer">
        <p class="saying">Manage your work with Momentum!</p>
        <a href="logout.php"><img src="./img/logout.png" class="logout"></a>
    </div>
    
</body>
