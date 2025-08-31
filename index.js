const fs = require('fs')
const { Command } = require('commander');
const program = new Command();

program
  .name('counter')
  .description('CLI to do file based tasks')
  .version('0.8.0');

program.command('count_word')
  .description('count word in the line')
  .argument('<file>', 'string to split')
  .action((file) => {
    fs.readFile(file,'utf-8',(err,data)=>{
      if(err) console.log(err);
      else{
        const line = data.split(' ').length
        console.log(`There are total ${line} lines in ${file}`) 
    }
    })
  });