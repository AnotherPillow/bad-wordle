function generate_word(word_array) {
    let div = document.getElementById('words')
    for (let i = 0; i < word_array.length; i++) {
        let canvas = document.createElement('canvas')
        canvas.setAttribute('id', `canvas${i}`)
        canvas.setAttribute('width', '25')
        canvas.setAttribute('height', '25')
        canvas.setAttribute('style', 'border: 1px solid black;')
        div.appendChild(canvas)
        let ctx = canvas.getContext('2d')
        ctx.font = '30px Arial'
        ctx.fillText(word_array[i], 1, 21)
    }
}

function generate_wip_word(word_array) {
    let div = document.getElementById('words')
}

function generate_blank_word(word_array, row_count) {
    let div = document.getElementById('words')
    for (let i = 0; i < word_array.length; i++) {
        let canvas = document.createElement('canvas')
        canvas.setAttribute('id', `canvas_${row_count}_${i}`)
        //give the canvas a special class
        canvas.setAttribute('class', 'canvas_' + row_count)
        canvas.setAttribute('width', '25')
        canvas.setAttribute('height', '25')
        canvas.setAttribute('style', 'border: 1px solid black;')
        div.appendChild(canvas)
        let ctx = canvas.getContext('2d')
        ctx.font = '30px Arial'
        ctx.fillText("_", 1, 21)
    }
}

/* for (item in row) {
                let canvas = document.getElementById(`canvas_${guesses}_${item}`)
                let ctx = canvas.getContext('2d')
                ctx.fillText(input_array[l], 1, 21)
                canvas.classList.add('green')
           }*/

/*if (input_array[item -1] === word_array[item -1]) {
            let canvas = document.getElementById(`canvas_${guesses}_${item}`)
            let ctx = canvas.getContext('2d')
            ctx.fillText(input_array[item], 1, 21)
            canvas.classList.add('green')
        }*/

function add_word(word,guesses,input) {
    let word_array = word.split('')
    let input_array = input.split('')
    console.log(word_array,input_array)
    let row = document.getElementsByClassName(`canvas_${guesses}`)
    for (item in row) {
        //check if the letter in the input matches the letter in the word
        if (input_array[item] === word_array[item]) {
            let canvas = document.getElementById(`canvas_${guesses}_${item}`)
            let ctx = canvas.getContext('2d')
            ctx.fillText(input_array[item], 1, 21)
            canvas.classList.add('green')
        } else if (word.includes(input_array[item])) {
            let canvas = document.getElementById(`canvas_${guesses}_${item}`)
            let ctx = canvas.getContext('2d')
            ctx.fillText(input_array[item], 1, 21)
            canvas.classList.add('orange')
        }else {
            let canvas = document.getElementById(`canvas_${guesses}_${item}`)
            let ctx = canvas.getContext('2d')
            ctx.fillText(input_array[item], 1, 21)
            canvas.classList.add('grey')
        }
    }
}