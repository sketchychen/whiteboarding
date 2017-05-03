#### General Questions:

* What did you learn yesterday/this week?
  - Sass enables more dynamic CSS coding so I really should get into it.
* What excites or interests you about coding?
  - You can build something every other day, sometimes create something new every other day.
  - It's a good cross between creativity and technical problem solving.
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
  - It depends on the browser, but I think for most browsers it's six.
  * What are the exceptions?
    - Uuuh.
* Name 3 ways to decrease page load (perceived or actual load time).
  - Rearrange script loading or have scripts load at opportune moments or only when needed. (Have the most important stuff load first, maybe other things in the background)
  - Ex) With a comic reader, maybe while someone is on a page reading it, immediately consecutive pages load too.
  - Optimize images, memory usage.
  - Limit HTTP requests.
  - Would CSS loading animations help?
* If you jumped on a project and they used tabs and you used spaces, what would you do?
  - Adapt to tabs. There's a chance they don't care, but I like to maintain consistency, especially if it's a team project.
* Describe how you would create a simple slideshow page.
  - Start with the basics:
    - Display first slide by default.
    - Make controls: Left and right for previous and next, go-to-start or -end buttons.
      - Account for when there aren't any previous or next ones.
    - Make navigation... thingy. So that you can click on a button or slide thumbnail to display its corresponding picture.
  - Add luxury features:
    - Auto cycle! Maybe a speed control.
    - Animations! Like moving a slide left or right, or imitate an actual slide show.
* If you could master one technology this year, what would it be?
  - C# and Unity.
* Explain the importance of standards and standards bodies.
  - It encourages consistent quality and compatibility across all tech in question, including browsers.
* What is Flash of Unstyled Content? How do you avoid FOUC?
  - FOUC is when you see the results of raw HTML without CSS. Simple solution is to link your stylesheets in the <head> tag.
* Explain what ARIA and screenreaders are, and how to make a website accessible.
   - ARIA are applications that make sites more accessible to those with disabilities.
   - Screen readers are programs that reads text on a computer aloud for the visually-impaired.
   - Using semantic tags, alt text, captions, for screen readers to read aloud can help people figure what's on a site and navigate it.
* Explain some of the pros and cons for CSS animations versus JavaScript animations.
  - CSS animations are simple but limited. Simple stuff is generally easier to implement in CSS itself than in JS as normally all you have to do is figure out ideal parameters for each animation type available. But not all browsers handle all available CSS features.
  - JavaScript animations can be built in a more complex manner and can probably make up for CSS browsers compatibility issues.
* What does CORS stand for and what issue does it address?
  - Cross-Origin Resource Sharing addresses a web domain accessing another domain's assets or other resources. This can pose a security issue (the whole You Don't Know Where That's Been) or traffic issues (hot-linking, bandwidth).
