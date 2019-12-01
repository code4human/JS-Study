<?php
    session_start();
    if (isset($_SESSION["userid"])) $userid = $_SESSION["userid"];
    else $userid = "";
    if (isset($_SESSION["username"])) $username = $_SESSION["username"];
    else $username = "";

    $logged = "Hi, ".$username;

    $id = $_SESSION['userid'];
    $con = mysqli_connect("localhost", "momentum", "spxVPjQCZzTr43AX", "momentum_db");
    $sql = "select todo from todo_table where memberID = '$id'";
    $result3 = mysqli_query($con, $sql);
    $resultNum = mysqli_num_rows($result3);

    $array = array();
    while ($row3=mysqli_fetch_row($result3)){
        $array[] = $row3[0];
    }

?>	


<head>
    <meta charset="utf-8">
    <title>Momentum</title>
    <link href="./css/main.css" type="text/css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=McLaren&display=swap&subset=latin-ext" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
</head>

<body>
    <div id="header">
        <span id = "date">날짜</span>
        <div>
            <span id = "time">시간</span>
            <span id = "weather">날씨</span>
        </div>
        <form method=get action="http://www.google.co.kr/search" target="_blank">
            <div id="goo">
                <input type="search" name="q" class="goo_text" size=25 maxlength=255 placeholder="  Search in Google"/>
                <!-- type="image"는 "submit"역할을 하는 이미지 버튼 -->
                <input type="image" name="btnG" class="goo_button" src="./img/google.png" onclick = "open_page('http://www.google.co.kr/search)">
            </div>
        </form>
    </div>

    <div id ="main">
        <p3><?=$logged?></p3><br>
        <p3>What is your main focus today?</p3><br>
        <form name = 'todo_form' method = post action = 'todo.php'>
        <p3><input type = 'text' id = 'checkinput' name = 'todo' autofocus = ''></p3>
        </form>
        <img id = 'submit' style="cursor:pointer" src="./img/submit.png" onclick="submitFunc()">
        <form id = 'list_text' name = "formcheck" method = "post" action = "deletedata.php">
            <div id = 'checklist'></div>
            <img id = 'deleteButton' style="cursor:pointer" src="./img/delete.png" onclick="document.formcheck.submit()">
        </form>
    </div>

    <div id="footer">
        <p class="saying">Manage your work with Momentum!</p>
        <a href="logout.php"><img src="./img/logout.png" class="logout"></a>
    </div>
    <script>

        function gettingJSON(){
            $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=seoul&APPID=1938448af9afcbacf460f7b411694646",function(json){
                document.getElementById("weather").textContent = json["weather"][0]["main"];
            });
        }

        window.onload = function(){
            gettingJSON();
            document.querySelector("#date").textContent = getTime();
            init();
        }
        

        let arr = <?php echo json_encode($array)?>;
        let NumResult = <?=$resultNum?>;
        
        for (let i=0; i<NumResult; i++){
            makecheck(arr[i]);
        }

        function submitFunc() {
            document.todo_form.submit();
        }

        function makecheck(alpha) {
            var checkli = document.getElementById('checklist');
            var submitButton = document.querySelector('#submit');
            
            var div = document.createElement('div');

            var check = document.createElement('input');
            check.type = 'checkbox';
            check.name = "todocheck[]";
            check.value = alpha;
            check.class = 'checkstyle';
            check.checked = '';

            var label = document.createElement('label');
            label.htmlFor = 'id';
            label.appendChild(document.createTextNode(alpha));

            div.appendChild(check);
            div.appendChild(label);
            checkli.appendChild(div);
        }
        
    </script>
    <script src = "./js/main.js"></script>
</body>
