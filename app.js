const express = require("express");
const app = express();

app.use(express.static("public"));

const { MongoClient } = require("mongodb");

async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}

async function main() {
  /**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
   */
  const uri =
    "mongodb+srv://dab362:83l0qu3ntD1n0saur@cluster0.fl26cip.mongodb.net/?retryWrites=true&w=majority";

  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Make the appropriate DB calls
    await listDatabases(client);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/characterA", (req, res) => {
  res.sendFile(__dirname + "/views/characterA.html");
});

app.get("/characterB", (req, res) => {
  res.sendFile(__dirname + "/views/characterB.html");
});

app.get("/characterC", (req, res) => {
  res.sendFile(__dirname + "/views/characterC.html");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
