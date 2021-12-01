// api/new-meetup
const { MongoClient } = require("mongodb");

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://dbuser:dbuser@cluster0.efj9p.mongodb.net/meetupDB?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupCollection = db.collection("meetups");
    const result = await meetupCollection.insertOne(data);
    client.close();
    res.status(201).json({ message: "meetup inserted", id: result });
  }
}

export default handler;
