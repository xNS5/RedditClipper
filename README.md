# RedditClipper

This is a small firefox browser extension which formats highlighted text to Reddit style markdown quotes along with the URL source.

I like many others enjoy arguing with strangers online. Often times I find myself jumping between two or more tabs/pages
to learn, quote, and cite information. I would copy text from the article I was reading, paste it into a reddit comment
box, format it accordingly to make it a quote, jump back to the webpage to copy the web address and format that as a markdown hyperlink. 

This process annoyed me so much that I wanted to find a way to automate it. 

There are three scenarios I wanted to account for:

1. Quotes with a source. 
2. Only a website URL link.
3. Wrapping a highlighted portion of a comment/post in hyperlink format (i.e. \[foo](https://bar.com))

___

# Copy Action

## If text is highlighted on a webpage

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A iaculis at erat pellentesque adipiscing commodo. Sed libero enim sed faucibus turpis. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Sapien eget mi proin sed libero enim sed. Duis ultricies lacus sed turpis tincidunt. Lacus sed turpis tincidunt id. Sed blandit libero volutpat sed cras. Accumsan tortor posuere ac ut consequat semper viverra. Sem et tortor consequat id porta nibh venenatis cras.

Curabitur vitae nunc sed velit dignissim sodales ut. Et malesuada fames ac turpis egestas sed tempus urna et. Malesuada proin libero nunc consequat interdum letius sit. Diam phasellus vestibulum lorem sed. Pharetra vel turpis nunc eget. Leo duis ut diam quam nulla. Dictum sit amet justo donec. Habitant morbi tristique senectus et netus et malesuada fames. Nunc lobortis mattis aliquam faucibus. Congue mauris rhoncus aenean vel elit scelerisque mauris. Montes nascetur ridiculus mus mauris vitae ultricies. Mi quis hendrerit dolor magna eget est. Tincidunt praesent semper feugiat nibh sed. Risus viverra adipiscing at in tellus integer feugiat scelerisque. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum a. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis. In iaculis nunc sed augue lacus viverra vitae congue eu. At volutpat diam ut venenatis tellus in. Tellus integer feugiat scelerisque letius morbi enim nunc faucibus. Vitae suscipit tellus mauris a diam maecenas sed enim ut.


### The re-formatted text copied to the clipboard:

\> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A iaculis at erat pellentesque adipiscing commodo. Sed libero enim sed faucibus turpis. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Sapien eget mi proin sed libero enim sed. Duis ultricies lacus sed turpis tincidunt. Lacus sed turpis tincidunt id. Sed blandit libero volutpat sed cras. Accumsan tortor posuere ac ut consequat semper viverra. Sem et tortor consequat id porta nibh venenatis cras.

\> Curabitur vitae nunc sed velit dignissim sodales ut. Et malesuada fames ac turpis egestas sed tempus urna et. Malesuada proin libero nunc consequat interdum letius sit. Diam phasellus vestibulum lorem sed. Pharetra vel turpis nunc eget. Leo duis ut diam quam nulla. Dictum sit amet justo donec. Habitant morbi tristique senectus et netus et malesuada fames. Nunc lobortis mattis aliquam faucibus. Congue mauris rhoncus aenean vel elit scelerisque mauris. Montes nascetur ridiculus mus mauris vitae ultricies. Mi quis hendrerit dolor magna eget est. Tincidunt praesent semper feugiat nibh sed. Risus viverra adipiscing at in tellus integer feugiat scelerisque. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum a. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis. In iaculis nunc sed augue lacus viverra vitae congue eu. At volutpat diam ut venenatis tellus in. Tellus integer feugiat scelerisque letius morbi enim nunc faucibus. Vitae suscipit tellus mauris a diam maecenas sed enim ut.

\[Source](https://www.foo.bar)

## If no text is highlighted

The URL:

https://www.foo.bar

The re-formatted URl copied to the clipboard:

\[foo](https://www.foo.bar)


# Paste Action

**Prerequisite**

The user has previously used the "copy" action, which will store data in local browser storage.

## If text is highlighted in an input field


The user has previously used the "copy" action, which will store data in local storage

> Lorem ipsum dolor sit amet, \*consectetur adipiscing elit\*, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A iaculis at erat pellentesque adipiscing commodo. Sed libero enim sed faucibus turpis. Ultrices mi tempus imperdiet nulla malesuada pellentesque.

If the user highlights *consectetur adipiscing elit* and hits the "Paste Link" context menu option, the input will be replaced with:

> Lorem ipsum dolor sit amet, \[consectetur adipiscing elit](https://previously_copied_link.com), sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A iaculis at erat pellentesque adipiscing commodo. Sed libero enim sed faucibus turpis. Ultrices mi tempus imperdiet nulla malesuada pellentesque.


## If there is no highlighted input field text

If there is no highlighted text, the link will be appended to the input field text like so:

> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A iaculis at erat pellentesque adipiscing commodo. Sed libero enim sed faucibus turpis. Ultrices mi tempus imperdiet nulla malesuada pellentesque. \[This is a webpage title](https://previously_copied_link.com)

___

# Data Stored

This web extension utilizes the browser's `sessionStorage` to persist data. `sessionStorage`, unlike `localStorage`, persists data only
while the browser session is running. Once you close the browser, the data goes away. This call can be seen [here in contextMenu.js](https://github.com/xNS5/RedditClipper/blob/a0954081d0a52ee501b894ab31e73ed5be52b291/background-scripts/contextMenu.js#L53). 

No data is transmitted to servers associated with this project. 

# Installation

Please navigate to /releases and install the XPI file. Alternatively, you could download the source code and install locally. It's your life. 

Inb4 "Why are there so many commits?":

Mozilla is kind of a butt when it comes to signing releases. I have to keep incrementing the version number if I want to re-sign and test out the CI script. So it took a while. Lol.

# Contributing

If there are any issues or bugs with this extension, please create a new issue and describe in detail what's going on or the desired functionality. I 
won't be able to help or fix it if I don't know what's going wrong.
