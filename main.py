# Word Guessing Adventure (Hangman Style)
# A game where players try to guess a hidden word with limited attempts

def on_start():
    # Initialize game variables
    word = "CODING"  # The word to guess
    attempts = 6     # Number of attempts allowed
    guessed_letters = []  # List to store guessed letters
    
    # Display welcome message
    game.splash("Word Guessing Adventure!")
    game.show_long_text("Try to guess the word. You have " + str(attempts) + " attempts.", DialogLayout.BOTTOM)
    
    while attempts > 0:
        # Show current state of word with underscores for unguessed letters
        display_word = ""
        index = 0
        while index < len(word):
            if word[index] in guessed_letters:
                display_word += word[index]
            else:
                display_word += "_"
            index += 1
        
        game.show_long_text("Word: " + display_word, DialogLayout.BOTTOM)
        
        # Get user input and validate it's a single letter
        guess = game.ask_for_string("Enter ONE letter:")
        
        # Check if input is valid (single letter)
        if len(guess) != 1:
            game.splash("Please enter only ONE letter!")
            continue
            
        # Convert lowercase to uppercase
        if guess == "a": guess = "A"
        elif guess == "b": guess = "B"
        elif guess == "c": guess = "C"
        elif guess == "d": guess = "D"
        elif guess == "e": guess = "E"
        elif guess == "f": guess = "F"
        elif guess == "g": guess = "G"
        elif guess == "h": guess = "H"
        elif guess == "i": guess = "I"
        elif guess == "j": guess = "J"
        elif guess == "k": guess = "K"
        elif guess == "l": guess = "L"
        elif guess == "m": guess = "M"
        elif guess == "n": guess = "N"
        elif guess == "o": guess = "O"
        elif guess == "p": guess = "P"
        elif guess == "q": guess = "Q"
        elif guess == "r": guess = "R"
        elif guess == "s": guess = "S"
        elif guess == "t": guess = "T"
        elif guess == "u": guess = "U"
        elif guess == "v": guess = "V"
        elif guess == "w": guess = "W"
        elif guess == "x": guess = "X"
        elif guess == "y": guess = "Y"
        elif guess == "z": guess = "Z"
            
        # Check if letter was already guessed
        if guess in guessed_letters:
            game.splash("You already guessed that!")
            continue
            
        guessed_letters.append(guess)
        
        # Check if guess is correct and count occurrences
        if guess in word:
            # Count how many times the letter appears
            count = 0
            index = 0
            while index < len(word):
                if word[index] == guess:
                    count += 1
                index += 1
            info.change_score_by(count)
            game.splash("Correct! Letter '" + guess + "' appears " + str(count) + " time(s)!")
        else:
            attempts -= 1
            game.splash("Wrong! " + str(attempts) + " attempts left")
            
        # Check if word is complete
        word_complete = True
        index = 0
        while index < len(word):
            if word[index] not in guessed_letters:
                word_complete = False
                break
            index += 1
                
        if word_complete:
            game.splash("You won! The word was " + word)
            break
            
    if attempts == 0:
        game.splash("Game Over! The word was " + word)

# Extension: Add difficulty levels
def set_difficulty():
    difficulty = game.ask_for_string("Choose difficulty (E/M/H):")
    # Convert to uppercase without chr/ord
    if difficulty == "e": difficulty = "E"
    elif difficulty == "m": difficulty = "M"
    elif difficulty == "h": difficulty = "H"
        
    if difficulty == "E":
        return 8  # Easy - more attempts
    elif difficulty == "M":
        return 6  # Medium - standard attempts
    else:
        return 4  # Hard - fewer attempts

# Start the game when A button is pressed
def on_button_pressed():
    on_start()
controller.A.on_event(ControllerButtonEvent.PRESSED, on_button_pressed)