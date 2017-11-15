Javascript and HTML5
====================

This project contains exercises I completed while reading
"Head First HTML5 Programming: Building Web Apps with JavaScript" by
Eric Freeman and Elisabeth Robson.

The book is broken down as follows:

* Chapter 1: Getting to know HTML5
* Chapter 2: Introducing JavaScript and the DOM
* Chapter 3: Events and handlers
* Chapter 4: Javascript functions and objects
* Chapter 5: Geolocation
* Chapter 6: Talking to the web
* Chapter 7: Canvas
* Chapter 8: Video
* Chapter 9: Web storage
* Chapter 10: Web workers


Additional Information
----------------------

General Approach
^^^^^^^^^^^^^^^^
In each chapter, I read the text, and worked through the exercises. Some
exercises required pre-fabricated code, which I imported from here:
https://github.com/bethrobson/Head-First-HTML5


Chapter 5 - Geolocation
^^^^^^^^^^^^^^^^^^^^^^^
This chapter covers geolocation. Based on the info in the book, I made a
small app that shows where the user is located relative to "HQ". The
app makes use of Google Maps API to show the user's location as a pin
on a map.

I deployed the app on Heroku:
https://javascript-geolocation.herokuapp.com/myLoc.html

Have some extra time on your hands? Use the app to find where HQ is.
You'll be glad you did!


Chapter 7 - Canvas
^^^^^^^^^^^^^^^^^^
The Twitter API no longer supports the ability to request a user's
timeline through XMLHttpRequest. So I simulated a few tweets instead.
The exercise allows users to pick a background color, shape, text color,
and a "tweet". The user's selections are drawn on a canvas, which is then
printed on a t-shirt and shipped to the user. Next
steps would be to implement a business strategy, supply pipeline,
manufacturing facility, and a small HR department. Then should be good to go.


travel_agent
^^^^^^^^^^^^
This was a side-project to incorporate a Google Maps API and some of the
JavaScript basics thus far. If you're up for an adventure, let
it pick the location for your next vacation get-away.

Note: YMMV. The Google Maps API requires domains to be specified in the
Google account. Since this is only hosted locally, the Google map will
probably not load on your machine. If you're really into the random travel
idea, an API key can be acquired here:
https://developers.google.com/maps/documentation/javascript/
