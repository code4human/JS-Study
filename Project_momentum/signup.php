<?php
    $id   = $_POST["id"];
    $pass = $_POST["pass"];
    $name = $_POST["name"];
              
    $con = mysqli_connect("localhost", "momentum", "spxVPjQCZzTr43AX", "momentum_db");

	$sql = "insert into member_table(memberID, memberName, pass)";
	$sql .= "values('$id', '$name', '$pass')";

	mysqli_query($con, $sql);  // $sql 에 저장된 명령 실행
	mysqli_close($con);     
	
	echo("
	<script>
		location.href = 'index.html';
	</script>
	");
?>

