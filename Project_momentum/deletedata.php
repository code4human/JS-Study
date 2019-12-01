<?php
    $checktodo = $_POST["todocheck"];
    $checknum = count($checktodo);

    for ($i = 0; $i < $checknum; $i++){
        $con = mysqli_connect("localhost", "momentum", "spxVPjQCZzTr43AX", "momentum_db");
        $sql = "delete from todo_table where todo = '$checktodo[$i]'";
        mysqli_query($con, $sql);
    }

    echo ("
    <script>
        location.href = 'main.php';
    </script>
    ");
?>