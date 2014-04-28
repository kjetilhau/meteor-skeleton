# Meteor-skeleton
Opinionated skeleton for Meteor - giving you a more organized and structured way to create projects. 

It contains a few helpers, routes and views. Oh, and a collection with pubs and subs. 

## Dependencies
- iron-router
- roles
- simple-schema
- collection2
- autoform
- moment
- less-fontawesome
- less-bootstrap-3
- iron-router-progress

# Usage
1. Clone it: ```git clone https://github.com/kjetilhau/meteor-skeleton.git```
2. ```cd meteor-skeleton```
3. Delete everything git related (.git folder and .gitignore)
4. ```git init```
5. ```meteor add less```

## Structure

```
client/							# Client code
  config/						# Configuration files
  lib/							# Library files that get executed first
    helpers/ 					# Helpers that helps you help others
  routes/						# Everything related to client-side routing
  startup/						# Stuff that gets launched at client load
  stylesheets/					# CSS/LESS/SCSS files
    components/					# Styles for specific components
    sites/						# Styles for a site or for a collection's CRUD views
  subscriptions/				# Collection subscriptions that are not defined in routes
  views/						# View templates
    documents/					# Views related to the Documents collection
    layouts/					# Layout files defined with Iron Router
    pages/						# Views for static pages
    shared/						# Usually templates that are shared between views
collections/					# Collection files, separate files for each collection
lib/							# Code shared with client and server files
public/							# Public files
  img/							# Images
  fonts/						# Fonts
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
