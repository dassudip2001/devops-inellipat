const express = require("express");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const colors = require("colors");
const database = require("./config/db");
const port = process.env.APP_PORT || 4000;
const app = express();

database();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.ENVERONMENT === "development",
  })
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
