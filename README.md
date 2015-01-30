# Meteor-skeleton
A boilerplate for Meteor - giving you a simple and more organized way to create projects.

It comes with a complete collection sample including publications, subscriptions and CRUD functionality. Routes, views and some nice helpers are also included.

Take a look at [meteor-skeleton.meteor.com](http://meteor-skeleton.meteor.com) for a live sample.

![Meteor-skeleton](http://i.imgur.com/ETTVDTM.png)

## Packages used

- meteor-platform
- accounts-base
- alanning:roles
- iron:router
- aldeed:simple-schema
- aldeed:collection2
- aldeed:autoform
- momentjs:moment
- twbs:bootstrap

The Meteor packages 'autopublish' and 'insecure' are removed by default.

## Usage
1. Clone it: ```git clone https://github.com/kjetilhau/meteor-skeleton.git```
2. ```cd meteor-skeleton```
3. Remove the .git folder
4. ```git init```
6. ```meteor```

## Structure

```
client/							# Client code
  config/						# Configuration files
  lib/							# Library files that get executed first
    helpers/ 					# Helpers that helps you and yours
  routes/						# Everything related to client-side routing
  startup/						# Stuff that gets launched at client load
  stylesheets/					# CSS/LESS/SCSS files
    components/					# Styles for specific components
    sites/						# Styles for sites and collections
  subscriptions/				# Collection subscriptions that are not defined in routes
  views/						# View templates
    documents/					# Views related to the Documents collection
    layouts/					# Layout files defined with Iron Router
    pages/						# Views for static pages
    shared/						# Usually templates that are shared between views
lib/							# Code shared with client and server files
  collections/					# Collection files, separate files for each collection
  helpers/						# Helpers that is accessible on both client and server
public/							# Public files
  img/							# Static image folder
  fonts/						# Static fonts folder
server/							# Server code
  config/						# Server configuration files
  fixtures/						# Fixtures for defining pre-loaded data
  lib/							# Server-side library folder
  publications/					# Collection publications, separate files for each collection
  startup/						# Stuff that gets launched at server startup
```

## Other great boilerplates
- [meteor-boilerplate](https://github.com/matteodem/meteor-boilerplate) by matteodem
- [Void](https://github.com/SachaG/Void) by Sacha Greif
- [meteor-boilerplate](https://github.com/BeDifferential/meteor-boilerplate) by BeDifferential
