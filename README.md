# Developing a SPA in 2015
_jQuery and Backbone, with Bootstrap_

## Our app

I'm going to use the [Pokémon API](https://pokeapi.co/) because it works, has search/pagination, and it's more complex than a single endpoint.

### User stories:
* As a user, I can search for a pokémon
* As a user, I can browse through all pokémon that exist
* And as a user, I can pin my favorite pokémon to the main page

## Ethos

As a Very Smart Developer in 2015 who's up on the latest and greatest in web dev, you know it is a sin to combine your structure, behavior, and appearance in one— gone are the days of the table layout with inline styles! Long live the CDN, jQuery, and global CSS! You've heard some whisperings about "semantic HTML," but divs were good enough for your father and they're good enough for you. Responsive design? I don't know her, and who's _really_ going to your website on a *phone* anyway? No one you care about!

We'll define our logic in our JS file(s), our structure in our HTML (including rudimentary templates), and our appearance rules in our CSS. It's like, separation of concerns or something. Everything's a `var`, so be careful not to overwrite your global variables. Function definitions require the `function` keyword, and classes? Pssh that's for Ruby devs. Get outta here with your OOP. We live and die by the value of `this`, even if none of us _really_ knows what it means or even what it'll be at a given time (we'll talk about `.bind` later).

Backbone makes use of the [MV*](https://www.sitepoint.com/anatomy-javascript-mv-framework/) (Model, View, Controller except that the "controller" (user input handler) is baked into the view components) pattern. 

In BB, a `Model` is where the data lives, along with methods to interact with it. If you have state or singular API methods, that'll be stored in your model. 

BB also has the concept of a `Collection`, or an ordered set of `Models`.

## Getting set up

1. Make a new dir and touch `index.html`
2. Copy the script tags for [jQuery](https://releases.jquery.com/) & [Backbone](https://cdnjs.com/libraries/backbone.js/tutorials) from the CDN; paste into head of index page
   1. Don't forget [Underscore.js](https://underscorejs.org/) (hard dependency of Backbone)!
   2. If you really want a tutorial, [this one's good](https://www.sitepoint.com/backbone-basics-models-views-collections-templates/)
3. Create a new `main.js`, add script tag to HTML
   1. Make sure to include it _after_ jQuery & Backbone so you can reference those in your code
4. Create a new `main.css`, add link tag
5. Open up `index.html` in your browser and prepare to refresh a lot
   1. (I use python's simple HTTP server to serve my index locally: `$ python -m SimpleHTTPServer`. Now it's `$ python3 -m http.server`)
6. Create your divs and give 'em unique IDs because that's how we're going to tell jQuery to find them

## Managing local state with Backbone

## Managing global state

### Issues

### Approach