// the polyfills must be one of the first things imported in node.js.
// The only modules to be imported higher - node modules with es6-promise 3.x or other Promise polyfill dependency
// (rule of thumb: do it if you have zone.js exception that it has been overwritten)
// if you are including modules that modify Promise, such as NewRelic,, you must include them before polyfills
import 'angular2-universal-polyfills';
import 'ts-helpers';
import './__workaround.node'; // temporary until 2.1.1 things are patched in Core

import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as morgan from 'morgan';
import * as compression from 'compression';

// Angular 2
import { enableProdMode } from '@angular/core';
// Angular 2 Universal
import { createEngine } from 'angular2-express-engine';
// App
import { MainModule } from './node.module';
// Routes
import { routes } from './server.routes';
// http://ramdajs.com/0.21.0/docs/
import { isEmpty } from "ramda";

// Temp Data
import { featuredCategorie } from './backend/models/featured-categories';
import { entityCard } from './backend/models/entity-card';
import { entityMeta } from './backend/models/entity-meta';
import { entityRankings } from './backend/models/entity-rankings';
import { entityRelatedTags } from './backend/models/entity-related-tags';
import { entityTagCloud } from './backend/models/entity-tag-cloud';
import { news } from './backend/models/news';

// enable prod for faster renders
enableProdMode();

const app = express();
const ROOT = path.join(path.resolve(__dirname, '..'));

// Express View
app.engine('.html', createEngine({
    ngModule: MainModule,
    providers: [
    // use only if you have shared state between users
    // { provide: 'LRU', useFactory: () => new LRU(10) }

    // stateless providers only since it's shared
    ]
}));
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname);
app.set('view engine', 'html');
app.set('json spaces', 2);

app.use(cookieParser('Angular 2 Universal'));
app.use(bodyParser.json());
app.use(compression());

app.use(morgan('dev'));

function cacheControl(req, res, next) {
    // instruct browser to revalidate in 60 seconds
    res.header('Cache-Control', 'max-age=60');
    next();
}
// Serve static files
app.use('/assets', cacheControl, express.static(path.join(__dirname, 'assets'), {maxAge: 30}));
app.use(cacheControl, express.static(path.join(ROOT, 'dist/client'), {index: false}));

//
/////////////////////////
// ** Example API
// Notice API should be in aseparate process
// import { serverApi } from './backend/api';
// Our API for demos only
// app.get('/data.json', serverApi);
// app.use('/api', createTodoApi());

process.on('uncaughtException', function (err) { 
    console.error('Catching uncaught errors to avoid process crash', err);
});

function ngApp(req, res) {
    function onHandleError(parentZoneDelegate, currentZone, targetZone, error)  {
        console.warn('Error in SSR, serving for direct CSR');
        res.sendFile('index.html', { root: './src' });
        return false;
    }

    Zone.current.fork({ name: 'CSR fallback', onHandleError }).run(() => {
        res.render('index', {
            req,
            res,
            // time: true, // use this to determine what part of your app is slow only in development
            preboot: false,
            baseUrl: '/',
            requestUrl: req.originalUrl,
            originUrl: `http://localhost:${ app.get('port') }`
        });
    });
}

// API CRUD ////////////////////////////////////////////////////////////////////
/**
 * Get Featured categories
 */
app.get('/api/home', (req, res) => {
    errorCheck(featuredCategorie(), res, 'Categories data');
    res.send(featuredCategorie());
});

/**
 * Get Category cards
 */
app.get('/api/category/:id', (req, res) => {
    errorCheck(entityCard(), res, 'Entity card data');
    res.send(entityCard());
});

/**
 * Get Entity meta
 */
app.get('/api/entity/:id/meta', (req, res) => {
    errorCheck(entityMeta(), res, 'Entity meta');
    res.send(entityMeta());
});

/**
 * Get Entity category rankings
 */
app.get('/api/entity/:id/rankings', (req, res) => {
    errorCheck(entityRankings(), res, 'Entity rankings');
    res.send(entityRankings());
});

/**
 * Get Entity related entity tags
 */
app.get('/api/entity/:id/tags', (req, res) => {
    errorCheck(entityRelatedTags(), res, 'Entity related tags');
    res.send(entityRelatedTags());
});

/**
 * Get Entity tag cloud
 */
app.get('/api/entity/:id/cloud', (req, res) => {
    errorCheck(entityTagCloud(), res, 'Entity tag cloud');
    res.send(entityTagCloud());
});

/**
 * Get Entity news snippets
 */
app.get('/api/entity/:id/news', (req, res) => {
    errorCheck(news(), res, 'Related news');
    res.send(news());
});

// View Routes /////////////////////////////////////////////////////////////////
/**
 * use universal for specific routes
 */
routes.forEach(route => {
    console.log('route', route)
    app.get(`/${route}`, ngApp);
    app.get(`/${route}/*`, ngApp);
});

app.get('/', function(req, res) {
    console.log('\nrootPATH')
    return res.redirect('/wiki');
});

// app.get('*', function(req, res) {
//     console.log('\nanyPATH')
//     res.setHeader('Content-Type', 'application/json');
//     var pojo = { status: 404, message: 'No Content' };
//     var json = JSON.stringify(pojo, null, 2);
//     res.status(404).send(json);
// });

const errorCheck = (data, res, text) => {
    if (!data || isEmpty(data)) returnError(res, `No ${text} found`);
};

const returnError = (res, msg) => res.status(404).json({ message: msg });

// Server
let server = app.listen(app.get('port'), () => {
    console.log(`\n Listening on: http://localhost:${server.address().port}`);
});