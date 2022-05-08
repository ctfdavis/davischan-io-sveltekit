---
title: 'Exploring CSS Zen Garden'
desc: "Stepping into CSS Zen Garden and learning what wonders CSS can do. Some of the works were dated back in the 2000s, but they were still pretty neat to look at."
date: '2020/10/29'
tags: ['CSS']
seq: 2
---

## My plan for this exploration in the Zen Garden

Time for another exploration. This time, I plan to read and learn from some templates in the [CSS Zen Garden](http://www.csszengarden.com). What is the CSS Zen Garden? [This Wikipedia article](https://en.wikipedia.org/wiki/CSS_Zen_Garden) gives an excellent summary:

> The CSS Zen Garden is a World Wide Web development resource built to demonstrate what can be accomplished visually through CSS-based design.
> Style sheets contributed by graphic designers from around the world are used to change the visual presentation of a single HTML file, producing hundreds of different designs. Aside from referencing an external CSS file, the HTML markup itself never changes. All visual differences result from the CSS (and supporting imagery).

The template that I have selected for this exploration is called [“Oceanscape”](http://csszengarden.com/210/page0/) by Justin Gray, made back in 2007 (vintage, huh). There are two reasons why I choose this template: (1) it’s concise; (2) it looks pretty dope. From my experience, an exploration like this is likely to take a long time. So let's not waste time and dive in now.

## First thing first, the HTML

Before I look at the style sheet, I should peruse the HTML first to see what’s there and what to expect from the style sheet. Right off the bat, I already had to look up several lines of code that I had not encountered before:

```html
<link rel="alternate" type="application/rss+xml" title="RSS" href="http://www.csszengarden.com/zengarden.xml">
<meta name="viewport" content="width=device-width, initial-scale=1.0>
<meta name="author" content="Dave Shea">
<meta name="description" content="A demonstration of what can be accomplished visually through CSS-based design.">
<meta name="robots" content="all">
```

For the first line with the `<link>` tag, I learned from [w3schools](https://www.w3schools.com/xml/xml_rss.asp) that this is **XML RSS**, and what it does is syndicate a site content. It is an easy way to share and view headlines and content. However, according to [this Wikipedia article on RSS](https://en.wikipedia.org/wiki/RSS#Example), under the section _Current Usage_, it is said that RSS is no longer supported in modern browsers:

> Several major sites such as Facebook and Twitter previously offered RSS feeds but have reduced or removed support. Additionally, widely used readers such as Shiira, FeedDemon, and Google Reader have been discontinued having cited declining popularity in RSS RSS support was removed in OS X Mountain Lion’s versions of Mail and Safa… Mozilla removed RSS support from Mozilla Firefox version 64.0, joining Google Chrome and Microsoft Edge which do not include RSS support, thus leaving Internet Explorer as the last major browser to include RSS support by default.

What a shame, but that gives me a reason to move on to the next line of code. When I saw the word **“viewport”**, what instantly came into my head was the browser window. Upon further digging into it, I realize a whole new subject that I have to learn: _responsive web design_. I reckon that it is a substantial topic, and I plan to devote some length to writing about it before I proceed to the next HTML portion.

## Learning about Responsive Web Design

For most content under this session, I refer to [this beautiful guideline](https://www.w3schools.com/css/css_rwd_intro.asp) written by w3schools. I had stumbled upon this topic once, but it was essentially a TLDR for me, but there is no excuse for me to skim over this time. So RWD essentially refers to a design practice in HTML & CSS so that the webpages adjust to different screen sizes for ease of use. 

The first step to activate RWD is to include the following line of code in the head section of the markup:

```html
<meta name="viewport" content="width=device-width; initial-scale=1.0" />
```

The above code will set up the viewport for RWD, but there is more to do as the devil is in the details. First, in the content attribute, we have `width=device-width`. It sets the page width to follow the screen width. Then, we also have `initial-scale=1.0`, which sets the initial page zoom to 100% when the page is loaded/reloaded.

After that one line, it is time to put in more work to set up RWD properly. The grid-view is what many sites base on for RWD these days, so I would like to discuss it. First, let's think about the following question: what exactly is a grid-view? A grid-view is typically made up of 12 columns total to 100% width and can shrink and expand as the viewport gets resized. After that, the next question is: great, but how do I set it up? I ran into trouble because the answer involves using the “box-sizing” property that I hadn’t learned about. So to answer the question, I must first learn about the “box-sizing” property.

## Quick look into the “box-sizing” property

Easier than I imagined it to be ‐ that’s what I reckoned as I quickly ran through this lesson on w3schools. Basically, the “box-sizing” property is for solving one single problem: should the padding and border in an element be included in the calculated total width and height? If the answer is yes, then “box-sizing” can help. In practice, we typically want to have the padding and border in the final calculation of the width and height they specify for any element, so we just throw in the below code in every project:

```css
* {
  box-sizing: border-box;
}
```

Before I head back to RWD, there’s one more thing I have to catch up on, which is the table display type. Uh oh ‐ another digression, but I promise that’s the last one for this post.

## Quick look into display:table

It’s a little surprising to me that few in-depth tutorials on `display:table` are available on the web. I stumbled upon [this savior post](https://colintoh.com/blog/display-table-anti-hero) written by Colin Toh. I was then surprised to discover so much about using tables in webpages and why it has not been recommended since about two decades ago. I also learned that the CSS display type table was similar to the HTML counterpart:

```css
table { display: table }
tr { display: table-row }
thead { display: table-header-group }
tbody { display: table-row-group }
tfoot { display: table-footer-group }
col { display: table-column }
colgroup { display: table-column-group }
td, th { display: table-cell }
caption { display: table-caption }
```

I don’t think I am going to go any further here. Later I will devote some time to working this out.

I have already mentioned a 12-column grid as a typical RWD solution. So how does that work out exactly? Well, every column has a width of 8.33% because 100%/12 is 8.33%, but that alone doesn’t answer two critical questions: 

1. how do I use grid-view? 
2. how do I code grid-view? 

Luckily, it turns out that the answer to both questions is easy once I have learned how grid-view works intuitively. 

Let’s say I have content symbolized by three different colors on the grid-view. As mentioned above, when I resize the window, the content will shrink and expand accordingly to cater to different screen sizes better. However, as revealed later in the same tutorial on w3schools, there is more to think about and do to achieve a robust RWD solution. For now, though, it’s time to answer the second question: how to make a webpage based on a 12-column grid?

The answer to that is relatively straightforward following the above figures' logic: make the 12 columns in CSS, and put items in rows in the markup to make them fit in some of the 12 columns. BUT… wait, how? That’s where a trick is needed. So, let’s first construct the code for the 12 columns:

```css
/** Copied directly from w3schools **/
.col-1 {width: 8.33%;}
.col-2 {width: 16.66%;}
.col-3 {width: 25%;}
.col-4 {width: 33.33%;}
.col-5 {width: 41.66%;}
.col-6 {width: 50%;}
.col-7 {width: 58.33%;}
.col-8 {width: 66.66%;}
.col-9 {width: 75%;}
.col-10 {width: 83.33%;}
.col-11 {width: 91.66%;}
.col-12 {width: 100%;}
```

Okay then, the trick is to set these columns all float to the left as shown below:

```css
/** Copied directly from w3schools **/
[class*="col-"] {
  float: left;
  padding: 15px;
  border: 1px solid red;
}
```

That works because then all columns would stack on the right, so long as one selects a combination of them which sums to 100% width. The only problem with the trick is that with float, the subsequent elements will try to go next to the floating elements, hence creating unwanted overlapping effects. A mere clear won't fix that, but something known as a **clearfix** (see [this article](https://www.bitdegree.org/learn/css-clear)) will. Apply the clearfix on the row which contains the columns, and voila! The overlapping issue is gone.

```css
/** Copied directly from w3schools **/
.row::after {
  content: "";
  clear: both;
  display: table;
}
```

## RWD: Grid-view

As I went through the introduction to the 12-column grid-view on w3schools, I wondered if there were other common options for the grid view, like a 16-column grid, perhaps? A google search returned me with an affirmative to the question. In fact, any n-column grid could work well for a reasonably large n so long as it fits the web page's content, and one uses the same technique for achieving RWD. However, when I got my hands dirty on trying it out, the outcome was faulty.

One problem I ran into is when the browser size shrinks as I zoom in, some of the divs would become so small that some part of them is missing. That’s not what I want for my RWD solution, and on the w3schools tutorial, it also says:

> Notice that the webpage in the example does not look good when you resize the browser window to a very small width. In the next chapter you will learn how to fix that.

My knee-jerk reaction was, when would I come back to the exploration if the tutorial went on forever like this! I have to be patient, though, and despite all the question marks I have in my mind right now, I know this is only the beginning of the beginning ‐ because there is still a long road ahead for me to master CSS.

## RWD: Media Queries

A media query can detect whether a condition is true and thus determine if a block of CSS declarations should be implemented. In the context of RWD, media queries are commonly used so that when a browser size is smaller than a certain width, a block of CSS declarations would be implemented to make the look cater to the viewport. That is so awesome. But how do I make this work on my webpage?

So I copy the code from w3schools to my website, and after changing fiddling the “max-width” (the condition), it does fix the problem for me:

```css
@media only screen and (max-width: 768px) {
/* For mobile phones: */
  [class*="col-"] {
    width: 100%;
  }
}
```

One can set up as many breakpoints as they so desire. For example, I may make two media queries with two different conditions for medium-size devices (tablets) and smaller devices (phones) or follow the recommended breakpoints on w3schools. It is also recommended that one designs for mobile devices first to load the web pages faster on them. So instead of using the “max-width” condition above, I should use “min-width”, which would allow me to work on the layout for the smallest devices first.

Now that I have read enough about the RWD, I want to go back to exploring. Unfortunately, there is still one line of code in the markup which I have no idea of what it is about:

```html
<meta name="robots" content="all">
```

I did some google searches, and [this article](https://ahrefs.com/blog/meta-robots/) by Michal Pecánek probably contains more information than I need. It is a highly educational and valuable read, though. So, what is the `robots` meta tag about? I will quote from his article directly:

> A robots meta tag is an HTML snippet that tells search engines how to crawl or index a certain page. It’s placed into the section of a web page, and looks like this:
> `<meta name="robots" content="noindex" />`

His article covers so much, mostly related to SEO, which I have not gotten into yet. Thus, I will leave this here and move on with my exploration now. 

## Complete reading the markup & ARIA

Besides the two lines of code, which I am not familiar with, the rest of the HTML feels home to me. This is because reading a well-organized markup file like the CSS Zen Garden is such a pleasant learning experience. After reading the markup, though, I still don’t get the `role` attribute used in multiple tags, such as the following one:

```html
<header role="banner">
  <h1>CSS Zen Garden</h1>
  <h2>The Beauty of <abbr title="Cascading Style Sheets">CSS</abbr> Design</h2>
</header>
```

Searching about this brings me to **ARIA: Accessible Rich Internet Applications**. According to MDN web docs:

> Accessible Rich Internet Applications (ARIA) is a set of attributes that define ways to make web content and web applications (especially those developed with JavaScript) more accessible to people with disabilities.

I am going to skip this for now. However, I will have to find time to go back to this topic and a couple of others some time ahead.

## Inspecting the Page

After spending so much time studying the HTML template in the previous two posts, I hope to bring this exploration to an end in this post. I will make it quick, clean, and simple: I will use the element inspector in Chrome to play with the style sheet because I realize that my previous attempts to read the style sheet directly were pretty clumsy. Not only that, I didn’t learn much at all from reading a whole chunk of code which I had a hard time figuring out. I couldn’t visualize how everything was put together and how things would change if I modified the code on the fly. I could do that by frequently switching between the style sheet and the browser (like using a live server plugin in VSCode), but even that’s not highly efficient. So this time, let me see if using an element inspector would make things easier.

The template I am exploring is still the CSS Zen Garden Oceanscape by Justin Gray. What I want to do first is get rid of all images except the background and the text. With the help of the element inspector, I quickly did that.

Now I could focus more on the layout. Next, I want to inspect the blue gradient background. Unfortunately, with the element inspector, I have no luck in finding the relevant CSS property despite having clicked everywhere on the website. I then go back to the style sheet and find this line of code for the body:

```html
background: #122981 url(gradient_bg.jpg) repeat-x;
```

Great! But wait, is this the kind of gradient that I was expecting? You know, I was expecting something like this:

```css
background-image: linear-gradient(deepskyblue, darkblue);
```

I then try reconstructing the background using `linear-gradient`, and it works like a charm.

Here’s the code used to generate the gradient, generated on [cssgradient.io](https://cssgradient.io):

```css
background: rgb(76,102,212);
background: linear-gradient(180deg, rgba(76,102,212,1) 0%, rgba(56,81,182,1) 50%, rgba(19,40,129,1) 100%);
```

My guess on why the author didn’t use the above gradient code is that in 2007, it was not yet a widely supported feature. Thus, the author came up with a thin, long line gradient image, which was repeated horizontally to create the gradient effect. Pretty smart trick!

### The padding
One thing I like about Oceanscape is how the text shade images go above the paragraphs so precisely and beautifully. The key is using the padding as revealed in the element inspector:

```css
.preamble, .explanation, .participation, .benefits, .requirements
{ padding-top: 60px; margin-top: 6px; float: left; }

.preamble { background: transparent url(divider02.jpg) no-repeat; }
.explanation { background: transparent url(divider03.jpg) no-repeat; }
.participation { background: transparent url(divider04.jpg) no-repeat; }
.benefits { background: transparent url(divider05.jpg) no-repeat; }
.requirements { background: transparent url(divider06.jpg) no-repeat; }
```

The “divider” images above are, in effect, the “text shades” ‐ very nicely made indeed!

## Final words

After going through the template, I would like to conclude this exploration with the following three points:

1. I should explore a webpage by using both an element inspector and the source code because…
  - the element inspector in Chrome is feature-rich, and I can see the changes on the fly as I modify the code, etc.
  - there are parts that I will most certainly miss if using the element inspector solely, so I need to inspect the source code as well
2. An exploration like this is tiring, but I find it a great way to discover and learn new things about HTML & CSS.
3. After an exploration, there should be time for coding practice because I need to get my hands dirty to learn how to reproduce the results even if I understand what’s going on in the template. Practice makes permanent.