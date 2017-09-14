// JavaScript function that wraps everything
$(document).ready(function() {

    var numberToMatch;
    var gemRuby;
    var gemPearl;
    var gemAmeythyst;
    var gemDiamond;

    var sum = 0;
    var yourTally = [];
    var winCounter = 0;
    var lossCounter = 0;


    function randomizeGems() {
        console.log("randomizeGems");
        gemRuby = Math.floor(1 + Math.random() * 20);
        console.log("Ruby Value:" + gemRuby);

        gemPearl = Math.floor(1 + Math.random() * 20);
        console.log("Pearl Value:" + gemPearl);

        gemAmeythyst = Math.floor(1 + Math.random() * 20);
        console.log("Amethyst Value:" + gemAmeythyst);

        gemDiamond = Math.floor(1 + Math.random() * 20);
        console.log("Diamond Value:" + gemDiamond);
    }
    // TODO: add a function that resets that variable values
    function reset() {
        console.log("reset");

        // 1. When player wins or loses the game, the page re-randomizes values for number to match and gems
        
        //Ruby, Pearl, Amethyst, Diamond re-radomize call function() 
        randomizeGems();

        // 2. resets both sum and tally array to 0
        sum = 0;

        //numberToMatch -- re-randomize
        numberToMatch = Math.floor(25 + Math.random() * 100);
        $("#number").html(numberToMatch);
        console.log("Number to match:" + numberToMatch);

        //Empty the guess array
        yourTally = [];

        //yourScore array to empty
    };

    //Calculate wins and losses
    function recalculate() {
        console.log("recalculate");

        //If the sum of players guesses equal the number to match, increase wins by 1
        if (sum === numberToMatch) {
            winCounter++;
            $("#win").html(winCounter);
            console.log("Your number was:" + sum);
            alert("You win!");
            console.log("Win count:" + winCounter);

            //If player wins, call reset fuction()
            reset();

        //if the sum of players guesses exceed the number to match, increase losses by 1

        } else if (sum > numberToMatch) {
            lossCounter++;
            $("#loss").html(lossCounter);
            console.log("Your number was:" + sum);
            alert("You lose!");
            console.log("Loss Count:" + lossCounter);

            //If player loses, call reset fuction()
            reset();
        }

    };
    //On click button functions for each gem

    $("#ruby").on("click", function() {
        yourTally.push(gemRuby);
        sum = sum + gemRuby;
        console.log("Your Score:" + yourTally);
        console.log("Sum:" + sum);
        //Displays value in the html
        recalculate();
        $("#tally").html(sum);
    });

    $("#pearl").on("click", function() {
        yourTally.push(gemPearl);
        sum = sum + gemPearl;
        console.log("Your Score:" + yourTally);
        console.log("Sum:" + sum);
        //Displays value in the html
        recalculate();
        $("#tally").html(sum);
    });

    $("#ameythyst").on("click", function() {
        yourTally.push(gemAmeythyst);
        sum = sum + gemAmeythyst;
        console.log("Your Score:" + yourTally);
        console.log("Sum:" + sum);
        //Displays value in the html
        recalculate();
        $("#tally").html(sum);
    });

    $("#diamond").on("click", function() {
        yourTally.push(gemDiamond);
        sum = sum + gemDiamond;
        console.log("Your Score:" + yourTally);
        console.log("Sum:" + sum);
        //Displays value in the html
        recalculate();
        $("#tally").html(sum);
    });

    // init 
    randomizeGems();

    //Number randomizers for "Number to match" and gem values
    numberToMatch = Math.floor(25 + Math.random() * 100);
    $("#number").html(numberToMatch);
    console.log("Number to match:" + numberToMatch);

});