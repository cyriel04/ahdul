const expressGraphQL = require("express-graphql");
const express = require("express");

const app = express();

app.use(
  "/graphql",
  expressGraphQL({
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("Lets go!!!");
});