//  Word Guessing Adventure (Hangman Style)
//  A game where players try to guess a hidden word with limited attempts
function on_start() {
    let display_word: string;
    let index: number;
    let guess: string;
    let count: number;
    let word_complete: boolean;
    //  Initialize game variables
    let word = "CODING"
    //  The word to guess
    let attempts = 6
    //  Number of attempts allowed
    let guessed_letters = []
    //  List to store guessed letters
    //  Display welcome message
    game.splash("Word Guessing Adventure!")
    game.showLongText("Try to guess the word. You have " + ("" + attempts) + " attempts.", DialogLayout.Bottom)
    while (attempts > 0) {
        //  Show current state of word with underscores for unguessed letters
        display_word = ""
        index = 0
        while (index < word.length) {
            if (guessed_letters.indexOf(word[index]) >= 0) {
                display_word += word[index]
            } else {
                display_word += "_"
            }
            
            index += 1
        }
        game.showLongText("Word: " + display_word, DialogLayout.Bottom)
        //  Get user input and validate it's a single letter
        guess = game.askForString("Enter ONE letter:")
        //  Check if input is valid (single letter)
        if (guess.length != 1) {
            game.splash("Please enter only ONE letter!")
            continue
        }
        
        //  Convert lowercase to uppercase
        if (guess == "a") {
            guess = "A"
        } else if (guess == "b") {
            guess = "B"
        } else if (guess == "c") {
            guess = "C"
        } else if (guess == "d") {
            guess = "D"
        } else if (guess == "e") {
            guess = "E"
        } else if (guess == "f") {
            guess = "F"
        } else if (guess == "g") {
            guess = "G"
        } else if (guess == "h") {
            guess = "H"
        } else if (guess == "i") {
            guess = "I"
        } else if (guess == "j") {
            guess = "J"
        } else if (guess == "k") {
            guess = "K"
        } else if (guess == "l") {
            guess = "L"
        } else if (guess == "m") {
            guess = "M"
        } else if (guess == "n") {
            guess = "N"
        } else if (guess == "o") {
            guess = "O"
        } else if (guess == "p") {
            guess = "P"
        } else if (guess == "q") {
            guess = "Q"
        } else if (guess == "r") {
            guess = "R"
        } else if (guess == "s") {
            guess = "S"
        } else if (guess == "t") {
            guess = "T"
        } else if (guess == "u") {
            guess = "U"
        } else if (guess == "v") {
            guess = "V"
        } else if (guess == "w") {
            guess = "W"
        } else if (guess == "x") {
            guess = "X"
        } else if (guess == "y") {
            guess = "Y"
        } else if (guess == "z") {
            guess = "Z"
        }
        
        //  Check if letter was already guessed
        if (guessed_letters.indexOf(guess) >= 0) {
            game.splash("You already guessed that!")
            continue
        }
        
        guessed_letters.push(guess)
        //  Check if guess is correct and count occurrences
        if (word.indexOf(guess) >= 0) {
            //  Count how many times the letter appears
            count = 0
            index = 0
            while (index < word.length) {
                if (word[index] == guess) {
                    count += 1
                }
                
                index += 1
            }
            info.changeScoreBy(count)
            game.splash("Correct! Letter '" + guess + "' appears " + ("" + count) + " time(s)!")
        } else {
            attempts -= 1
            game.splash("Wrong! " + ("" + attempts) + " attempts left")
        }
        
        //  Check if word is complete
        word_complete = true
        index = 0
        while (index < word.length) {
            if (guessed_letters.indexOf(word[index]) < 0) {
                word_complete = false
                break
            }
            
            index += 1
        }
        if (word_complete) {
            game.splash("You won! The word was " + word)
            break
        }
        
    }
    if (attempts == 0) {
        game.splash("Game Over! The word was " + word)
    }
    
}

//  Extension: Add difficulty levels
function set_difficulty(): number {
    let difficulty = game.askForString("Choose difficulty (E/M/H):")
    //  Convert to uppercase without chr/ord
    if (difficulty == "e") {
        difficulty = "E"
    } else if (difficulty == "m") {
        difficulty = "M"
    } else if (difficulty == "h") {
        difficulty = "H"
    }
    
    if (difficulty == "E") {
        return 8
    } else if (difficulty == "M") {
        //  Easy - more attempts
        return 6
    } else {
        //  Medium - standard attempts
        return 4
    }
    
}

//  Hard - fewer attempts
//  Start the game when A button is pressed
controller.A.onEvent(ControllerButtonEvent.Pressed, function on_button_pressed() {
    on_start()
})
