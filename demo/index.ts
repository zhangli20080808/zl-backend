const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'myProject';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documents');
  // 插入数据
  // const res = await collection.insertOne({ name: 'zl', age: 20 });
  // const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);

  // 查询数据 - find的时候返回的是一个基础的指针对象，而不是直接的结果
  // const res = await collection.findOne({ name: 'zl' });
  // const res = collection.find();
  // 使用 forEach
  // await res.forEach(doc => console.log(doc));
  // 使用 toArray
  // const result = await collection.find().toArray();
  // console.log(result);

  // 高级查询和逻辑

  // 更新数据
  // const res = await collection.updateOne(
  //   { a: 2 },
  //   { $set: { hobby: 'ball' } },
  // );

  // 删除文档数据
  // const res = await collection.deleteMany({ a: 1 });

  // 创建索引
  // const indexName = await collection.createIndex({ a: 2 });

  // console.log(res, 'res');
  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
