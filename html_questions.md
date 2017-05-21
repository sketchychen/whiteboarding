#### HTML Questions:

* What does a `doctype` do?
  - Tells a browser what mark up language a page is written in.
* What's the difference between full standards mode, almost standards mode and quirks mode?
  - Full standards mode:
  - Almost standards mode:
  - Quirks mode:
* What's the difference between HTML and XHTML?
  - XHTML is like a "use strict" for HTML. It's less forgiving than HTML (e.g. it won't work if you don't close your tags).
* Are there any problems with serving pages as `application/xhtml+xml`?
  - Compatibility issues.
* How do you serve a page with content in multiple languages?
  - Can add attribute "lang" to html tag with appropriate language code property ("en" for english for example)
  - Provide translated/localized pages and programmatically display them when requested.
* What kind of things must you be wary of when design or developing for multilingual sites?
  - Cultural differences
  - Text differences (alphabet vs. logograms, Hebrew is right-justified)
* What are `data-` attributes good for?
  - Storing extra data that doesn't have a direct role or effect on HTML.
* Consider HTML5 as an open web platform. What are the building blocks of HTML5?
  - more semantic text markup
  - new form elements
  - vedio and audio
  - new javascript API
  - canvas and SVG
  - new communication API
  - geolocation API
  - web worker API
  - new data storage
* Describe the difference between a `cookie`, `sessionStorage` and `localStorage`.
  - Cookies store only strings.
  - localStorage and sessionStorage can store additional JavaScript primitives.
  - sessionStorage is server-side and is deleted when the tab is closed.
  - localStorage is client-side and persists when the browser is closed and reopened.
* Describe the difference between `<script>`, `<script async>` and `<script defer>`.
  - async attribute tells the browser to execute the script asynchronously if possible, having the browser execute whatever other scripts without waiting for the async script to finish.
  - defer attribute tells the browser to execute the script after the document's been parsed and before DOMContentLoaded.
* Why is it generally a good idea to position CSS `<link>`s between `<head></head>` and JS `<script>`s just before `</body>`? Do you know any exceptions?
  - CSS between <head> tags prevents FOUC.
  - JS at the end of <body>'s content lets the site load first (visually anyway) and the scripts to load after.
* What is progressive rendering?
  - Category of techniques used to load content efficiently as possible
  - Lazy loading, prioritizing visible content.
* Have you used different HTML templating languages before?
  - Python: Django
  - Javascript: EJS, Angular 1.5, ReactJS
