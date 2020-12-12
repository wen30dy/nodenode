const mongodb=require('mongodb');
const MongoClient=mongodb.MongoClient;

let _db;

const mongoConnect=callback=>{
  MongoClient.connect(
    'mongodb://root:root@cluster0-shard-00-00.mqdov.mongodb.net:27017,cluster0-shard-00-01.mqdov.mongodb.net:27017,cluster0-shard-00-02.mqdov.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-38958t-shard-0&authSource=admin&retryWrites=true&w=majority'
  )
  .then(client=>{
    console.log("connected");
    _db=client.db();
    callback();
  })
  .catch(err=>{
    console.log(err);
    throw err;
  });
};

const getDb=()=>{
  if(_db){
    return _db;
  }
  throw 'no database found';
};

exports.mongoConnect=mongoConnect;
exports.getDb=getDb;

