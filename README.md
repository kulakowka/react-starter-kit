# React starter kit

This is my personal react starter kit. 

#### Setup

Run this command in console to install project.

```
git clone git@github.com:kulakowka/react-starter-kit.git && cd react-starter-kit && npm install
```

#### Development

Run this command in console to start expressjs server in development mode.

```
DEBUG=app:* npm start
```

#### Build statics

Before production running, you must compile assets.

```
npm run build
```

#### Production

Run this command in console to start expressjs server in production mode.

```
NODE_ENV=production npm start
```

Defaults:

```javascript
BACKEND_API_KEY='dev'
BACKEND_HOST='localhost:3001'
```

```
NODE_ENV=production BACKEND_API_KEY=graphql.example.com BACKEND_API_KEY=7dhas7da78hsd7asdh87asd npm start
```

As a backend you can use:
- [graffiti](https://github.com/RisingStack/graffiti) - Graffiti grabs your existing models, transforms them into a GraphQL schema and exposes it over HTTP.
- [Strapi](http://strapi.io/documentation/graphql) - Open-source Node.js framework that supports "GraphQL" out of the box.
