const { MongoClient } = require('mongodb');

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const clint = await MongoClient.connect(
      'mongodb+srv://AmrGuaily:zay58RiojeVteAT5@cluster0.9nmhkfh.mongodb.net/?retryWrites=true&w=majority'
    );

    const collection = clint.db('meetups').collection('meetups');

    const result = await collection.insertOne(data);

    // To close the database collection once we done
    clint.close();

    res.status(201).json({ message: 'Meetup Inserted!' });
  }
}

export default handler;
