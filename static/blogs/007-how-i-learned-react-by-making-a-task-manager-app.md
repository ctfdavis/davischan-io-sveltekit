---
title: 'How I Learned React By Making a Task Manager App'
desc: "Where I made a simple task manager in React for learning React."
date: '2021/02/27'
tags: ['React', 'Challenge']
seq: 7 
---

This is “Make My Own Simple Task Manager in React” where I am going to create a simple task management web app in React. In the process, I aim to dive deeper into React and familiarize myself with topics like **useContext**, **useReducer** and **React router**. Let’s start!

## What is useReducer?

As I start digging deeper into React, I realize that creating a more complex app in React can soon turn into a mess if all I use are two basic hooks **useState** and **useEffect**. Don’t get me wrong. Those two hooks can accomplish a lot, but for creating something more complicated than just a to-do list, more advanced hooks like the **useReducer** will come in handy as they make the organization of the code cleaner and more understandable. Below, I will take a first look at the **useReducer** hook.

## Basics of useReducer

A typical way of writing **useReducer** is the following:

```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```

In the above assignment, we get back two things: `state` and `dispatch` from the **useReducer** function, which takes in two parameters: `reducer` and `initialState`. Note that `state` is an object which contains all the updatable information you would like to display. In addition, you would typically declare an initial state, let’s call it `initialState`. The **useReducer** hook will pass the `initialState` to `state` upon initialization.

Next, the first parameter in the **useReducer** function, `reducer`, is a pure function you define outside the component. The `reducer` function will determine what kind of state to return based upon the different types of action it receives. Let’s have a look at its syntax as well:

```javascript
const reducer = (state, action) => {
  /*..... switch cases .....*/
  /*return some kind of state based on different types of action*/
}
```

As seen from the above, the **reducer** function takes in two parameters: `state` and `action`. Note that we only need to define the function, and afterward, we don’t need to call the function explicitly because this function will be implicitly triggered by `dispatch`.

What is `dispatch`? It is the second thing we will get back from the **useReducer** hook. Note that `dispatch` is yet another function. It takes in one parameter, commonly referred to as the action type. Now let’s say we have a button A, which will update the state to a particular state A, button B will update to state B, and button C to state C, and so forth. We can then define the **onClick** events of those buttons with the `dispatch` function:

```javascript
<button onClick={() => dispatch({type: ACTION.A})}>button A</button>
<button onClick={() => dispatch({type: ACTION.B})}>button B</button>
<button onClick={() => dispatch({type: ACTION.C})}>button C</button>
```

One question is: where do `ACTION.A`, `ACTION.B` and `ACTION.C` come from? We would like to define these action types in a separate object outside the component as well. For simplicity, let’s call it `ACTION`:

```javascript
const ACTION = {
  A: "Action A",
  B: "Action B",
  C: "Action C",
  ...
}
```

In the real world, though, one would use more meaningful names for the action types, but we will stick with just the letters in this example. Next, we would like to define some switch cases in our `reducer` function for handling different action types passed by the `dispatch` function:

```javascript
const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.A:
      return state_A;
    case ACTION.B:
      return state_B;
    case ACTION.C:
      return state_C;
    ......
    default: //default case for catching error or just doing nothing
      return state; // do not change the state here
}
```

In addition, when we call a `dispatch` function, we can pass a second parameter conventionally known as the `payload`. The `payload` typically contains information you would like to pass from the button to the `reducer` function for its handling. For example, if I want to set up a delete button on every task I have created, in order that `reducer` knows which task I would like to delete, I can dispatch the ID of the selected task in the payload to the delete function.

The final question is regarding the different states we return above: `state_A`, `state_B`, `state_C`, etc. Like the **initialState**, we can define these states outside components. We may also directly define these states inside the `reducer` function. It depends on the situation.

As seen from the above, **useReducer** is an organized way to deal with multiple actions that may occur to a state. With **useReducer**, we can achieve more than **useState** in more complex scenarios. However, in the simple task management app that I am going to create this time, I will stick with **useState** hook as the logic in the app is not too complicated.

## Let’s Build a Simple Task Management App

First thing first: what kind of task management system am I trying to create on my own here? Well, I decided to go to [Balsamiq Mockups](https://balsamiq.com/wireframes/) to draw a rough wireframe first to see my idea in some tangible form.

Also, I am thinking in terms of a desktop-first design. I am not going to implement any responsive design on this project. Once I have finished building the functionality, for sure, I can change the design to make it responsive later.

### Building on top of the basic functionality

Forget about styling, the search bar, and displaying all the tasks – I will take care of those later. Let me start by focusing on basic functionality. It took me the past three days to build up this prototype of the app which you can access on my codesandbox (P.S. the link is broken, so instead here is [the finished work](https://cranky-nightingale-42a0f8.netlify.app) for your reference).

Although nothing fancy, in building out this prototype, I have successfully integrated **useContext** and **React Router**.  Next, I would like to add extra functionalities to the prototype (like task deletion, task searching, setting up reminders, storing data into the browser’s storage) to make the app more usable.

## Adding Modal, Task Deletion, Task Search, Tasks saved into localStorage…

Once I have figured out the basic functionalities I need for my simple task manager and how they should work, I need to think about the code. I started with an easier one: the modal message, which would pop up to reassure that I had successfully saved a task.

### The popup modal

Why do I need a popup modal? Well, for several different situations: 

1. when a task is successfully saved;
2. when some other event occurs and;
3. when the user wants to perform “dangerous” actions like deleting a task.

While a modal in the first two scenarios can be used as a prompt, the latter is for precaution lest the user might wrongly do something unrecoverable.

I have chosen to use the **useRef** hook for both types of modal. The **useRef** hook allows me to set up a container for the modal (let’s call it modalContainer). Then, when I click a button or trigger a change of state, I will make the modal container appear by changing its visibility and opacity. I am using opacity as well so that I can animate the appearance of the popup modal. That way, I have created a modal that is up and running.

### Task Deletion
    
Since I keep my task in an array, I can use the **filter** function to return all the tasks in the array which are not equal to the id of the task that I want to delete. That way, I get back a new array that has all the original tasks, excluding the task to delete, and then I can update my tasks state variable with it. Here’s the code that gets this to work:

```javascript
setTasks(tasks.filter((task) => task.number !== number));
```

### Task Search

This felt a little complicated at first, but the coding became straightforward after figuring out what I wanted it to do. The things I want to check with the search function (or I would rather see it as a **filter** because it is not that smart) are simply the task’s id, title, and description. With that in mind, I can pass the search string into the url and make it a parameter in React Router. Then, in the task view component, I will filter the tasks by using the search string in the filter function again. Here’s the code snippet to make it work:

```html
// create a conditional link for passing the search string as a parameter in the url
const ConditionalLink = ({ children, to, condition }) => !!condition && to ? <Link to={to}>{children}</Link> : <>{children}</>;
...
// return a search icon which will pass the search string as part of the url
// additionally, the conditional link won't route to a new link if the search string is empty
 <ConditionalLink to={`/search/${searchString}`} condition={searchString}>
            <SEARCH className="nav-task_search__icon" />
 </ConditionalLink>
```

### Saving tasks into localStorage

This one is no stranger to me. I had already implemented something similar when I saved the dark mode option into **localStorage** back when I was building my personal website. This time though, as I would like to save the tasks object into the **localStorage**, I need to convert the object into a string with the `JSON.stringify()` method. Then, when the user comes back to the site, the browser will automatically retrieve the saved string triggered by a **useEffect** hook and transfer the JSON string back into an object with the `JSON.parse()` method. Finally, we will save the tasks object into **localStorage** every time the tasks object is updated. That way, the saving feature is implemented.

## Other additional features

Besides the above, I have also added features like exporting the tasks as a JSON string that the user can keep and import back to the browser. I have also worked on the styling a little bit. One thing I have not done is disallowing a task state from going back to a previous state because it may not be a good feature to implement at this stage. In the future, I will build an authorization system upon this task manager so that there are regular users and admin users. Then, I can set the task state restriction rule on normal users but not on admin users. However, here is a first version of the Simple Task Manager (STM). Feel free to check it out here on [Netlify](https://cranky-nightingale-42a0f8.netlify.app) .

Thank you for reading!