---
layout: post
title: Post Mortem, 100DaysOfSpec
date: 2015-09-02
description: A recap of my experience reading the HTML specifications for 100 days.
tags:
- 100DaysOfSpec
- post mortem
- learning
---

Monday marked the end of my hundred day project, which was to read and take notes on the HTML specifications for 100 days. For those who aren’t familiar, that’s the technical documentation that tells how user agents (browsers, etc.) how to implement HTML interfaces, and tells HTML authors (web developers, etc.) how to use those features. It should be noted there’s wiggle room and areas for interpretation within both those spheres. You can see all my posts in the [100DaysOfSpec tag](http://melanie-richards.com/blog/tag:100DaysOfSpec text: ).

Because it took so much of my time—roughly an hour for 100 days—I thought it appropriate to do a quick post mortem on the reading.

## Overall impressions

Even though at times I felt I would rather be doing *literally anything else*, I’m glad I chose this as my project for the 100 days challenge. It seems odd to have worked with HTML for years and never have read the closest thing HTML authors would have to a “holy text” (though just-build-websites and supplemental, nicely-packaged documentation are nice teachers…), and to attempt to read a text that is mostly dry cover-to-cover takes a bit of discipline.

I learned a lot over the course of this reading, both about things work “under the hood”, and small authoring details that may not sync with how most people might use tags, attributes, etc. I can now obnoxiously retort “that’s not what the spec says”. Most importantly, when I am unsure of something, I now go straight to the HTML spec rather than chasing the best answer around in search results (or hoping that the sites I trust are up to date). I love that, because it’s a much more straightforward approach.

The one thing that bothers me is the chasm between what the spec says user agents *should* do, and what they *actually* do. In a way this means that even our most basic text can’t be trusted. In most cases this should not be a problem, though, because we should be rigorously testing our work in each of the browser versions within our support agreements.

## Process

When I started out reading, my goal was to write down only the most interesting factoids; as time went on, I ended up writing more and more down per post. Part of this is truly the presentation of more unknown material, but I’m a little bummed that the notes became summaries by the end.

If I were to read the spec again—and I plan to tackle shorter chunks in the future—I think I would turn on the “developer styles” on offer. It’s nice to see how user agents should be implementing the features of HTML, but I could have covered a lot more ground if I were reading the bits catering towards HTML authors.

I will say I’m very happy with how well it worked out to dedicate my commute home from working to continued learning. I’ll be reusing that process for other endeavors.

## Should I read the spec?

Midway through the project, a beginner asked me if they should be reading the HTML spec, too. My first thought was “oh no please, save yourselves!” A more rational response is “later”. I don’t think it makes much sense for a beginner to read this document. Unless you crave this kind of technical reading, the spec will bore you to tears before you even get much of anything built. For beginners, if you like slow step-by-step guidance, there’s sites for that ([Codecademy](http://codecademy.com text: ), [Treehouse](https://teamtreehouse.com/ text: )), or there’s messing around with code and filling in the details from sites like the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/HTML text: ).

Once you get the basics down, the HTML spec is something you can refer back to in order to deepen your knowledge, or get an answer on a question “straight from the source”.

## What might be a good way to read the spec?

If you’re working with HTML to build websites, here’s a few suggestions.

* Click the button that says “Add developer styles”. This will hide any information that is meant more for browsers and other implementors of HTML interfaces. You can always turn this feature off if you’re curious about how something in particular works.
* If you’re the type of person who likes to read The Whole Thing, set aside a particular amount of time on a predictable schedule to read segments.
* If you’re not looking to read cover-to-cover, skim the table of contents to see if any sections jump out at you and read those. Browsing is an excellent method for drawing to our attention topics we might be overlooking. For example, images may seem old hat, but do you know the particulars of crafting a good `alt` attribute for accessibility, in each of the many use cases?
* It may also benefit you to brush up on familiar areas, too. Working with a lot of forms on a current project? Maybe check out the form elements sections of the HTML spec to see what you might be missing.
* To reiterate, checking first with the spec is a great way to answer a question you might have about your HTML authoring. For example, when to use which sectioning element (section, article, main) and which of those elements can nest each other can be confusing. Instead of reading articles on people’s personal blogs which all claim to do things The Best Way, maybe check with the spec<sup><a href="#fn-1">1</a></sup> first.

Happy reading! 

<section class="footnotes">
<p id="fn-1">1. If I were a different kind of person this could be an excellent catchphrase.</p>
</section>