serv = connect("mongo-data1-1.localdomain:27017/config")

rs.initiate()

rs.add("mongo-data1-1.localdomain:27017")
rs.add("mongo-data1-2.localdomain:27017")
rs.add("mongo-data1-3.localdomain:27017")
