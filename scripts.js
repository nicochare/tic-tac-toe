var starter = document.getElementById("starter");
var textstart = document.getElementById("text-start");
var counter;

// Playing buttons (1-9)
var b1 = document.getElementById("button-1");
var b2 = document.getElementById("button-2");
var b3 = document.getElementById("button-3");
var b4 = document.getElementById("button-4");
var b5 = document.getElementById("button-5");
var b6 = document.getElementById("button-6");
var b7 = document.getElementById("button-7");
var b8 = document.getElementById("button-8");
var b9 = document.getElementById("button-9");

// Random fact modal
const rfm = new bootstrap.Modal(document.getElementById('rfm'), {
    focus: true,
    backdrop: 'static'
});
const rfmparagraph = document.getElementById("randomFactP");
const closeModal1 = document.getElementById("closeModal1");
const closeModal2 = document.getElementById("closeModal2");
const restarter = document.getElementById("restarter");

// Random facts list
const randomfacts = ['Tic Tac Toe is also known as "Noughts and Crosses" in the UK.',"The game is believed to have originated from ancient Egypt around 1300 BC.","The first known computer game version of Tic Tac Toe was created in 1952 by A.S. Douglas.","Tic Tac Toe is often used to teach basic programming and artificial intelligence concepts.","The game has only 255,168 unique board configurations.","If both players play perfectly, every game of Tic Tac Toe will end in a draw.","The game is considered a zero-sum game, meaning one player's gain is another's loss.","There are 8 possible winning lines in a standard 3x3 Tic Tac Toe grid.","The first player to move has a strategic advantage if they play optimally.","Tic Tac Toe can be expanded into larger grids, like 4x4 or 5x5, creating more complex strategies.","The game has been used in psychological studies to understand decision-making and strategic thinking.",'A variant of Tic Tac Toe called "3D Tic Tac Toe" is played on a 4x4x4 grid.',"Tic Tac Toe was one of the first games to be implemented on early electronic gaming devices.","In 2000, a human vs. computer Tic Tac Toe tournament was held, where the computer used perfect play.","The game is often used as a pedagogical tool in teaching children about planning and foresight.",'In the Roman Empire, a similar game called "Terni Lapilli" was played using pebbles.',"The optimal strategy for Tic Tac Toe was first documented in the early 20th century.","Some variations of Tic Tac Toe allow more than two players.","The game can be played with any marking tools, including pencils, coins, or even on the sand.","A perfect game of Tic Tac Toe always ends in a tie if both players are aware of the optimal strategy."]

// Game starter
function start() { 
    disable_cards(false);
    starter.disabled = true;
    textstart.classList.toggle("tachado");
    b1.addEventListener("click", flip.bind(null, b1));
    b2.addEventListener("click", flip.bind(null, b2));
    b3.addEventListener("click", flip.bind(null, b3));
    b4.addEventListener("click", flip.bind(null, b4));
    b5.addEventListener("click", flip.bind(null, b5));
    b6.addEventListener("click", flip.bind(null, b6));
    b7.addEventListener("click", flip.bind(null, b7));
    b8.addEventListener("click", flip.bind(null, b8));
    b9.addEventListener("click", flip.bind(null, b9));
    counter = -1;
}

// get random number 1-20
function randomNumber() {
    return Math.floor(Math.random() * 20);
}

// enables the option to restart the game
function restart() {
    closeModal1.removeEventListener("click", restart);
    closeModal2.removeEventListener("click", restart);
    restarter.classList.remove("d-none");
    restarter.addEventListener("click", restart_it);
}

// restarts the game
function restart_it() {
    restarter.classList.add("d-none");
    restart_cards();
    counter = -1;
}

// Returns whos turn it is
function whos_turn(counter) {
    if (counter % 2 == 0) {
        return "X";
    } else {
        return "O";
    }
}

// Updates the disabled attribute of every card button
function disable_cards(status) {
    b1.disabled = status;
    b2.disabled = status;
    b3.disabled = status;
    b4.disabled = status;
    b5.disabled = status;
    b6.disabled = status;
    b7.disabled = status;
    b8.disabled = status;
    b9.disabled = status;
}

// The game has finished
function finish(winner) {
    disable_cards(true);
    var n = randomNumber();
    if (winner == "Draw") {
        document.getElementById("staticBackdropLabel").textContent = winner + "!";
    } else {
        document.getElementById("staticBackdropLabel").textContent = winner + " wins!";
    }
    rfmparagraph.textContent = randomfacts[n];
    rfm.show();
    closeModal1.addEventListener("click", restart);
    closeModal2.addEventListener("click", restart);
}

// Check if the game is over
function havent_won() {
    var p1 = b1.textContent;
    var p2 = b2.textContent;
    var p3 = b3.textContent;
    var p4 = b4.textContent;
    var p5 = b5.textContent;
    var p6 = b6.textContent;
    var p7 = b7.textContent;
    var p8 = b8.textContent;
    var p9 = b9.textContent;
    // Check if X winner
    if (p1 == "X" && p2 == "X" && p3 == "X") {
        return [false, "X"];
    } else if (p4 == "X" && p5 == "X" && p6 == "X") {
        return [false, "X"];
    } else if (p7 == "X" && p8 == "X" && p9 == "X") {
        return [false, "X"];
    } else if (p1 == "X" && p4 == "X" && p7 == "X") {
        return [false, "X"];
    } else if (p2 == "X" && p5 == "X" && p8 == "X") {
        return [false, "X"];
    } else if (p3 == "X" && p6 == "X" && p9 == "X") {
        return [false, "X"];
    } else if (p1 == "X" && p5 == "X" && p9 == "X") {
        return [false, "X"];
    } else if (p3 == "X" && p5 == "X" && p7 == "X") {
        return [false, "X"];
    // Check if O winner
    } else if (p1 == "O" && p2 == "O" && p3 == "O") {
        return [false, "O"];
    } else if (p4 == "O" && p5 == "O" && p6 == "O") {
        return [false, "O"];
    } else if (p7 == "O" && p8 == "O" && p9 == "O") {
        return [false, "O"];
    } else if (p1 == "O" && p4 == "O" && p7 == "O") {
        return [false, "O"];
    } else if (p2 == "O" && p5 == "O" && p8 == "O") {
        return [false, "O"];
    } else if (p3 == "O" && p6 == "O" && p9 == "O") {
        return [false, "O"];
    } else if (p1 == "O" && p5 == "O" && p9 == "O") {
        return [false, "O"];
    } else if (p3 == "O" && p5 == "O" && p7 == "O") {
        return [false, "O"];
    } else {
        return [true, null];
    }
}

// Restart cards
function restart_cards() {
    b1.classList.toggle("flip-it-up");
    b2.classList.toggle("flip-it-up");
    b3.classList.toggle("flip-it-up");
    b4.classList.toggle("flip-it-up");
    b5.classList.toggle("flip-it-up");
    b6.classList.toggle("flip-it-up");
    b7.classList.toggle("flip-it-up");
    b8.classList.toggle("flip-it-up");
    b9.classList.toggle("flip-it-up");
    setTimeout(function() {}, 300);
    setTimeout(function() {
        b1.textContent = "";
        b2.textContent = "";
        b3.textContent = "";
        b4.textContent = "";
        b5.textContent = "";
        b6.textContent = "";
        b7.textContent = "";
        b8.textContent = "";
        b9.textContent = "";
        disable_cards(false);
    }, 200)
}

// Flip the pressed location
function flip(el) {
    var winner;
    var results;

    el.classList.toggle("flip-it-up");
    el.disabled = true;
    el.classList.toggle("low-text-op");
    counter = counter + 1;
    el.textContent = whos_turn(counter);

    
    // sets the card's text at the middle of its flip
    setTimeout(function() {}, 300);
    setTimeout(function() {
        el.classList.toggle("low-text-op");  
        results = havent_won();
        console.log(whos_turn(counter));
        console.log(results);
        if (!results[0] || counter >= 8) {
            if (results[0]) {
                winner = "Draw";
                finish(winner);
            } else {
                winner = results[1];
                finish(winner);
            }
        }
    }, 200)
    
}

// play button listener
starter.addEventListener("click", start);