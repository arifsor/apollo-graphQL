const express = require('express')
const graphqlHTTP = require('express-graphql');
const schema = require('./schema')
const app = express();

const PORT = 4000;

app.use('/graphql' , graphqlHTTP({
    graphql: true,
    schema
})); 
app.listen(PORT);
console.log('Listing port '+ PORT);