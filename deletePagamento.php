<?php  

    $id = $_POST['id'];

    if (isset($id)) {
        $conn = new mysqli('localhost', 'root', 'root', 'Hotel2');

        if ($conn -> connect_errno) {
            echo json_encode('errore ' . $conn -> connect_errno);
            return;
         }

        $result = $conn -> query(
            "
            DELETE 
            FROM pagamenti
            WHERE id =  $id "  
            
        );
    }


    $conn -> close();
