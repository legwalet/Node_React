#!/bin/bash
sudo apt-get install -y npm
cd /home/test-app-server
sudo npm install express
sudo node index.js > /dev/null
