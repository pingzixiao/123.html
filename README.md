```
https://www.bilibili.com/video/BV1SC4y1W7Xm?p=3
```
###### Just pack the entry file,and the dependent files will be automatically merged
```
webpack ./02/src/index.js -o ./02/dist/bundle.js --mode=production
production Represents production mode,compressed into one line.
```

###### Do this during development
```
webpack ./02/src/index.js -o ./02/dist/bundle.js --mode=development
development Represents development mode
```

###### Configuration file
```
Create a package.json file,configure the scripts attribute to deploy the generation path.
npm init -y

add sub-attributes in the scripts attribute: build,the attributes are as follows
"build": "webpack ./02/src/index.js -o ./02/dist/bundle.js --mode=development"
```

###### Configuration file packaging
```
if it is simple packaging,package.json is okay,when the parameters become more complex and difficult.
webpack provides a webpack.config.json configuration file to solve this problem.
Since our learning directory is 01,02,it can be directly stored in a subdirectory.
In otherwords,the configuration file does not have to exist in the root directory,you can adjust it according to your own directory structure.
```
