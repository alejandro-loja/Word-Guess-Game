


var j = 0;
var word_bank = ['potato', 'orange', 'chicken', 'firefly', 'bread', 'chair'];
var word_to_guess = word_bank[j];
var good_letter = [];
var bad_letter = [];
var dom_word = document.getElementById('word');
var chances = 6;
var tries;
var print_word;

function print() {
    var word_to_guess = word_bank[j];
    var print_word = " ";
    for (var i = 0; i < word_to_guess.length; i++) {

        if (good_letter.indexOf(word_to_guess[i]) > -1) {
            print_word += " " + word_to_guess[i] + " ";
        } else {
            dom_word.textContent = print_word;
            print_word += " _ ";

        }
    }
    dom_word.textContent = print_word;
}

// var finalword = print_word.replace(/\s/g, '');
// console.log(finalword);
// console.log(word_bank[j]);
// // var howLongFinal = finalword.length;
// // var howLongWord = word_bank[j].length;
// console.log(howLongFinal);
// console.log(howLongWord);
// if (howLongFinal === howLongWord) {
//     reset("Won!");
// }





document.onkeypress = function (event) {
    var word_to_guess = word_bank[j];
    // if key pressed is one (or more) of the letters in the word bank then push that letter to the good letter array.
    if (word_to_guess.indexOf(event.key) > -1) {
        good_letter.push(event.key);
        console.log(good_letter);
    }
    else {
        bad_letter.push(event.key);
        console.log(bad_letter);
        chances--;
        var tries = document.getElementById('tries');
        tries.textContent = chances;

        console.log(chances);
        if (chances === 0) {
            reset("Lost");
        }

    }
    print();
}
//RESET function
function reset(decision) {
    tries = document.getElementById('tries');

    console.log('Previous Value of J: ' + j);
    console.log('Previous Word: ' + word_to_guess);

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

    console.log('New Value of J: ' + j);
    console.log('New word: ' + word_bank[j]);
    print_word = " ";
    alert("You " + decision);
}

print();
