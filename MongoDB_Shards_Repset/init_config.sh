#!/bin/bash

mkdir /mongo-metadata

nohup mongod --configsvr --dbpath /mongo-metadata --port 27019 &
