# Scoreboard App
Mobile app for keeping scores, built using React Native and Redux (initially intended for board game scorekeeping).

## Table of Contents
- [Motivation](#motivation)
- [Features](#features)
- [Screenshots](#screenshots)
  * [Home Screen](#home-screen)
  * [New Player Dialog](#new-player-dialog)
  * [Score Input Dialog](#score-input-dialog)
  * [Round Detail Dialog](#round-detail-dialog)
  * [Settings Dialog](#settings-dialog)
- [Technologies Used](#technologies-used)
- [Future Changes](#future-changes)
- [License](#license)

## Motivation
I decided to build this app for 2 reasons. First, as me and my friends got together and played different types of board games we ran into the problem of keeping track of our scores. Specifically, it was a hassle to keep track of the scores whenever we did not have a sheet of paper and a pen. Consequently, we would use our phones to keep track of scores, but an Excel sheet or something similar was just too clumsy for such a simple task. That's when it became clear that an app for this would be ideal, which leads me to my second reason for doing this app.

I had heard about React and how powerful a framework it was, then I heard about React Native and I could not keep myself from diving into it and testing it out for myself by building an app that I would actually find regularly useful. That's why I took on the task to learn React Native and Redux in order to build this clean-looking and easy-to-use app.

## Features
- Any number of players can be added to the current game
- Remove a player at any moment
- Input score per player
- Sort players by their initial order (as they were added), their score, or their name
- View player's score per round
- The player(s) currently winning is highlighted
- Reset game

## Screenshots
The following screenshots present all the different screens, dialogs, and features currently available in this app.

### Home Screen
This is the main screen, where the scores are displayed.

#### Empty game
This view shows the Home Screen with 4 players added, not having started the game yet (no scores entered).
</br><p align="center"><img src="https://drive.google.com/uc?id=1LHM8V0yrjhNmlXCM8JrjruNIo5yHsQE4" height="400" width=""></p>

#### Game already started
This view shows the Home Screen with scores already inputted. Highlighted is the player currently winning.
</br><p align="center"><img src="https://drive.google.com/uc?id=1PTsdIch-2aqn6R_JBe1D_9sRqP0LEFqd" height="400" width=""></p>

#### Game with a tie on scores
This view shows the Home Screen with scores already inputted. Highlighted are the players currently winning.
</br><p align="center"><img src="https://drive.google.com/uc?id=1cVHeMV8QCdgm-Aq-stVThHgk9G8_30Bg" height="400" width=""></p>

### New Player Dialog
Players are added to the game by entering a name on the input box.
</br><p align="center"><img src="https://drive.google.com/uc?id=1oUYPHaoxcUDyHNCnVxS17ZhhcXoCkpdx" height="400" width=""></p>

Once the new player is added, a notification appears at the bottom of the screen.
</br><p align="center"><img src="https://drive.google.com/uc?id=11Itm9Fb1DLMd39KTlVmFYi2nIOTjTZlO" height="400" width=""></p>

If a player with the name entered already exists, an error is displayed.
</br><p align="center"><img src="https://drive.google.com/uc?id=1A4Z1dyTKLm7s3QQcnw_etTPY8MG9Gao_" height="400" width=""></p>

### Score Input Dialog
Scores are inputted by entering a numeric value on the input box.
</br><p align="center"><img src="https://drive.google.com/uc?id=1MzKdyaR09hlFxv1ycmoS1EyV7oFAWWMt" height="400" width=""></p>

### Round Detail Dialog
Scores are displayed on this dialog in the order in which they were entered.

#### Detail with no scores
This dialog shows a player with no scores entered yet.
</br><p align="center"><img src="https://drive.google.com/uc?id=1ST6XEu_sV9LlV7fZS7xuE7FTEB9H79rf" height="400" width=""></p>

#### Detail with scores
This dialog shows a player with various scores entered.
</br><p align="center"><img src="https://drive.google.com/uc?id=1zLV6hjd_lBLq-kXkCby103OolIlcdl3B" height="400" width=""></p>

#### Remove a player dialog
A player can also be removed from the game through this dialog.
</br><p align="center"><img src="https://drive.google.com/uc?id=1FhA08enrTmvSOoGLnvb27c2pfasMdYEP" height="400" width=""></p>

When a player is removed, a notification appears at the bottom of the screen.
</br><p align="center"><img src="https://drive.google.com/uc?id=19ZkTurqcQdFg3RXJSoGL3kpHl4e1Oy_Z" height="400" width=""></p>

### Settings Dialog
In the settings dialog, the list of players can be sorted and the game can be reset.

#### Sort Players List
Players can be sorted by their initial order (as they were added), their score, or their name.
</br><p align="center"><img src="https://drive.google.com/uc?id=1SWPS4DEqzKypLieapRqkc5_KiLN6Sanw" height="400" width=""></p>

#### Reset Game
The game can be reset from the Settings dialog.
</br><p align="center"><img src="https://drive.google.com/uc?id=1OJcRTXPwd0kNapLlICCDKzjt3li7F5w9" height="400" width=""></p>

Once the game is reset, a notification appears at the bottom of the screen.
</br><p align="center"><img src="https://drive.google.com/uc?id=1PhVGEfKT9eQCstYX-5a2sauXJAub38wZ" height="400" width=""></p>

## Technologies Used
- React Native
- Redux
- Babel
- Reselect
- Expo

## Future Changes
- Include user login
- Integrate with a database to track multiple games played
- Include different game templates to automate game input
- Allow users to style app as desired

## License

MIT License

Copyright (c) 2019 Andy Sapper

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
