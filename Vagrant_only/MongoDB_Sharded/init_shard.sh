#!/bin/bash

sed -i -e 's/bind_ip/\#bind_ip/' /etc/mongod.conf

chkconfig mongod on

service mongod start
