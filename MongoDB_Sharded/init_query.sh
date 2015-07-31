#!/bin/bash

service mongod stop

nohup mongos --configdb mongo-config1.localdomain:27019,mongo-config2.localdomain:27019,mongo-config3.localdomain:27019 &
