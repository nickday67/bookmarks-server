require( 'dotenv' ).config();
const express = require( 'express' );
const cors = require( 'cors' );
const helmet = require( 'helmet' );
const morgan = require( 'morgan' );
const { NODE_ENV } = require( './config' );
const errorHandler = require( './errorHandler' );
const validateBearerToken = require('./validate-bearer-token');
const bookmarksRouter = require( './bookmarksRouter' );

const app = express();

app.use( morgan( ( NODE_ENV === 'production' ) 
  ? 'tiny' 
  : 'dev', 
{ skip : () => NODE_ENV === 'test' }
) );

app.use( helmet() );
app.use( cors() );
app.use( tokenAuth );
app.use( '/api', bookmarksRouter );

app.get('/', (req, res) => {
  res.send('Hello, World!')
})

app.use( errorHandler );

module.exports = app;