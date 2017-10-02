# Meteor-skeleton
A boilerplate for Meteor - giving you a simple and more organized way to create projects.

It comes with a complete collection sample including publications, subscriptions and CRUD functionality. Routes, views and some nice helpers are also included.

Take a look at [meteorskeleton.herokuapp.com](https://meteorskeleton.herokuapp.com) for a demo.

![Meteor-skeleton](http://i.imgur.com/bKiUPhD.png)

## Usage
1. Clone it: `git clone https://github.com/kjetilhau/meteor-skeleton.git`
2. `cd meteor-skeleton`
3. Remove the .git folder
4. `git init`
6. `meteor npm install --save`
7. `meteor`

## Packages used

### Atmosphere

- blaze-html-templates
- accounts-base
- #alanning:roles
- kadira:flow-router
- kadira:blaze-layout
- arillo:flow-router-helpers
- zimme:active-route
- aldeed:schema-deny
- aldeed:collection2-core
- aldeed:autoform
- fourseven:scss

### NPM

- simpl-schema
- bootstrap
- moment
- noty

The Meteor packages 'autopublish' and 'insecure' are removed by default.

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
- [base](https://github.com/themeteorchef/base) by The Meteor Chef
- [meteor-boilerplate](https://github.com/matteodem/meteor-boilerplate) by matteodem
- [meteor-boilerplate](https://github.com/Differential/meteor-boilerplate) by Differential
