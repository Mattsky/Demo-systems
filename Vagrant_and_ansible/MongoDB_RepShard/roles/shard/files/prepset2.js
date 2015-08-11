serv = connect("mongo-data-2-1.localdomain:27017/config")

rs.initiate()

rs.add("mongo-data-2-1.localdomain:27017")
rs.add("mongo-data-2-2.localdomain:27017")
rs.add("mongo-data-2-3.localdomain:27017")
