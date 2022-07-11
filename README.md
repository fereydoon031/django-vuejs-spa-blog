# Blog
This source code is a minimal example for a blog template using Vue and Django.

Vue and Django are clearly separated in this project. Vue, NPM and Webpack handles all frontend logic and bundling assessments. Django and Django REST framework to manage Data Models, Web API and serve static files.While adding endpoints to provide django-rendered html replies is conceivable, the goal is to utilize Django largely for the backend and Vue + Vue Router for view rendering and routing as a single page application (SPA).

While certain parts of this project being built and adjusted, it is based on this [YouTube course](https://www.youtube.com/watch?v=DmVvqr0PMSU&list=PLAt10Vana3Ydgtrl2m39RqvQoF4jNRell&ab_channel=Silicium).

### Demo

[Live Demo](https://github.com/fereydoon031/) @todo


### Blog Structure


| Location             |  Content                                   |
|----------------------|--------------------------------------------|
| `/backend`           | Django Project & Backend Config            |
| `/backend/api`       | Django App (`/api`)                        |
| `/src`               | Vue App .                                  |
| `/src/main.js`       | JS Application Entry Point                 |
| `/public/index.html` | [Html Application Entry Point](https://cli.vuejs.org/guide/html-and-static-assets.html) (`/`)         |



## Project setup

```
$ git clone https://github.com/fereydoon031/django-vuejs-spa-blog
$ cd django-vuejs-spa-blog
```

Setup
```
$ npm install
$ pipenv install --dev && pipenv shell
$ python manage.py migrate
```

### Running Development Servers

```
$ python manage.py runserver
```

Run the following command from another tab in the same directory:
```
npm run serve
```

The Vue application will be served from [`localhost:8080`](http://localhost:8080/) and the Django API
and static files will be served from [`localhost:8000`](http://localhost:8000/).
If you would rather run a single dev server, you can run Django's
development server only on `:8000`, and you have to build the Vue app firs and the page will not reload on changes.

```
$ npm run build
$ python manage.py runserver
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
