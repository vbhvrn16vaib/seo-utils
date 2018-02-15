var cheerio = require('cheerio');
var fs = require('fs');


function Main() {
    this.rules = [];
    this.data = {};
    this.output = [];
}

//add chain of rules
Main.prototype.addRule = function(rule) {
    this.rules.push(rule);
}

//Read from the file
Main.prototype.readFromFile = function(filePath){
  try{
      if(filePath){
        this.data = fs.readFileSync(filePath,'utf8');
    }else{
        this.data = "<html><head><meta name='descriptions'></head><body><h1/><h1/><strong/><strong/><strong/><img/><img alt='test'/></body></html>";
  }
  console.log(this.data);
  }catch(e){
    console.log("Error in reading the file!!");
  }
}

//function to apply all rules defined by the users
Main.prototype.execute = function(){
  //Collect output from each rule
  var output = [];
  var processedData = cheerio.load(this.data);
  var td = [];
  console.log(JSON.stringify(processedData));
  if(this.rules.length > 0) {
        var data = [];
        this.rules.forEach(function(rule) {
            rule.setData(processedData);
            td.push(rule.apply());
        });
    }
    this.output = td;
}

//Write the file to console or file
Main.prototype.printOnConsole = function(){
  console.log(this.output.join(""));
}

Main.prototype.writeToFile = function(filePath){
  fs.writeFile(filePath, this.output, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("Successfully written to the file!!");
    });
}

module.exports = { Main: Main};
