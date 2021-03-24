# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Jonas Segundo**

Time spent: **14** hours spent in total

Link to project: https://glitch.com/edit/#!/cotton-picturesque-wannanosaurus

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [X] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:


## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](https://cdn.glitch.com/54fa3925-a66e-4b0d-ab78-d36c4d5141bd%2Fstrike%20loss.gif?v=1616621917604)
![](https://cdn.glitch.com/54fa3925-a66e-4b0d-ab78-d36c4d5141bd%2Fgame%20won.gif?v=1616621921590)
![](https://cdn.glitch.com/54fa3925-a66e-4b0d-ab78-d36c4d5141bd%2FTimer%20loss.gif?v=1616621925929)
![](https://cdn.glitch.com/54fa3925-a66e-4b0d-ab78-d36c4d5141bd%2Ftime%20appear%20disapear.gif?v=1616621931809)
 
## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
>* During the time I was creating the submission, I used w3schools.com in order to learn how to use methods such as setInterval() and clearInterval() in order to
create the timer.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
>* One challenge that I encountered during the creation was getting the optional features to interact correctly with the base app. One example of this 
has to do with the strike feature. I would have to make sure that the strikes were reset after ending the game because if it wasn't, then the game would
end after starting again. In addition to that problem, the decreasing time was an issue. Since I would shorten the wait time each round, I had to try out values
that would make it apparent the time was shortened but did not shorten it to the point the user could not guess.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
>* There are multiple questions that I have after completing this submission. One of them has to do with how are developers able
to embed payment options on their website, is it as simple as copying a link from the provider onto the website or do they have to manually 
link the service with some other method? In addition, I would like to know what methods developers use to secure websites.
4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
>* If I had a few more hours to work on this project, I would spend them on first refining some of the feature that are already added. The timer I implemented starts when the
next round begins, however I would prefer ti have it start right after the last clue of the sequence plays. I would also like to fix up the website a bit more with more
complex fonts or arrangments.



## License

    Copyright [YOUR NAME]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
