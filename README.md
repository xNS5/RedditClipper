# RedditClipper

This is a small firefox browser extension which formats highlighted text to Reddit style markdown quotes along with the URL source.

I like many others enjoy arguing with strangers online. Often times I find myself jumping between two or more tabs/pages
to learn, quote, and cite information. I would copy text from the article I was reading, paste it into a reddit comment
box, format it accordingly to make it a quote, jump back to the webpage to copy the web address and format that as a markdown hyperlink. 

This process annoyed me so much that I wanted to find a way to autoamte it. 

There are two scenarios I wanted to account for: the first being if someone has highlighted text, and the second is if someone
wants to just copy the URL. When the extension is run, it looks for highlighted text. If there is highlighted text, it formats 
it accordingly and adds the URL as a hyperlink underneath the quoted text.

## If text is highlighted

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A iaculis at erat pellentesque adipiscing commodo. Sed libero enim sed faucibus turpis. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Sapien eget mi proin sed libero enim sed. Duis ultricies lacus sed turpis tincidunt. Lacus sed turpis tincidunt id. Sed blandit libero volutpat sed cras. Accumsan tortor posuere ac ut consequat semper viverra. Sem et tortor consequat id porta nibh venenatis cras.

Curabitur vitae nunc sed velit dignissim sodales ut. Et malesuada fames ac turpis egestas sed tempus urna et. Malesuada proin libero nunc consequat interdum varius sit. Diam phasellus vestibulum lorem sed. Pharetra vel turpis nunc eget. Leo duis ut diam quam nulla. Dictum sit amet justo donec. Habitant morbi tristique senectus et netus et malesuada fames. Nunc lobortis mattis aliquam faucibus. Congue mauris rhoncus aenean vel elit scelerisque mauris. Montes nascetur ridiculus mus mauris vitae ultricies. Mi quis hendrerit dolor magna eget est. Tincidunt praesent semper feugiat nibh sed. Risus viverra adipiscing at in tellus integer feugiat scelerisque. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum a. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis. In iaculis nunc sed augue lacus viverra vitae congue eu. At volutpat diam ut venenatis tellus in. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Vitae suscipit tellus mauris a diam maecenas sed enim ut.

The re-formatted text copied to the clipboard:

\> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A iaculis at erat pellentesque adipiscing commodo. Sed libero enim sed faucibus turpis. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Sapien eget mi proin sed libero enim sed. Duis ultricies lacus sed turpis tincidunt. Lacus sed turpis tincidunt id. Sed blandit libero volutpat sed cras. Accumsan tortor posuere ac ut consequat semper viverra. Sem et tortor consequat id porta nibh venenatis cras.

\> Curabitur vitae nunc sed velit dignissim sodales ut. Et malesuada fames ac turpis egestas sed tempus urna et. Malesuada proin libero nunc consequat interdum varius sit. Diam phasellus vestibulum lorem sed. Pharetra vel turpis nunc eget. Leo duis ut diam quam nulla. Dictum sit amet justo donec. Habitant morbi tristique senectus et netus et malesuada fames. Nunc lobortis mattis aliquam faucibus. Congue mauris rhoncus aenean vel elit scelerisque mauris. Montes nascetur ridiculus mus mauris vitae ultricies. Mi quis hendrerit dolor magna eget est. Tincidunt praesent semper feugiat nibh sed. Risus viverra adipiscing at in tellus integer feugiat scelerisque. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum a. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis. In iaculis nunc sed augue lacus viverra vitae congue eu. At volutpat diam ut venenatis tellus in. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Vitae suscipit tellus mauris a diam maecenas sed enim ut.

\[Source](https://www.foo.bar)

## If no text is highlighted

The URL:

https://www.foo.bar

The re-formatted URl copied to the clipboard:

\[foo](https://www.foo.bar)

# Data Stored

This extension in no way communicates with me. All it does is reads the highlighted text is present -> formats it -> sends it to your system clipboard. 

# Installation

I'm currently trying to work out the kinks on a Github Action script to automate releases to make it easier. Currently the action artifact isn't signed by Mozilla so the resulting XPI file won't be installable. 

# Issues

If there are any issues or bugs with this extension, please create a new issue and describe in detail what's going on. I 
won't be able to help or fix it if I don't know what's going wrong.
