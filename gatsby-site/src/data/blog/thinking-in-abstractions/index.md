---
category: "blog"
cover: "./lily-banse-food-cover.jpg"
coverAttribution:
  'Photo by <a href="https://unsplash.com/@lvnatikk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Lily Banse</a> on <a href="https://unsplash.com/s/photos/restaurant-menu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  '
title: "Thinking In Abstractions"
description: "We rely on abstractions in the everyday world. We create more when writing code so be thoughtful about them."
date: "2021-08-29"
tags: ["Tech"]
published: true
---

![Image of 3 dishes of fishcakes, sliced beef salad and something brown. By Lily Banse.](./lily-banse-food-cover.jpg "Image by Lily Banse")

I love food and cooking and am fond of metaphor and non-technical analogies.

When I order food at a restaurant I look at the menu, place my order with the staff and later my food magically appears. What cookware was used? What brand of oven? Who is their supplier of salt and pepper? What knife? All unimportant details to me on the other side of the door.

Abstractions aren't just for other developers, they're more importantly for our end users. My user can click a button and know that their information will be saved for later access. I can order Salmon at the restaurant and know I'll later receive Salmon. Does the user care whether I'm saving their data in MongoDB or postgresql? Do I (and should I) know which chef cooks my dish?Which knives they used? Which pan?

As developers we clearly work in abstractions all day. As users of high level languages we're blessed to be higher up in that stack of abstractions which leaves us to focus on the feature at hand and not about how it's represented lower down that stack. But it's just that: a stack. Each abstraction built on top of previous ones. There's too much to hold in our heads at once, that's why abstractions exist, they're literally the simplified representation of how to perform more complex work. That work itself is hidden from us unless we choose to dig in and look at it. It should be optional. Behaviour implemented in functions, classes, other files, libraries, external APIs, some provided by the environment or browser, some created by ourselves during development.

Maintainable software is built on the boundaries and clarity of these abstractions, how they cross over and how they interact.
