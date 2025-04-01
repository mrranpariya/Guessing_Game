# Guessing Game

Welcome to the Guessing Game! This game challenges you to guess a random number within 10 attempts. If you guess correctly, you win! Keep track of your high scores and enjoy the challenge!

## Table of Contents

- [Game Features](#game-features)
- [How to Play](#how-to-play)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Contributing](#contributing)

## Game Features

- **10 Chances**: You have 10 attempts to guess the correct number.
- **Random Number Generation**: A new random number is generated each time you play.
- **Win and Lose Conditions**: The game tracks your guesses and informs you if you've won or lost.
- **Number is too high or low**: A message shows that your guessed number is larger than random number or smaller than guessed number so you can guessed it currectly.
- **High Score Tracking**: Your highest score is saved and displayed.
- **Restart Game**: After winning or losing, you can restart the game by pressing the "Again" button.
  -- **Button disabled**: You can not guess a number after winning or lossing the game you have to press again button to continue.

## How to Play

1. **Start the Game**: Open the game in your browser.
2. **Make a Guess**: Enter your guess in the input field and click the "Check" button.
3. **Get Feedback**: The game will tell you if your guess is too high, too low, or correct.
4. **Track Your Chances**: You have 10 chances to guess the correct number.
5. **Win or Lose**: If you guess the correct number within 10 attempts, you win! If you use all 10 attempts without guessing correctly, you lose.
6. **Restart the Game**: Click the "Again" button to restart the game with a new random number.

## File Structure

```
guessing-game/
│
├── index.html
├── style.css
└── script.js
```

- **index.html**: The main HTML file that contains the structure of the game.
- **style.css**: The CSS file for styling the game.
- **script.js**: The JavaScript file that contains the game logic.

## Contributing

Contributions are welcome! If you have any ideas or suggestions to improve the game, please feel free to fork the repository and submit a pull request.

1. Fork the repository.
2. Create a new branch: `git checkout -b my-feature-branch`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin my-feature-branch`.
5. Submit a pull request.
