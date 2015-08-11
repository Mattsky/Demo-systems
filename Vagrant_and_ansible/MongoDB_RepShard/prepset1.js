serv = connect("mongo-data-1-1.localdomain:27017/config")

rs.add("mongo-data-1-1.localdomain:27017")
rs.add("mongo-data-1-2.localdomain:27017")
rs.add("mongo-data-1-3.localdomain:27017")
