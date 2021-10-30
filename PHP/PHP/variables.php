<!DOCTYPE html>
<html>

    <head>
        <title>PHP Variables and Constants</title>
    </head>

    <body>
        <h1>PHP Variables</h1>
        <?php

        $loggedIn=True;

        $myAge=26;

        $totalPrice=146.28;

        $fullName="Brad Hussey";

        echo "Hello, $fullName and you are $myAge years old!";
        ?>

        <br><br>
        <h2> PHP Constants</h2>

        <?php 
        $name="jio";

        echo "<br>$name";
        $salary=3799.99;
        echo "<br>$salary";

        define("TITLE","PHP Variables and constants");

        echo "<br>";
        echo TITLE;

        ?>


    </body>
</html>