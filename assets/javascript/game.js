


var j = 0;
var word_bank = ['potato', 'orange', 'chicken', 'firefly', 'bread', 'chair'];
var word_to_guess = word_bank[j];
var good_letter = [];
var bad_letter = [];
var dom_word = document.getElementById('word');
var dom_badletter = document.getElementById('letters-chosen');
var chances = 6;
var tries;
var print_word;
var lettersChosen;

function print() {
    var word_to_guess = word_bank[j];
    print_word = " ";
    for (var i = 0; i < word_to_guess.length; i++) {

        if (good_letter.indexOf(word_to_guess[i]) > -1) {
            print_word += " " + word_to_guess[i] + " ";
        } else {
            dom_word.textContent = print_word;
            print_word += " _ ";
        }
    }

    dom_word.textContent = print_word;
    if (print_word.indexOf('_') === -1) {
        reset('WON');
        print();
    }
}

function lesschance() {
    chances--;
    var tries = document.getElementById('tries');
    tries.textContent = chances;
    if (chances === 0) {
        reset('LOST');
    }
}



document.onkeypress = function (event) {
    var word_to_guess = word_bank[j];
    // if key pressed is one (or more) of the letters in the word bank then push that letter to the good letter array.
    if (word_to_guess.indexOf(event.key) > -1) {
        good_letter.push(event.key);
    }
    else if (bad_letter.indexOf(event.key) === -1) {
        bad_letter.push(event.key);
        lesschance();
        dom_badletter.textContent += " " + event.key + " ";
    }
    else {
    }

    print();
}
//RESET function
function reset(decision) {
    var word_to_guess = word_bank[j];
    tries = document.getElementById('tries');

    if (j < (word_bank.length - 1)) {
        j++;
    }
    else {
        j = 0;
    }

    tries.textContent = "6";
    bad_letter = [];
    good_letter = [];
    chances = 6;
    dom_badletter.textContent = " ";

    print_word = " ";
    alert("You " + decision + "! The Word Was: " + word_to_guess.toUpperCase());
}

print();
