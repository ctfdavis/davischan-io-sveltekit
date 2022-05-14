---
title: 'Made 9 Projects to Level Up My JavaScript Skills'
desc: "Where I challenged myself to finish 9 projects. Some were easy and fun to do, while others, not so much!"
date: '2021/01/15'
tags: ['Challenge', 'JavaScript', 'CSS']
seq: 5
---

## 9 Projects I Finished

After thinking for some time about what I can do to step up my game in JavaScript, I reckon the key is the same with HTML and CSS: do projects. While practice makes permanent, I need to make sure that the kind of practice that I do suits my level.

That's why I was so thrilled when I stumbled across this article titled [“17 JavaScript Projects for Beginners to Perfect Your Coding Skills in 2021”](https://mikkegoes.com/javascript-projects-for-beginners/) written by Mikke. It is a fantastic way to get started in 2021! The article contains what I need at the moment – project ideas that I can do independently. Below are the 9 projects that I have completed so far.

1. Stopwatch
2. Digital Clock
3. Calculator
4. Drum Kit
5. Guess the Color
6. Hangman
7. Tic Tac Toe
8. Pong
9. Matching Pairs

## JS Project 1: Stopwatch

You can see the code for this project [here on JSFiddle](https://jsfiddle.net/etLa0xks/1/). I will mention some pitfalls I encountered while doing this project. First, the `setTimeout()` v.s. `setInterval()` decision. I picked the former for the first project because I was not so familiar with `setInterval()`. Afterward, I realized that if you would like something to take place at a regular interval, you would typically go for `setInterval()` instead of `setTimeout()` — definitely, something to bear in mind.

Other than that, I have had some minor issues with the time format of the `minutes:seconds:milliseconds`. The troublesome part is the milliseconds I obtain from the `getSecond`, which can be single-digit, two-digit, three-digit, etc. In the project, I set up intervals to update the variable ms: `ms++` after every 10 milliseconds, so we may have 5 , 55, 555. This presents an obstacle to the display format on the stopwatch, so I added the following code:

```javascript
document.getElementById("millisec").innerHTML = ("0" + (ms).toString()).slice(-2);
```

Adding a zero in front would make `5` become `05`, `55` become `055`, and `555` become `0555`. That is useful because everything is now at least two-digit. I can then use slice(-2) to retrieve the last two digits of that number which are what to output as the milliseconds on the stopwatch.

As the milliseconds part is solved, then come the seconds and hours. Getting them is not as tricky because this is just a simple maths problem: finding the right modules. For the seconds, I divide the ms by 60 and then round it down before doing %60 (modulus 60). That is because I have 60 times ten ms in a second, thus dividing by 60. Often, the result would be a decimal like 119/60, which would yield 1.9833…, so I would have to round it down to 1. Then the modulo operation by 60 is carried out because there are only 60 seconds in a minute. The same logic applies to the hours. That sums it up for the first project.

## JS Project 2: Digital Clock

[The second project](https://jsfiddle.net/24y1q6ct/1) (code available via JsFiddle) is similar to the first one in that essentially, we are dealing with time and updating it at regular, short intervals so that the user is kept updated of what time it is. For this project, I used `setInterval()` instead of `setTimeout()`. I have two buttons for the user to switch between the 12-hour and 24-hour formats on my clock. I have also made an extra panel for the date display.

One tricky thing is simplifying the code so that it is not too bulky. One way I can achieve that is to turn repeatedly used code into functions. The key to passing the variables I want to use from one function to another via parameters. That sums it up for the second project.


## JS Project 3: Calculator

You can find [the JavaScript calculator on JSFiddle](https://jsfiddle.net/Lw0vqun1/).

Making a JavaScript calculator turned out to be a little tough. However, I managed to make a simple version that covered the most basic arithmetics, i.e., addition, subtraction, multiplication, and division. Although I would like to add more functions to the calculator, I will not do so now as I wish to start doing the next project. I have learned to embrace this kind of pace as it pushes me to do more in a short sprint of time. For sure, I may come back to this calculator and add more functions to it in the future.

## The tricky bits
### Difficulty 1: How to display user input correctly?

In retrospection, this is not difficult at all, but when I was starting out, I felt unsure of what I wanted: “Do I display it here or there? How should I update the number when the user presses this or that number? What should the calculator display when the user hits operators two times or more in a row?” Questions like these bombed my mind all at once. That’s probably why I felt so overwhelmed. After I got distracted a bit and came back to it later, I came up with the following three points:

- Variable(s) to store the user’s input
- Conditions when the input can be updated
- Mechanism to update the input

These three bullet points proved to be very helpful that I was able to code the solution in a short time (roughly under 20 minutes):

```javascript
function addToString(val) {
    if (currentString.length < 15){
        currentString = currentString + val;
    document.getElementById("process").innerHTML = currentString;
    }
}
function addToString_Ops(val) {
    if (currentString.length < 14 && currentString){
    if (!isNaN(Number(currentString[currentString.length-1]))){
                currentString = currentString + val;
               document.getElementById("process").innerHTML = currentString;
    }
        else {
            currentString = currentString.substring(0, currentString.length-1) + val;
            document.getElementById("process").innerHTML = currentString;
    }
  }
}
```

The first function, `addToString(val)`, is created for a number input, whereas the second function, `addToString_Ops(val)`, is created for an operator input. There are new things like isNaN() and substring(). As I was coding, I googled what I wanted, and the next thing I knew was I was dealing with the new names already.

### Difficulty 2: How to evaluate the input?

I have to confess: this had me thinking in circles like a headless chicken for some time. I was stuck because I was always thinking of an innovative and efficient way to extract the operators out of the string… But, all I was thinking about was the extraction step which drove me nuts. I came close to thinking of a possible solution, though. However, the answer just could not come through in my mind.

In the end, I did away with all those thoughts and applied the `eval()` method:

```javascript
function evaluateString() {
    let evalString = currentString.replace("x","*").replace("÷","/");
    document.getElementById("result").innerHTML = eval(evalString);
}
```

## JS Project 4: Drum Kit

You can find [my “Drum Kit” project here](https://jsfiddle.net/dvjotsb6/) on JSFiddle.

When I was starting to do the “Drum Kit” project, I was not confident that I would finish it in a matter of a few days. However, it quickly turned out that as I sat down in front of my computer and started drawing the drum set (which was the first step), I was over-complicating the project the whole time. Well, I thought it would take a long while to draw the drum set, but I was thinking of some unrealistic demands like drawing something super fancy. After I ditched those thoughts, I finished the drawing in no time. As you can see below, it is a simple drum set. Although it doesn’t look realistic at all, at least it gets the job done.

## Coding difficulty
### Difficulty 1: How to get keyboard input

Previously, the only type of DOM event I was dealing with was only the mouse click event. Now it is time to deal with keyboard input events. [This article titled “JavaScript Keyboard Events Explained”](https://www.javascripttutorial.net/javascript-dom/javascript-keyboard-events/) on JavaScriptTutorial.net is a great resource to get familiar with them. There are three types of keyboard input events in JavaScript:

- **keydown**: fires when you press a key on the keyboard, and it repeatedly fires while you holding down the key
- **keyup**: fires when you release a key on the keyboard
- **keypress**: fires when you press a character keyboard like a,b, or c, not the left arrow key, home, or end keyboard, … The keypress also fires repeatedly while you hold down the key on the keyboard

From the above information, we can tell that both keydown and keypress register input when the user holds down a key. The only difference is that keypress can be thought of as a subset of keydown in that the former only registers the character keys, whereas the latter registers all keys as valid inputs.

The tricky part is: how do I detect a particular keydown input and call a specific function in response to it? Well, here is the syntax that can be deduced from the tutorial article:

```javascript
addEventListener('keydown', (event) => {
        // use event.key or event.keycode or event.code here...
})
```

Whether to use `event.key`, `event.keycode`, `event.code` depends on what keys you would like to detect. For character key input, `event.key` or `event.code` will be enough. I love using `event.keycode` though because it covers every key, and it is not hard to know which key corresponds to which keycode by looking it up on [keycode.info](https://keycode.info/). I may also help others read my code when using keycodes by adding comments above to indicate which keys are referred to.

With the above information, I was able to write the following code, which took the keydown inputs of “a”, “s”, “d”, “f” and “j”:

```javascript
document.addEventListener('keydown', function(event) {
   //...
   if (event.keyCode == 65) { //key a
   //...
   }
  if (event.keyCode == 83) { //key s
   //...
   }
   if (event.keyCode == 68) { //key f
   //...
   }
}
```

### Difficulty 2: How to add time gaps between inputs

I know adding time gaps is not necessary. However, the drum sound samples would sound horrendous for the drum kit I created if I played and replayed it rapidly. My knee-jerk reaction was to think that the drum sound samples I collected were not optimized for such a small game project. After thinking about this a little further, I think the real problem lies in the play/replay mechanism. Those are things like, when I play another audio file, the original audio file in play would abruptly stop. The end of the story is that I decided to find a workaround – creating time gaps between inputs. By doing so, the audio files could finish playing, or at least would not be stopped abruptly in a way that would make it sound nasty

With that, I started thinking about the code, and one minute later, I found a solution on google (which is a typical pattern by the way):

```javascript
document.addEventListener('keydown', function(event) {
    if( pressed === true ) { //If already pressed, don't allow another press
         return false;
      }
  
      pressed = true;
      setTimeout(function() { pressed = false }, 150);
     ...
 }
```

## JS Project 5: Guess the Color

You can find [my “Guess the Color” project here](https://jsfiddle.net/f17ud834/) on JSFiddle.

Coding this game turned out to be easier than I thought. The key is to generate three random numbers in the range from 0 to 255, and then assign them to R, G and B, respectively so that I can turn them into a string like this: rgb(R,G,B). Then I can print this string out as the question and display it as the background color in one of the several boxes from which the player would have to guess the answer. The code itself is pretty straightforward, so I will skip further discussion.


## JS Proj 6: Hangman

You can find my “Hangman” code on JSFiddle via [this link](https://jsfiddle.net/ptfje0u1/).

The game is relatively simple. However, sometimes what seems so simple may not be that simple in a situation where you have to describe the logic behind it. Oh, did I forget to mention that you ought to do so in a precise manner too? That is the kind of impression I got so viscerally when I was trying to visualize the logic for this game. It took me an hour or two to figure out how to start writing the code. In retrospection, I think it took me more than what I thought was needed because I quickly got distracted by my thoughts. I was not in a productive headspace when I thought everything would not work out because of something. One always has more excuses to make if one wants to make them. Excuses never run out. Instead of coming up with them, let's start working instead.

## Coding Difficulties
### 1. How to draw a hangman!

It is not a joke. I mean, drawing a hangman by hand should be easy, but to do so on a webpage was another thing. I could perhaps make some div boxes on a webpage, but a hangman (even if essentially it’s just a stick-man), I didn’t quite know how to do it.

So I googled what to do and found the HTML canvas. As the name suggests, it is a tool for creating drawing inside HTML. After diving in a little bit, I reckon that canvas is indeed incredible. However, for the time being, I couldn’t delve deeper into it besides learning how to draw a simple circle in the canvas, which took me roughly an hour to figure out.

After learning how to create a canvas and draw in it (below code is an example), I overcame this difficulty.

```javascript
// Make a canvas and get its 2d context for drawing purposes
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
// Draw a circle at the center of the canvas
var x = canvas.width/2;
var y = canvas.height/2;
var radius = 20;
var startAngle = 0 * Math.PI;
var endAngle = 2 * Math.PI;
ctx.beginPath();
ctx.arc(x, y, radius, startAngle, endAngle);
ctx.stroke();
```

### 2. How to show the letters of a word as underscores… and how to change back to letters later

Showing the letters as underscores is not hard, but doing so in a way that would help me change them back to letters requires some thinking. I was stuck at designing this bit, but eventually, I settled for a quick (a little ugly) way of doing it: loop through a word and change each letter to “_ ” (an underscore followed by a space), and concatenate them all as a string and print it out.

This approach helps later on as I want to find the right underscores to revert to their original letters. Essentially, the position of every letter in the new “_ _ _ _ ” string is this: `newIndex = oldIndex * 2`. This is easy to see and explain: if we cut the new string and the original word at a “_ ” and the corresponding letter, respectively, the length of the former is always two times the latter.

3. How to get the index/indices of a letter in a word?
Figuring this out was the most challenging part of the whole project. Given a letter is in a word, how do I know its index(or indices) in the word string? I realize that it is a good time for me to mention [Grasshopper](https://grasshopper.app/).

Grasshopper is an app to help people to learn JavaScript developed by Google. I am mentioning it here because (1) I use it, and (2) it has something to do with the solution to this difficulty.

In Grasshopper, there is this friendly step-by-step guide for passing a Google interview problem.

And you know what, I learned quite a bit from there such that when I was dealing with this particular difficulty, I was able to use a specific method that helped.

So, what did I do? I extracted the letters of a word into an object and then put their indices in an array. What do I mean by that? Below is an example using the word “apple”:

1. Step 1 – Create a new object
2. Step 2 – Pass in the word string “apple”
3. Step 3 – Loop through the word by its letters
  - (3a). See letter “a” with its index 0, add them as 'a': [0] in the new object
  - (3b). See letter “p” with its index 1, add them as 'p': [1] in the new object
  - (3c). See letter “p” with its index 2, append the index 2 to the array of p in the object
  - (3d). See letter “l” with its index 3, add them as 'l': [3] in the new object
  - (3e). See letter “e” with its index 4, add them as 'e': [4] in the new object

Result – The object is `{a:[0], p:[1,2], l: [3], e: [4]}`

The above thus helps solve the puzzle because you already have the indices for each letter inside an object. So, simply access the individual properties (letters) and then retrieve their values and times 2, and there you go! It is a little more complicated than that in the actual code, but it is not too far off.

## JS Project 7: Tic Tac Toe

You can find my “Tic Tac Toe” code on JSFiddle via [this link](https://jsfiddle.net/z5e3gtjn/).

Honestly, this project bugged me a lot. I persisted in not reading the source code or referencing others’ works because I would like to think on my own for this challenge. Luckily I followed through because, in the end, it paid off, and I was proud of having conquered this little project. Let me walk you through my thought process below.

The feeling of being overwhelmed was so hard for me to shake off initially as I thought I couldn’t think of the game logic in a programmable way. Eventually, I calmed down, and I picked up my tablet and scribbled on it for some time. I started to brainstorm different possible ways to program the game logic. It sucked at first when I was merely thinking about things in my head, but then they became so much more tangible after putting them down somewhere (like on a piece of paper).

Anyways, I made it with quite a lot of effort and time. Although strictly speaking, once I had got the idea, I coded the program in roughly an hour or two, the initial thought process was long, complex, and unexpectedly dreadful. Below, you can find some technical details as to what difficulties I faced in making this game.

## Coding Difficulties
### What am I supposed to do with the Tic-Tac-Toe board?

You may be wondering why I am asking such a silly question – of course, as one would say, the “O”‘s and “X”‘s of the two players, right? However, there’s more to ponder on: how to represent each cell in the 3-by-3 Tic-Tac-Toe board in the code? At first, I was overthinking again as I would mark each cell with an array consisting of two values: one for the row and the other for the column. So, for instance, the top-right cell on the board would be represented by the array [“row_1″,”col_3”] or simply [1,3]. Maybe this would work out fine if I continued with that route, but later I switched to a simpler notation. “Man,” I was thinking to myself, “why don’t I just name the 9 cells 0 to 8, from left to right and from top to bottom?”

```
0  1  2
3  4  5
6  7  8
```

If I remember a lesson for the rest of my life while doing this project, I would say it is this: Don’t look down on a simple improvement like this. Whenever I am making a step easier, however so slightly, it can turn out to be so helpful and save a bunch of time in the long run.

### How should the computer take a move?

That is the part that bugged me the most. For hours, I did not know what to write or add to the code. I was glad that I sat through that period, though. Eventually, I found that I might have some ideas that I could implement, and so like what I mentioned above, I took out my tablet and started writing some notes on it. That turned out to be the key to solving this mystery.

What I did was write down a simple score calculating mechanism for the computer to base its next move on. So, basically, what I did was take into account the following:

1. a particular move would open up how many new ways to win, 
2. how not to lose (if in that situation) in the next move, and 
3. how to win (if possible) in the next move. 

Once I have got those three, I can give each move a reasonable score in the score-attributing mechanism, and so the computer became so strong that it is unbeatable — end of this project.

## JS Project #08: Pong

You can find [my Pong project here](https://jsfiddle.net/x7h2zjb8/1/) on JSfiddle.

Overall, the “Pong” project is easy as I have done one before in Python when I was taking a course in university. Knowing that I have created this game before boosts my confidence by a lot in starting to deal with the project.

When I was learning Python, I was using [CodeSkulptor](http://www.codeskulptor.org/), and it tremendously eased the making of my own pong game as the GUI library “simplegui” they use is fool-proof to use. Now, back to JavaScript, I am aware of one way to do something similar to “simplegui” which would make the “pong” project possible – the canvas. All right, I have to come back to it after all the hassles I faced in the “Hangman” project!

## Coding Difficulty

### Difficulty 1: Using the canvas to create animations

To begin with, I had to think about how to create an animation on the canvas. I found [the HTML canvas animation tutorial](https://www.youtube.com/watch?v=yq2au9EfeRQ) by Chris Courses on Youtube. Chris has made a detailed series of canvas tutorials (his channel also covers plenty more other topics on HTML, CSS & JavaScript) that explain things crisply and clearly. Now, to make a shape “move” on an HTML canvas, you have to clear the canvas first and then redraw the shape in a new position. Now repeat the two steps using setInterval. That is the trick behind an animation on the HTML canvas!

However, things turned out to be obtuse sometimes. As there are several shapes I put on the canvas – the upper and lower walls, the ball, and the two players, I realized that when any one of these is moving, the whole canvas has to be redrawn, which is not an issue when you are only dealing with one object. The problem that I encountered was: I have multiple objects on the same canvas, and all of them did not update their positions simultaneously! This second, it could be me moving my paddle, but I may want to stop mine the next second, and the computer’s paddle may still be moving. Should I update the canvas using a huge function that takes in multiple parameters to decide the positions of all the objects in the canvas? Well, that sounds inefficient. I could imagine how messy the chunk of code would be. In the end, I thought of another approach.

My idea was to create multiple canvases for multiple kinds of object. First, I created a basic canvas for the upper and lower walls. Then, one canvas was made for the ball. Finally, I made two more canvases for my paddle and the computer’s one. That may sound like a lot of work, but it is a better way to go than to update just one entire canvas whenever any objects move. Of course, I may be wrong, so please don’t quote me on that. However, this idea worked out fine. I may review this part in the future to see if I have any additional thoughts on doing better.

### Difficulty 2: Programming the Computer Player

I would like to confess that making a computer opponent has so far been a rather challenging but rewarding experience for me.

The computer opponent that I made in this Pong project currently follows the y coordinate of the ball. It is not completed. I may come back to this in a later post.


## JS Project #09: Matching Pairs

You can see the code of this project (Version I, only numbers & black and white) [here on JsFiddle](https://jsfiddle.net/otLp2kw7/1/).

Right at the beginning, let me point this out: I have been thinking about this game's game logic for some time, but I have not started writing a single line of code until two days ago. It was not until I started writing the code that I realized what I needed for the game to work. I have spent much time visualizing the game's mechanism, and it wasn’t so clear not because this game is complex. It is because I overthink and over-complicate matters. One of the best ways to stop overthinking is to take action after thinking enough — it isn’t helpful to keep thinking for longer in many circumstances. That reminds me as I keep moving ahead — don’t think for too long because I tend to take too much in thinking. Instead of continuing in the ceaseless stream of thoughts, I should try my best to dive headfirst to see what I have got.

Back to this project, one difficulty I encountered while making it is working out the several components of the game logic that are interdependent — if I am not sure about any one of those, I am probably not sure about the others.

Yet, now that I have finished it, the project as a whole feels not hard at all. It is not as complicated as making **tic tac toe** and **pong**, which took me a ton of time to consider different ways of implementing the computer opponent.

One fun part of making this game is that I can play it to have some fun once I have finished making it.

## Coding Difficulty: Visualizing Several Interdependent Components

The following was a rephrased thought process that went on in my head as I was trying to visualize the code of this game:

Okay, what should the game do when I load it? Shuffle the cards. Dish them on the table according to the spaces I have provided. Next, what would the game do when I click on a card? The card gets flipped. Is that it? No, when I am flipping a second card, the game will do the matching for me! Then there are two conditions to consider: match or do not match. All right, the thought process is clear in my mind, but that is because the game itself has an easy process to describe in words – although that does not necessarily mean that it is easy to translate into code.

That is why not only do I need to think about the mechanism in my mind, but write it down somewhere and expand those thoughts into pseudo-code that I can translate into JavaScript code. That, I reckon, is one thing I could do earlier to shorten the time I need to take to make something. Regarding the different components, there is nothing complicated. However, I would like to mention below the shuffling function.

### Interesting Lesson: Fisher-Yates shuffle

As I started to translate my thoughts into code, one thing I ended up researching on the Internet was the act of shuffling. I was thinking to myself about implementing this particular function as I stored card values in an array that I would like to shuffle and then assign to the cards. So I googled how to shuffle an array randomly. I stumbled across [this article on Fisher-Yates Shuffle](https://bost.ocks.org/mike/shuffle/), which I found immensely inspiring.

In it, three different ways to implement shuffling in JavaScript are presented – they are all by definition random, i.e., we are picking every remaining element to reposition from the array with equal probability. The three ways vary in that the first way is quite slow, while the second one looks okay, but we can still improve the speed, and the third one is the famous Fisher-Yates Shuffle method, which is something I want to go over below.

On the surface, you would do to shuffle an array of elements by running a loop that generates a random number ranging between 0 and the last index of the array. You would then use the random number as an index and then run the loop to grab all the elements in the array to form a new array. That way, you will end up with either shuffle method #1 or #2. While #1 is ineffective, there seems nothing wrong with #2.

That is, of course, before I encountered this article on the **Fisher-Yates Shuffle**. What is the **Fisher-Yates Shuffle**? I prefer an example to illustrate it.

Let’s say I have this array to shuffle: [0, 1, 2, 3, 4]. Using the Fisher-Yates Shuffle, we would not randomly pick out every element and order them to form a new array. Instead, we would use a variable, say **L**, to mark which card we are swapping, starting from the very last index. Inside the loop, we would start at the last index each time, which will then be swapped with a randomly picked element before it. Therefore, in the first iteration of the loop, I will grab index 4 of the array and exchange it with an index before (smaller than) it. We can let JavaScript‘s `Math.random` to handle this. In this particular example, the code would be `Math.round(Math.random() * L--)`.

That way, we will swap every element in the array, and swapping is more efficient than forming a new array as in method #2 because we no longer need to remove anything from the array. Interested readers can refer back to the article for more details. Basically, the above is why this shuffling method is superior and why I chose to apply it in this project.

### Back to the game logic of the game

In this simple version I made, I do not worry about any flashy animations and stuff like letting the user choose the difficulty level because it is just a starting point that I can develop on top of later. For now, the game is pretty bare-bone: there are ten pairs to match, and you start with 15 scores. Every time you mismatch, 1 score will be deducted, and every time you match a pair, 5 scores will be added. If your score becomes 0 or negative, the game is over.