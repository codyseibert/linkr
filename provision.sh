# File: provision.sh
#!/bin/bash
curl -sL https://rpm.nodesource.com/setup_5.x | bash -
yum install -y nodejs rpmbuild
npm install -g grunt-cli bower
