db = connect("mongo-query1.localdomain:27017/test_db")

sh.addShard( "mongo-shard1.localdomain:27017" )
sh.addShard( "mongo-shard2.localdomain:27017" )
sh.addShard( "mongo-shard3.localdomain:27017" )
sh.addShard( "mongo-shard4.localdomain:27017" )

sh.enableSharding("test_db")

db.test_collection.ensureIndex( { _id : "hashed" } )

sh.shardCollection("test_db.test_collection", { "_id": "hashed" } )

for (var i = 1; i <= 500; i++) db.test_collection.insert( { x : i } )
