#!/bin/bash
sleep 1
mongoimport --host mongodb --db camelhome --collection Auth --file /src/data/Auth.json --jsonArray
sleep 1
mongoimport --host mongodb --db camelhome --collection Device --file /src/data/Device.json --jsonArray
sleep 1
mongoimport --host mongodb --db camelhome --collection StatusDevice --file /src/data/StatusDevice.json --jsonArray
sleep 1