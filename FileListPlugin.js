
const path = require('path');
const fs = require('fs');
var sass = require('node-sass');
class FileListPlugin {
    apply(compiler) {
      // emit is asynchronous hook, tapping into it using tapAsync, you can use tapPromise/tap(synchronous) as well
      compiler.hooks.emit.tap('FileListPlugin', (compilation) => {
        // Create a header string for the generated file:
        var filelist = 'In this build:\n\n';
        
        
        
        console.log(path.resolve(__dirname, 'src', 'scss', 'components'));
        getFiles("");
        // Loop through all compiled assets,
        // adding a new line item for each filename.
        for (var filename in compilation.assets) {
            console.log(filename,"-----------------------------------");
          filelist += '- ' + filename + '\n';
        }
        
        // Insert this list into the webpack build as a new file asset:
        compilation.assets['filelist.md'] = {
          source: function() {
            return filelist;
          },
          size: function() {
            return filelist.length;
          }
        };
  
        
      });
    }
  }
  
  module.exports = FileListPlugin;







function getFiles(src){

if (!fs.existsSync("./dist")){
  fs.mkdirSync("./dist");
}
if (!fs.existsSync("./dist/css/")){
  fs.mkdirSync("./dist/css");
}
if (!fs.existsSync("./dist/css/components/")){
  fs.mkdirSync("./dist/css/components");
}


var files = fs.readdirSync(path.resolve(__dirname, 'src', 'scss', 'components'));

if (!fs.existsSync("./dist/scss")){
    fs.mkdirSync("./dist/scss");
}


files.forEach((file)=>{
    componentName=file.split(".")[0].split("_")[1];
    arquivo="      // Precisa do import dos Tokens\n"
    arquivo+='@import "../../../src/scss/base";\n'
    if(componentName){
      createCSSComponente(componentName);
    }
    

})
}



async  function createCSSComponente(componentName){
  arquivo+='@import "./src/scss/components/'+componentName+'";';
  
          
  
  const result= await sass.renderSync({
      data: arquivo,
      outputStyle: 'expanded',
      
    });
   const dist_output=path.resolve(__dirname, 'dist', 'css', 'components')
  fs.writeFile(dist_output+"/"+componentName+".css", result.css.toString(), function (err) {
      if (err) throw err;
      console.log("Criado "+componentName+".css");
      
  });
}

