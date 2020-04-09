var fs = require('fs');
var dir="./dist/scss/temp"
var files = fs.readdirSync('./src/scss/components/');

if (!fs.existsSync("./dist/scss")){
    fs.mkdirSync("./dist/scss");
}
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}


files.forEach((file)=>{
    componentName=file.split(".")[0].split("_")[1];
    arquivo="      // Precisa do import dos Tokens\n"
    arquivo+='@import "../base";\n'
    if(componentName){
      arquivo+='@import "../components/'+componentName+'";';
      try{
            fs.writeFile(dir+"/"+componentName+".scss", arquivo, function (err) {
                if (err) throw err;
                
            });
            
        }catch(err){
            
        }
    }
    

})

console.log("CSS dos Componentes Criados");
