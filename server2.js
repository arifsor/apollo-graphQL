const express = require('express');
const bodyParser  = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');

const myGraphQLSchema = require('./schema'); // ... define or import your schema here!
const PORT = 3000;

const app = express();

// bodyParser is needed just for POST.
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: myGraphQLSchema }));
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' })); // if you want GraphiQL enabled

app.listen(PORT);