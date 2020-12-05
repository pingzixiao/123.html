npm config get registry
npm config set registry https://registry.npm.taobao.org

npm install -g cnpm --registry=https://registry.npm.taobao.org

install two things globally
1、webpack Core module
2、webpack-cli Command line tool

npm -i webpack webpack-cli -g  // Global installation
npm -i webpack webpack-cli -D  // Local installation
npx webpack -v
npx webpack-cli -v
Or install webpack in this project,--save-dev can be abbreviated as -D

PS:The official recommendation is to use local installation,so that if
there are multiple versions,it will not cause conflicts
PS:For local installation,you can only use the webpack command in this
project,and the npx command is required

