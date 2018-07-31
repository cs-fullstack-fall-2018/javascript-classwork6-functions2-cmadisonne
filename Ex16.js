function aboveorbelow(){
    if (userInput > 100){
        alert("It is above 100!")
    }
    else if (userInput < 100){
        alert("It is below 100")
    }
    else if (userInput = 100){
        alert("It's 100!!!")
    }
}

var userInput = parseInt(prompt("Enter your favorite number."));

function main() {
    aboveorbelow();
}

main();