---
title: '6 Must Know Basic JavaScript Events'
desc: "Where I familiarized myself with basic JavaScript DOM Event APIs."
date: '2020/12/05'
tags: ['JavaScript']
seq: 4
---

## What 6 Basic JavaScript Events?

According to [this article](https://medium.com/young-coder/playing-with-javascript-events-be12f922736f) by Young Coder on Medium, the six essential JavaScript events encompass:

1. `onclick`
2. `onload`
3. `oninput`
4. `mouseenter`
5. `mouseleave`
6. `mousemove`

I am determined to familiarize myself with all 6 of them. Let’s start.

## 1: onclick

### What does it do?

The event **onclick** says that if you click something such as a button, a script would be executed. That's the general idea; how about the syntax? Some examples provided on w3schools reveal this simple pattern: `<some_element onclick="some_function()">`. In it, `some_element` typically is a button but can also be any element such as a div. As for `some_function()`, that’s the thing we need to define.

A basic function would be to change an element's `innerHTML`, i.e., everything that goes between the element's start and end tags. To change the `innerHTML` of some element in JavaScript, one has to reference the element by some means. In JavaScript, I have learned that one way is with `document.getElementById()`. Like other JavaScript methods, I was daunted by its long name at first, but quickly got used to it after knowing what it does. Its name is descriptive of its behavior: this function tries to get an element by its id. Just like that, I can write the following function to change the `innerHTML` of an element with the `id=haha` to `“Hello World!”`:

```javascript
function some_function(){
  document.getElementById("haha").innerHTML = "Hello World!";
};
```

### Let me try…

Just for fun, I may make a button to remind myself what I have to do everything with the following simple code:

```javascript
/**HTML code**/
<button onclick="something()">CLICK!</button>

/**JavaScript code**/
function something() {
 alert("Wake up!"); //an alert box would jump out just to tell me this...
 alert("Do something!");
 alert("Get tired!");
 alert("Go to bed!!");
};
```

## 2: onload
### What does it do?

The event `onload` will load a script when the page (or some object) is loaded. It can be helpful in some situations when you need some data to be fetched or loaded before you start doing anything with it. In addition, see this Stack Overflow post for differentiating `document.onload` and `window.onload`.

### Let me try…

Let’s say I have the same `something()` function as shown above. If I want to run it after the page has loaded (it can be something else… perhaps a big poster of some motivational figure would be more suitable here), I can simply use the following HTML code: `<body onload="something()">...</body>`
 

#3: oninput
What does it do?
For this particular event, I will refer to [this excellent example of a slider](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_oninput_slider) on w3schools. In HTML one can use the `<input>` tag to make a slider by setting type = "range". In addition, I can display the numerical value of the slider handle, which ranges from 0 to 100. The event `oninput` means that a script will be executed whenever a user provides input. In the slider example, as soon as the user drags the handle, its numerical value will be written to a `<p>`'s `innerHTML` using the `document.getElementById()` method.

I want to delve deeper into how the above example works. The function declared in the above example passes the argument `this.value` as the event `oninput` is triggered. I wonder what `this.value` is. As discussed in a previous post, I learned that the keyword `this`  points to different things in different contexts. Here, since it is inside the scope of the input tag, it refers to the input object. The `.` (dot) in .value shows that value is a property of the object. We will pass it as the function's parameter, and the function will write it down somewhere.

### Let me try…

This is a silly one. I should have provided a better example:

```javascript
/**HTML code**/
<input type="checkbox" id="vehicle1" name="vehicle1" value="Beginner's bike" oninput="whatYouHave(this.checked)">
<p id="test"></p>

/**JavaScript code**/
var bike = "You have a bike: ";
function whatYouHave(x) {
 var y = bike.concat(x);
 document.getElementById("test").innerHTML= y;
}
```

## 4: mouseenter & 5: mouseleave

### What do they do?

I want to talk about these two events together because they are often used as a pair. As their names suggest, the two events are triggered when:

1. the user’s cursor enters a specified element and 
2. when the user’s cursor leaves it. 

People like to move their cursors around to interact with the page, so we can use `mouseenter` and `mouseleave` to create cool effects to make the page more interesting as the cursor enters and leaves some elements. I stumbled across [this fascinating article on javascript.info](https://javascript.info/mousemove-mouseover-mouseout-mouseenter-mouseleave), which explains the differences between `mouseover` & `mouseout` VS `mouseenter` & `mouseleave`.

In short, `mouseover` & `mouseout` as a bundle are more subtle than `mouseenter` & `mouseleave`. While the latter bundle ignores the child elements in a parent element, the former considers them. To tell their differences, it is crucial to know the following two properties:

1. `event.target` is the element where the mouse came over.
2. `event.relatedTarget` is the element from which the mouse came (i.e. relatedTarget → target).
`event.relatedTarget` is crucial in using `mouseover` and `mouseout` because we can apply particular styles to the parent element as the cursor moves into one of its child elements (i.e., set the parent element = `relatedTarget`, whereas the child element = `target`). That is something the pair `mouseenter` and `mouseleave` can't do.

## 6: mousemove
### What does it do?

I love [this example](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onmousemove), which illustrates what `onmousemove` does on w3school. As the name suggests, when I use the event `onmousemove`, some script will be executed whenever my mouse moves inside a particular element. If you want a quick comparison between the events `mousemove`, `mouseenter` and `mouseover`, here’s [another excellent example](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onmousemove_over_enter) provided by w3schools.

### Let me try…

Below is my code for a straightforward `onmousemove` usage: to make a sphere bigger as my cursor moves inside it.

```html
<div class="someBox" onmousemove="bigger(this)"></div>
```

```javascript
<script>
  var x = 100;
  var z;
  function bigger(y) {
   x += 1; // x starts increasing now as my mouse moves inside the element
   z = x.toString(); // I just learnt this method to turn a number into a string in JS
   z += "px";
   y.style.width = y.style.height = z;
  }
</script>
```