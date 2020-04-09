var fs = require('fs');
var files = fs.readdirSync('./src/scss/components/');
files.forEach((file)=>{
    componentName=file.split(".")[0].split("_")[1];

      arquivo="      // Carregar configurações\n"
    arquivo+='@import "../base";\n'
    arquivo+='@import "../tokens";\n'
    // arquivo+='@import "../utilities/normalize";\n'
    arquivo+='@import "../components/'+componentName+'";'




      

    

      fs.writeFile("./src/scss/temp/"+componentName+".scss", arquivo, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
    

})
