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
* How do you serve a page with content in multiple languages?
* What kind of things must you be wary of when design or developing for multilingual sites?
* What are `data-` attributes good for?
* Consider HTML5 as an open web platform. What are the building blocks of HTML5?
* Describe the difference between a `cookie`, `sessionStorage` and `localStorage`.
* Describe the difference between `<script>`, `<script async>` and `<script defer>`.
* Why is it generally a good idea to position CSS `<link>`s between `<head></head>` and JS `<script>`s just before `</body>`? Do you know any exceptions?
  - CSS between <head> tags prevents FOUC.
  - JS at the end of <body>'s content lets the site load first (visually anyway) and the scripts to load after.
* What is progressive rendering?
* Have you used different HTML templating languages before?
