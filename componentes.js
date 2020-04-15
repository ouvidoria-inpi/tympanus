var fs = require('fs');
const path = require('path');
var dir="./dist/scss/temp"
var files = fs.readdirSync('./src/scss/components/');
var sass = require('node-sass');
let arquivo="";


if (!fs.existsSync("./dist")){
    fs.mkdirSync("./dist");
}
if (!fs.existsSync("./dist/css/")){
    fs.mkdirSync("./dist/css");
}
if (!fs.existsSync("./dist/css/componente/")){
    fs.mkdirSync("./dist/css/componente");
}

files.forEach((file)=>{
    componentName=file.split(".")[0].split("_")[1];
    if(componentName){
        createCSSComponente(componentName);
    }
})

async  function createCSSComponente(componentName){
    arquivo="      // Precisa do import dos Tokens\n";
    arquivo+='@import "./src/scss/base";\n';
    arquivo+='@import "./src/scss/components/'+componentName+'";';
    const result= await sass.renderSync({
        data: arquivo,
        outputStyle: 'expanded',
    });
    const dist_output=path.resolve(__dirname, 'dist', 'css', 'componente')
    fs.writeFile(dist_output+"/"+componentName+".css", result.css.toString(), function (err) {
        if (err) throw err;
    });
}
console.log("CSS dos Componentes Criados");





