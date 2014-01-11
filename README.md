# Meteor-skeleton

This is a skeleton for Meteor, giving you a more organized and structured way to make projects. 


## Structure

```
client/ 					# Client code
    config/             	# Client configuration files
    	config.js
	lib/                	# Client-side library files that get executed first
		helpers/ 			
			handlebars.js 	# Handlebars-specific helpers
		lib.js
    routes/             	# Everything related to client-side routing
    	config.js 			# Router configuration
    	documents.js 		# Routes for Documents collection example
    	filters.js 			# Router filters
    	pages.js 			# Routes for static pages
    	users.js 			# Routes for Users
    startup/           		# Files utilizing Meteor.startup()
    	startup.js 			
    stylesheets         	# CSS/LESS/SCSS files
    	documents.css 		# CSS for the Documents view files
    	main.css 			# Non-specific CSS for the app
    	users.css 			# CSS for the users view files
    subscriptions/      	# Collection subscriptions that are not defined in routes
    	subscriptions.js 	
	views/			    	# View templates
		documents/ 			# Views related to the Documents collection
		layouts/ 			# Layout files defined with Iron Router
			layout.html
		pages/ 				# Views for static pages
			about.html
			frontpage.html
		shared/         	# Usually templates that are shared between views
			401.html
			404.html
			nav.html
		users/ 				# Views related to Users
	main.html 				# Site file containing <head></head> and <body></body>
	main.js 				# JS that goes along with main.html
collections/  				# Collection files, separate files for each collection
	documents.js
lib/                    	# Code shared with client and server files
	helpers.js
	permissions.js
public/                 	# Public files
	img/
server/						# Server code
	config/ 				# Server configuration files
		accounts.js
    fixtures/           	# Fixtures for defining pre-loaded data
    	documents.js
    	users.js
    lib/                	# Server-side library folder
    	lib.js

    publications/       	# Collection publications, separate files for each collection
    	documents.js
    	users.js
    startup/            	# Stuff that gets launched at server startup
    	startup.js
```

## Recommended packages
- iron-router
- iron-router-progress
- bootstrap-3
- moment
- accounts-base
- accounts-password
- accounts-ui-bootstrap-3
- roles
- simple-schema
- collection2
- autoform

## Inspired by
- [meteor-boilerplate](https://github.com/matteodem/meteor-boilerplate) by matteodem
- [Void](https://github.com/SachaG/Void) by Sacha Greif
- [meteor-boilerplate](https://github.com/BeDifferential/meteor-boilerplate) by BeDifferential
