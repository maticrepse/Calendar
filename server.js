import express from "express";
import GraphQLHTTP from "express-graphql";
import Schema from "./schema";
import { graphql } from "graphql";
import { introspectionQuery, printSchema } from "graphql/utilities";
import fs from "fs";

let app = express();
let schema = Schema();
app.use("/graphql", GraphQLHTTP({
   schema: schema,
   pretty: true,
   graphiql: true
}));
app.use(express.static("public"));

app.listen(3000);

console.log("Listening on port 3000");
