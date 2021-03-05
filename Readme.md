# NODE.JS image compressor

> Web-app - module

##Description
This app will compress jpg, png, svg and gif images

## Requirements

- node >= 10
- npm >= 6

## App skeleton

```bash
├── README.md
├── nodemon.json
├── package.json
├── app
│   ├── modules
│   │   └── multer.config.js
│   ├── views
│   │   └── index.ejs
│   ├── index.js
│   ├── router.js
│   └── service.js
├── build
│   └── img
├── config
│   └── router.js
├── public
│   └── uploads
└── server
    ├── events.js
    ├── index.js
    └── server.js
```
### Development
To start the application in development mode, run:

```bash
npm install
npm run start:dev
```

### Production
To start the application in production mode, run:

```bash
npm install
npm run start:prod
```
