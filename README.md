# Meteor-skeleton
A boilerplate for Meteor - giving you a simple and more organized way to create projects.

It comes with a complete collection sample including publications, subscriptions and CRUD functionality. Routes, views and some nice helpers are also included.

Take a look at [meteorskeleton.herokuapp.com](https://meteorskeleton.herokuapp.com) for a demo.

![Meteor-skeleton](http://i.imgur.com/Soq1xnF.png)

## Packages used

### Atmosphere

- blaze-html-templates
- accounts-base
- alanning:roles
- kadira:flow-router
- kadira:blaze-layout
- arillo:flow-router-helpers
- zimme:active-route
- aldeed:simple-schema
- aldeed:collection2
- aldeed:autoform
- fourseven:scss
- themeteorchef:bert

### NPM

- bootstrap-sass
- moment

The Meteor packages 'autopublish' and 'insecure' are removed by default.

### NPM

## Usage
1. Clone it: ```git clone https://github.com/kjetilhau/meteor-skeleton.git```
2. ```cd meteor-skeleton```
3. Remove the .git folder
4. ```git init```
6. ```meteor```

## Structure

```
client
import
  api/
    documents/
      both/
        schemas/
      server/
  modules/
  startup/
    both/
    client/
      router/
    server/
  ui/
    components/
      documents/
        edit/
        index/
          documents-index-item/
        new/
        show/
    helpers/
    layouts/
    pages/
    shared/
    stylesheets/
      theme/
public
  img/
  fonts/
server
```

## Other great boilerplates
- [meteor-boilerplate](https://github.com/matteodem/meteor-boilerplate) by matteodem
- [meteor-boilerplate](https://github.com/Differential/meteor-boilerplate) by Differential
