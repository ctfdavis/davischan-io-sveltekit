---
title: 'How I Approached Learning CSS'
desc: 'In this post, I laid out my way of learning CSS in three parts. I also talked about why I planned to study from CSS templates.'
date: '2020/10/15'
tags: ['CSS']
seq: 1
---

## How I Approached Learning CSS

I don't think it should take long to get done with the basics of CSS. By basics, I mean just the rationale of CSS and its syntax. Like HTML5, there is an abundance of references for CSS3 online. So I can refer to those any time, which means I don't need to memorize all the tags and properties. Initially when I was learning HTML, I spent a lot of time trying to remember each tag, which was a productivity crusher. Learning from that mistake, now I aim to go through the essentials and get my hands dirty as early as possible.

In the following, I will try to summarize the basics of CSS3 here into three parts:

- **Part I: Rationale**
- **Part II: Syntax**
- **Part III: Templates & Common Ways of Coding CSS3**

Before I present what I have studied, I want to mention the learning and reference materials I find very handy. First, the Coursera course "Introduction to CSS3", offered by the University of Michigan, is a fantastic place to start. Next, I really dig the textbook "Learning Web Design (Fifth Edition)" written by Jennifer Niederst Robbins. Besides, there is a nice Android app named: "Learn CSS – Pro" made by Codeliber, which comes with a free version on the Google Play Store.

Now, let me dissect the basics of CSS3 into three parts below.

## Part I: Rationale

Why do we care about using CSS3? Because HTML files look plain on their own. If you want to make them look attractive, you will have to do some CSS coding.

Then comes the second question. This time the answer is not so obvious: "Why do we choose CSS for the styling?" To answer this question, we need to know what CSS is. So here is a simple definition of CSS:

CSS means Cascading Style Sheets. It is a style sheet language for HTML files.

So why CSS? The best answer I have now is that CSS is a straightforward and powerful way to decorate multiple HTML files easily.

## Part II: Syntax

Before I dive into the syntax, I want to talk about the alternatives to CSS (cascading style sheets). What I found confusing is that the term CSS can refer to both (1) the CSS language and (2) the style sheet file format. There are alternatives to using a style sheet file, but we are actually using the CSS3 language in whatever ways. Here are three ways to style an HTML file:

- Inline Styling
- Internal Styling
- External Styling (the .css files)

The above is the order of precedence (the ability to overwrite rules) in CSS. Here's how it works: let's say you have inline style and external styling for an HTML file; the inline style will overwrite the rules referring to the same elements and properties found in the external styling. Again, if you have inline and internal, the inline styling will overwrite any inconsistent rules. Lastly, if you have internal and external styling, the former will overwrite the latter when inconsistencies occur.

I will briefly go over the three ways of styling below. However, I shall focus on the last option because it is the most common and versatile styling option of HTML.

### 1. Inline Styling

Inline styling is straightforward. Add the style attribute inside the opening tag of an element. A generic example is shown as below:

```html
<someelement style="property1: value1; property2: value2; ... ; propertyN: valueN;">...</someelement>
```

Here is a specific example:

```html
<h2 style="color: rgba(0,0,0,.7);">...</h2>
```

### 2. Internal Styling

Unlike inline styling, internal styling does not operate on individual elements but instead works on an element category (a.k.a. a selector), making styling much more efficient. To enable internal styling, you need to add the style element inside the head element (can be in the body element as well), i.e.:

```html
<head>
<title>Something</title>
<style>
...
...
...
</style>
</head>
```

Inside the style element, you will have to use the following syntax to style an element category:

```html
<style>
   selector{
      property1: value1;
      property2: value2;
      ...
      propertyN: valueN;
   }
</style>
```

A specific example is shown below:

```html
<style>
   h2{
      color: rgba(0,0,0,.7);
      font-weight: 500;
      line-height: 1.5;
   }
</style>
```

### 3. External Styling

External styling is just one step further from internal styling. You take all of this:

```css
   selector{
      property1: value1;
      property2: value2;
      ...
      propertyN: valueN;
   }
```

Put it into a separate .css file (call it style.css here). Then you will have to add one more line in the head element of the HTML file(s) to link it to the style sheet:

```html
<head>
 <title>Something</title>
 <link rel="stylesheet" href="style.css" /> <!-- This is the line that needs to be added -->
</head>
```

## Basics of CSS3 — Part III: Templates & Common Practice

From here onwards, I would look at some style sheets to get a feel of how to style web pages in real projects, and afterward, I would start putting things into practice. 

I find that the website [html5up](https://html5up.net/) provides quite a few nicely styled webpage templates for free for the public's perusal. Thumbs up for that!

To get the CSS files I want, I click the download button for the whole package (which would include the main.css file). I think the complexity and length of those style sheet is great for studying CSS and can take at least a couple days to digest and walk through.
