// 'use strict'

const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

var port = process.env.API_PORT || 8080;

app.use(express.static(path.join(__dirname, 'build')));

// app.get('/ping', function (req, res) {
//  return res.send('pong');
// });

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// app.listen(process.env.PORT || 8080);

app.listen(port, function() {
  console.log(`api running on port ${port}`);
});

// const express = require('express');
// const path = require('path');
// const app = express();

// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// app.listen(9000);

// const handler = require('serve-handler');
// const http = require('http');

// const server = http.createServer((request, response) => {
//   // You pass two more arguments for config and middleware
//   // More details here: https://github.com/zeit/serve-handler#options
//   return handler(request, response);
// })

// server.listen(3000, () => {
//   console.log('Running at http://localhost:3000');
// });

//  //server.js
// 'use strict'

// //first we import our dependencies...
// var express = require('express');
// var ReactDOMServer = require('react-dom/server');
// var ReactRouter = require('react-router');
// var routes = require('./src/routes.js');

// var Landing = require('./components/Landing');
// var About = require('./components/About');
// var Contact = require('./components/Contact');
// var GettingAround = require('./components/GettingAround');
// var News = require('./components/News');
// var Navbar = require('./components/Navbar');
// var Footer = require('./components/Footer');


// //and create our instances
// var app = express();
// var router = express.Router();

// //set our port to either a predetermined port number if you have set it up, or 3001
// var port = process.env.API_PORT || 3001;

// //To prevent errors from Cross Origin Resource Sharing, we will set our headers to allow CORS with middleware like so:
// app.use(function(req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Credentials', 'true');
//   res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

//   //and remove cacheing so we get the most recent comments
//   res.setHeader('Cache-Control', 'no-cache');
//   next();
// });

// // app.use('/api', router);

// // sitesRoutes(router);
// // trustsRoutes(router);

// app.get('/*', function (req, res) {
//    res.sendFile(path.join(__dirname, 'build', 'index.html'));
//  });

// // router.get('*', function(request, response) {
// //     var props = { title: 'Universal React' };
// //     ReactRouter.match({
// //         routes: (
// //             <ReactRouter.Router history={ReactRouter.browserHistory}>

// //                 <ReactRouter.Route
// //                   exact path='/ltrain/about'
// //                   component={() => <About />}
// //                 >
// //                 </ReactRouter.Route>

// //                 <ReactRouter.Route
// //                   exact path={routes.CONTACT}
// //                   component={() => <Contact />}
// //                 >
// //                 </ReactRouter.Route>

// //                 <ReactRouter.Route
// //                   exact path={routes.NEWS}
// //                   component={() => <News />}
// //                 >
// //                 </ReactRouter.Route>

// //                 <ReactRouter.Route
// //                   exact path={routes.GETTINGAROUND}
// //                   component={() => <GettingAround />}
// //                 >
// //                 </ReactRouter.Route>

// //             </ReactRouter.Router>
// //         ),
// //         location: request.url
// //     }, function(error, redirectLocation, renderProps) {
// //         if (renderProps) {
// //             var html = ReactDOMServer.renderToString(
// //                 <ReactRouter.RouterContext {...renderProps}
// //                     createElement={function(Component, renderProps) {
// //                         return <Component {...renderProps} {...props} />;
// //                     }}
// //                 />
// //             );
// //             response.send(html);
// //         } else {
// //             response.status(404).send('Not Found, Sucka!');
// //         }
// //     });
// // })


// //starts the server and listens for requests
// app.listen(port, function() {
//   console.log(`api running on port ${port}`);
// });
