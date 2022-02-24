<?php

    // Protection
    $whitelist = array(
        '127.0.0.1',
        '::1'
    );

    // Protection
    if (!in_array($_SERVER['REMOTE_ADDR'], $whitelist)){
        header('Location: /');
    }

    // Api Fetch
    $api_url = 'https://api.coingecko.com/api/v3/coins/bitcoin/';
    $json_data = file_get_contents($api_url, true);
    $obj = json_decode($json_data);

    // DB Connction
    $host = "91.218.65.223:3306";
    $name = "test";
    $user = "konradtest";
    $password = "_o0vL93o";

    // Connecting to DB
    try {
        $mysql = new PDO("mysql:host=$host;dbname=$name", $user, $password);
    } catch (PDOException $e){
        echo "SQL Error: ".$e->getMessage();
    }
    
    // Inserting values into the DB
    $stmt = $mysql->prepare("INSERT INTO bitcoin (value_at_the_time) VALUES (:val)");
    $stmt->bindParam(":val", $obj->market_data->current_price->eur);
    $stmt->execute();

?>