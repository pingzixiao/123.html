###### Problem demand
```
Since the code may have syntax that is not supported by browsers such as  CommonJS,it needs to be packaged to run each time
But in fact it can't monitor and refresh from time to time The official webpack-dev-server tool is provided to solve this problem
   1、Support HTTP service access：localhost, 127.0.0.1
   2、Refresh the webpage from time to time and preview the changes.
   3、Support Source Map
Local installation -D(--save-dev),only local installation is sufficient,global installation is not required
installation：npm i webpack-dev-server -D  
Run the server：webpack-dev-server
if the installation fails,you can delete the package：npm uninstall webpack-dev-server -D
Specify version installation：cnpm install webpack-dev-server@2.9.7
```

###### Service needs to be configured
```
Configure some of the most basic parameters in webpack.config.js for easy operation
devServer: {
    publicPath: '/dist', // Access path
    port: 3000,          // Independent port,the agreed port 3000
    stats: 'minimal'     // Mini service startup information.
}
PS：You can delete the dist directory locally and start devServer before restoring the packaging to test the effect
PS: At this time,we found that there is no need to package to the local,it is automatically packaged to the memory when previewing the mode.
PS:in other words,in the debugging phasse,you can use devServer,complete,and finally package.
```