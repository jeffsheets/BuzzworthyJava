Slides for Buzzworthy Java with Spring Boot and JHipster at Omaha Java Users Group, October 2014
=======

Presentation here: http://jeffsheets.github.io/BuzzworthyJava

Screencast here: https://www.youtube.com/watch?v=yoEcBGxcRwU

#### Dependencies
* Node
* Bower

####Getting Started
* Run `npm install` to install node dependencies
* Run `bower install` to install client-side dependencies

####Grunt Commands
* `grunt assemble`
  * Minify/uglify the javascript source and css
  * Compiles jade
  * Stages everything in the dist folder
* `grunt run`
  * Starts a server running on port 8001
  * watches for changes on project files
  * When files change, the assemble task is re-run and
  * Livereload triggers browser update on assemble task completion
* `grunt publish`
  * Publishes slides to GitHub pages
  * Uses git subtree merge to merge the contents of dist into the gh-pages branch

  Thanks to Mike Kelly for the reveal.js template! https://github.com/mrkelly/reveal-template
