---
title: 'Learning to Create a Scroll Animation'
desc: "Where I investigated into how to create scroll animation using CSS & JavaScript."
date: '2021/02/21'
tags: ['CSS', 'JavaScript']
seq: 6 
---

## I love scroll animation

I have long been wondering how to make a scroll animation, but I never felt the urge to learn how to do so until now. Now that I am planning to create a personal website, I will try to add some new features such as scroll animation.

## Sources for this post

1. [Scroll Animation – CSS-Tricks](https://css-tricks.com/books/greatest-css-tricks/scroll-animation/)
2. [Scroll Animation using GSAP ScrollTrigger by Brent Morton](https://codepen.io/b1mind/pen/yLeoQOG)
3. [GreenSock Docs – ScrollTrigger.create() properties](https://greensock.com/docs/v3/Plugins/ScrollTrigger/static.create())

## I. The Pure CSS & JS Approach

In source one by CSS-tricks, we can see a basic CSS & JS approach to creating a simple scroll animation. Personally, I find this approach relatively easy to create simple scroll effects in a short period, but I realize that it may not be as practical as an option compared to a full-fledged library like GreenSock’s Gsap with the ScrollTrigger plugin for more complicated scroll animations/effects. So, in this section, let’s first look at how to create a simple scroll animation using only CSS & JS.

### Javascript Portion

Actually, only one line of JS code is needed for creating the animation effect:

```javascript
window.addEventListener('scroll', () => {   
     document.body.style.setProperty('--scroll',window.pageYOffset /
(document.body.offsetHeight - window.innerHeight)); }, false);
```

To understand what the above one-liner does, first of all, let’s look at the following three values:

1. window.pageYOffset
2. document.body.offsetHeight
3. window.innerHeight

(1) `window.pageYOffset`: pretty self-explanatory; it stands for how far your current viewport’s top is away from the page’s top in px. Note that it is an alias of `window.scrollY` (P.S. `scrollY` is the newer kid, which is not supported in older browsers), technically defined as:

> The read-only scrollY property of the Window interface returns the number of pixels that the document is currently scrolled vertically.
> Window.scrollY – MDN web docs

(2) `document.body.offsetHeight`: comes from the property offsetHeight. When we apply offsetHeight to an HTML element, say a `<div>` element, we will get a return of its total height, including its padding and borders (margins excluded) as an integer in px. So when applied to `document.body,` we are getting the entire window's height. Below is a visual comparison between offsetHeight, clientHeight, and scrollHeight for your reference:

![viewport height comparison](https://res.cloudinary.com/dcufo/image/upload/v1652013253/davischan.io/viewport-heights_wdqrre.png)

(3) `window.innerHeight`: stands for the height of your current viewport (your browser’s window).

Therefore, in the calculation `window.pageYOffset / (document.body.offsetHeight – window.innerHeight)`, we are getting how much of the webpage is scrolled down. So when we are still at the top of the webpage (when we haven’t scrolled down), this will be 0 (because `pageYOffset` is 0). When we have scrolled down to the very bottom, this will be the number of current viewport's height we have scrolled down to get from the top to the bottom of the entire document. Of course, we are assuming that we can scroll down the page because otherwise, the above will always be 0.

In light of that, the rest of the above one-line code will keep track of and save the value to a custom CSS property called “–scroll”, by using the method `setProperty`. Next, we will use the value in “–scroll” in the CSS code to control the animation. The idea is to hook this value with how much time the animation has played. Let’s have a look below.

### CSS Portion

With the “–scroll” value coming from the JavaScript code, we will define an animation with `@keyframes`. For demonstration purposes, I have created a [simple scroll animation](https://codepen.io/ctfdavis/pen/poNwZBL) on my CodePen.

In fact, any animation would work just fine, such as the following:

```css
@keyframes enlarge {
  from {
    transform: translate(-50%, -50%) scale(1);
  }
  to {
    transform: translate(-50%, -50%) scale(15);
  }
}
```

Of course, we will need to specify which element(s) to run this animation, such as an element with the class “circle–darkBlue”:

```css
.circle--darkBlue {
  animation: enlarge 1s infinite;
}
```

Now the problem is that this animation will run itself. We want it not to play at all. So we will specify the following too:

```css
animation-play-state: paused;
```

After setting the animation not to play on its own, the last key of the puzzle is to hook the animation with our “–scroll” value. Essentially what we want is, as we scroll down on the page, the value x in “–scroll” will become larger, and so we want to set the animation to be played x second as well.

Therefore, what we will do is declare the following one-liner trick:

```css
animation-delay: calc(var(--scroll) * -1s);
```

This line of code does what I have depicted above: make the x in “–scroll” become how many seconds are already played for the animation. The obscure bit here is that when animation-delay is set to have a negative value, it means how much time the animation has played. Therefore, as we scroll down, the animation will be played further, and so we will get our desired scroll effect.

## II. The GreenSock Library Approach 

The GreenSock’s gsap library has a plugin called ScrollTrigger made to produce complex scroll animations. To understand how ScrollTrigger works, one has to first learn the core of gsap. Here I will do a summary of the gsap’s core before moving on to the ScrollTrigger plugin.

### A short intro to gsap library 

In my experience, gsap is not hard to learn at all, and will save you a lot of time and code later once you have learned it to create various animations on a web page. Once you have installed the gsap core (either by downloading the files or using their CDN), the first line of gsap code to create an animation is just the following:

```javascript
gsap.to("selector", {duration: 3, rotation: 360, scale: 0.5
/*Specify the duration and the changes to occur inside an object like this*/
});
```

The above `gsap.to()` method creates what gsap would refer to as a tween. With that, we can create multiple more tweens of which the animations will start at the same time:

```javascript
gsap.to("h2.title", {duration: 1, opacity: 0.3});
gsap.to(".box", {duration: 2, x: 300});
gsap.to(".green", {duration: 3, rotation: 360, scale: 0.5});
```

To make them run at different times, one simply specifies the delay property inside the second parameter object for the `gsap.to()` method. Alternatively, if you want the animations to take place one by one by one, you can create a timeline and then stack the animations on that timeline:

```javascript
var tl = gsap.timeline(); //create a timeline in gsap
tl.to("h2.title", {duration: 1, opacity: 0.3}) //stacking multiple to()'s
.to(".box", {duration: 2, x: 300})
.to(".green", {duration: 3, rotation: 360, scale: 0.5});
```

This timeline structure in gsap is super handy as there are “player controls” which could be used to play, pause, resume, restart, reverse and even speed up or slow down the animations. There are so many great things one can do with the timeline conveniently.

Lastly, let me also mention how to get and set values for tweens and timelines. Whenever you want to get a return value, you call the method on the tween or timeline without a parameter, e.g. `tl.duration()`, which will return the duration of the timeline tl. To set a value, you call the same set of methods, but this time with a parameter, e.g. `tl.duration(5)`, which would set the timeline tl to have a duration of 5s by either speeding it up or slowing it down.

The above only covers a small portion of the gsap library which would suffice for creating most animations quickly and effectively. Among the many properties and methods of timeline objects, some of them are critical for producing custom scroll animations. Let’s have a look at them now.

Firstly, we may need the `paused` property of timelines. Similar to the pure CSS and JS approach discussed above, to make the animation run only when we're scrolling, we need to pause the animations by default. Thus, we need to set the `paused` property of a scroll-animated timeline to true.

Next, we may need the `.time()` method for timelines. After setting the animation to be paused by default, the next step is to associate the animation with scrolling. The `.time()` method allows us to pass in a time value that specifies how much the animation is played. Like the pure CSS and JS approach discussed above, we will pass a time value hooked with how many viewport windows we have scrolled down.

However, for most scroll animations conceivable, we would only need to use a simple method from the ScrollTrigger Plugin. Let’s dive in next.

### ScrollTrigger Plugin

To use the ScrollTrigger Plugin, simply declare the following in the script tag:

```javascript
gsap.registerPlugin(ScrollTrigger);
```

We are all set to go once we have included and declared the ScrollTrigger Plugin. We can create most common scroll animations simply with the `ScrollTrigger.create()` method. Inside this method, we will pass an object in which we will specify the details of the scroll animation. Let’s look at the example in the source which Brent Morton makes as a case study below:

```javascript
ScrollTrigger.create({
  trigger: '.holdMe',
  animation: gsap.fromTo('.resizeMe', {scale: 1 }, {scale: 10}),
  pin: true,
  start: 'center center',
  end: 'bottom top',
  scrub: 1, // I like the 1 sec delay, set to true for exact anime on scroll
  //markers: true,
})
```

The first property “trigger” in the object specifies which one element in the DOM will be used to trigger the animation declared in the second property “animation”. Now one might ask, how would the animation be triggered? Let me quote the GreenSock official docs:

> The element (or selector text for the element) whose position in the normal document flow is used to calculate where the ScrollTrigger starts.
> the “trigger” property – ScrollTrigger, GreenSock Docs

If you play with the demo by Brent Morton, when you scroll down on the page, you will first see a blue square div which is getting bigger inside a larger red square div. Now, that larger red square div is the trigger (with the class “holdMe”) for the scaling animation of the blue square div. Note that only one trigger is allowed for each `ScrollTrigger.create()` effect. So if there is more than one element for the selector you pass in, only the first one will be treated as the trigger.

If there is no trigger specified, the trigger would be the entire document by default. We will get into more details later as we explore other properties below.

Next, we have the property “pin”. Its name is self-explanatory: it can pin an element on the viewport as you scroll down until the scroll trigger reaches its end. Setting it to true will pin the trigger to the viewport (this behavior is like `display: fixed`). By default, it is set to false, so the trigger element is not pinned (i.e. the trigger element will follow the document flow as you scroll down).

As I have mentioned the “end” above, it is high time to talk about the following two properties “start” and “end” together.

The properties “start” & “end” take in certain string values that may initially look puzzling. However, once we have mastered the rule, it is quite straightforward. So now let’s look at the general syntax for the string value:

```html
"positionOfTheTriggerElement positionOfTheScroller"
```

I know the above may not help much, but it will make more sense later as we discuss some examples. Before that, let’s also look at what values are possible for both the “positionOfTheTriggerElement” and “positionOfTheScroller”:

- top
- center
- bottom
- a number (in px), e.g. 300, 500, 600, etc. which I am not going to cover here. Interested reader can refer to GreenSock Docs for details

So let’s look at one example below:

```html
start: "top center",
// for starting the animation, the position of the trigger element is its top, and the position of the scroller is its center
end: "bottom center",
// for ending the animation, the position of the trigger element is its bottom, and the position of the scroller is its center
```

With the above, the animation will start when the top of the trigger element hits the center of the scroller element and will end when the bottom of the trigger element reaches the center of the scroller element. One may then ask: “what is the scroller element?” Well, by default, it is the viewport (browser’s window). However, in some cases, one can specify it to be any element they want. For the discussion here, let’s assume that the scroller is just the viewport.

Now, let’s consider the example by Brent Morton:

```html
start: 'center center',
end: 'bottom top',
```

It means the animation will start as soon as the center of the trigger element touches the center of the viewport, and it will end as soon as the bottom of the trigger element touches the top of the viewport. Okay, hopefully, things are clearer now.

But we are not at the end yet. Let’s talk about the “markers” property next. By default, this property is set to false. However, you would most likely want to set it to true during development because it shows the markers for the “start” and “end” of both the trigger and scroller, which we have just covered. This feature can help save a bunch of time guessing the positions of the “start” and “end” and is really handy for debugging.

Also, how about the property “scrub”? Well, you can basically think of it as how smooth the animation would be when you scroll down. In most cases, one would like to set it to true or some numerical value. By default, it is set to false, and it will cause the animation not to rewind as you scroll back up. To make the animation rewind as you scroll back, set it to true or a numerical value.

When you assign a numerical value x to “scrub”, it will delay the animation by x second as you scroll on the page. This delay can make certain animations look much nicer and “smoother” so it is recommended to test different values to see which one is the best to use.

This is how one can create a scroll animation on a webpage. While the pure CSS & JS approach takes little work for simple scroll effects, the gsap library provides an awesome tool for producing more complicated scroll effects with cleaner and less code. So take some time to learn gsap, which will save your time, especially if you want to work with animations regularly.
