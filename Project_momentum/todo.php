<?php
    session_start();
    $id = $_SESSION['userid'];
    $todo = $_POST['todo'];

    $con = mysqli_connect("localhost", "momentum", "spxVPjQCZzTr43AX", "momentum_db");

    $sql2 = "insert into todo_table(memberID, todo) values ('$id', '$todo')";
    $sql3 = "select todo from todo_table where todo = '$todo'";

    mysqli_query($con, $sql2);
    $result2 = mysqli_query($con, $sql3);
    $checkadd = mysqli_fetch_row($result2);

    echo("
        <script>
        history.go(-1)
        </script>
    ");
?>