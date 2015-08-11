db = connect("mongo-query1.localdomain:27017/test_db")

sh.addShard( "testset1/mongo-data-1-1.localdomain:27017,mongo-data-1-2.localdomain:27017,mongo-data-1-3.localdomain:27017" )
sh.addShard( "testset2/mongo-data-2-1.localdomain:27017,mongo-data-2-2.localdomain:27017,mongo-data-2-3.localdomain:27017" )

sh.enableSharding("test_db")

db.test_collection.ensureIndex( { _id : "hashed" } )

sh.shardCollection("test_db.test_collection", { "_id": "hashed" } )

for (var i = 1; i <= 500; i++) db.test_collection.insert( { x : i } )
