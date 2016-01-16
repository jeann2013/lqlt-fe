#!/bin/sh

if [ ! -d "node-v0.12.7-linux-x64" ]; then
  wget https://nodejs.org/download/release/v0.12.7/node-v0.12.7-linux-x64.tar.gz
  tar xvzf node-v0.12.7-linux-x64.tar.gz
  echo PATH="$PATH:~/node-v0.12.7-linux-x64/bin" >> /home/vagrant/.bashrc
fi

sudo apt-get install -y git

cd /home/vagrant/lqlt-frontend
sudo /home/vagrant/node-v0.12.7-linux-x64/bin/npm install
sudo /home/vagrant/node-v0.12.7-linux-x64/bin/npm install -g bower
sudo /home/vagrant/node-v0.12.7-linux-x64/bin/bower install
sudo /home/vagrant/node-v0.12.7-linux-x64/bin/npm install -g gulp

sudo apt-get install -y openjdk-6-jdk
sudo apt-get install -y nginx 

