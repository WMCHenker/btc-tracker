<?php

    // // Protection
    // $whitelist = array(
    //     '127.0.0.1',
    //     '::1'
    // );

    // // Protection
    // if (!in_array($_SERVER['REMOTE_ADDR'], $whitelist)){
    //     header('Location: /');
    // }

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
    $stmt = $mysql->prepare("INSERT INTO bitcoin (current_value, current_value_usd) VALUES (:val, :val_usd)");
    $stmt->bindParam(":val", $obj->market_data->current_price->eur);
    $stmt->bindParam(":val_usd", $obj->market_data->current_price->usd);
    $stmt->execute();
    
    $stmt = $mysql->prepare("SELECT * FROM bitcoin");
    $stmt->execute();
    $count = $stmt->rowCount();
    if ($count > 50) {
        $bitcoinData = array();
        while ($row = $stmt->fetch()) {
            $bitcoinData[$row['id']]['id'] = $row['id'];
            $bitcoinData[$row['id']]['time_stamp'] = $row['time_stamp'];
            $bitcoinData[$row['id']]['current_value'] = $row['current_value'];
            $bitcoinData[$row['id']]['current_value_usd'] = $row['current_value_usd'];
        };
        $lowest = 9999999;
        foreach ($bitcoinData as $btc) {
            if ($lowest > $btc['id']) {
                $lowest = $btc['id'];
            }
        }
    }

    $stmt = $mysql->prepare("DELETE FROM bitcoin WHERE id = :id");
    $stmt->bindParam(":id", $lowest);
    $stmt->execute();
?>