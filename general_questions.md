#### General Questions:

* What did you learn yesterday/this week?
* What excites or interests you about coding?
* What is a recent technical challenge you experienced and how did you solve it?
* What UI, Security, Performance, SEO, Maintainability or Technology considerations do you make while building a web application or site?
  - Overall: what's the purpose of the site?
  - UI: what do we want on the site and how should it be organized? What's on the front page and what do we want emphasized, what's accessible by navigation bar and how should those be organized (major categories with drop downs, etc.)
  - Security
    - IFFEs: keep things inaccessible from the console log or global scope
    - string-sanitizing: prevent code injection for Javascript, SQL, etc.
    - authorization and accessibility: b-crypt all the passwords and never store them in plain text ever.
* Talk about your preferred development environment.
  - Atom for my text editor, but that's mostly due to familiarity. I do find it a little easier to work with than Sublime, though, especially with plugin packages.
  - Right now I'm very used to GitHub vs. other repo hubs, but it seems to be the most popular anyway. Open to trying out other hubs, though.
* Which version control systems are you familiar with?
  - Git.
* Can you describe your workflow when you create a web page?
  - I think about what content I want on it as well as what other people (target audience) would want or appreciate seeing on it. What tech and/or stack would work best for what I want?
  - I sketch a rough prototype out on paper, sometimes with basic wireframes. This way I can plan how to layout the HTML and to think about CSS classes.
  - Think about features I need in there, and about features that would be nice to have. Have other people already made libraries for them?
  - Break down those features into pseudo code into the smallest building blocks (reasonably). If I can't think DRYly right off the bat, I'll just start coding one feature and see where the optimization takes me.
* If you have 5 different stylesheets, how would you best integrate them into the site?
  - Link them in a cascading fashion. I like to place third-party stylesheets first and then mine after most broadly-used first. Then by section order, if my stylesheets are organized by section.
  - I'd also have to think about how one might clash with another. In some cases I may want to CSS elements that already have a Bootstrap class on it, so to avoid that I make sure I tack on a selector with a different name, and if its properties still conflict with a third-party, then I may resort to an !important marker if I can't figure out a way around it. Sometimes making things from scratch is easier.
* Can you describe the difference between progressive enhancement and graceful degradation?
  - Graceful degradation
  - Progressive enhancement
* How would you optimize a website's assets/resources?
* How many resources will a browser download from a given domain at a time?
  * What are the exceptions?
* Name 3 ways to decrease page load (perceived or actual load time).
* If you jumped on a project and they used tabs and you used spaces, what would you do?
* Describe how you would create a simple slideshow page.
* If you could master one technology this year, what would it be?
* Explain the importance of standards and standards bodies.
* What is Flash of Unstyled Content? How do you avoid FOUC?
* Explain what ARIA and screenreaders are, and how to make a website accessible.
* Explain some of the pros and cons for CSS animations versus JavaScript animations.
* What does CORS stand for and what issue does it address?
