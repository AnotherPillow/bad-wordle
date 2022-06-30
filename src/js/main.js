let canvas = {};
const gen_word = async () => {
    let div = document.getElementById('words')
    let random_word = getWord()
    let row_count = 0;
    let word_array = random_word.split('')
    //create a canvas element and append it to the div for every letter in the word and set the tex tinside the canvas as the letter
    for (let i = 0; i < 6; i++) {
        let br = document.createElement('br')
        row_count++
        generate_blank_word(word_array,row_count)
        div.appendChild(br)
    }
}

let word;
const getWord = () => {
    let wl = words({exactly: 10, maxLength: 5})
    for (w in wl) {
        if (wl[w].length === 5) {
            word = wl[w]
            return wl[w];
        }
    }
}

let guesses = 0
//add an event on guess_word_input for when the user presses enter
document.getElementById('guess_word_input').addEventListener('keydown', (e) => {
    //console.log(word)
    //console.log(guesses)
    if (e.keyCode === 13) {
        if (guesses > 6) { 
            alert("You lost, the word was " + word)
        }
        let input = document.getElementById('guess_word_input').value
        if (input.length === 5) {
            if (input === word) {
                alert("Congratulations!")
            }
            guesses++
            add_word(word,guesses,input)
            return;
        } else {
            alert("Please enter a 5 letter word")
        }
        document.getElementById('guess_word_input').value = ''
    }
})