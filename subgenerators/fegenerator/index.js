const path = require('path');
const fs = require('fs');
const chalk = require('chalk');

const Generator = require('yeoman-generator');

class FeGenerator extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  initializing() {
    this.log('start fe generator, and i will generate react and webpack scaffold');
  }

  prompting() {
    
  }

  writing() {
    this.log(chalk.yellow.bold('fe generator is generating react files...'));
    fs.readdir(path.join(__dirname, 'templates'), {}, (err, files) => {
      if (files[0] == '.DS_Store') files.splice(0, 1);
      files.forEach((file) => {
        this.fs.copy(
          this.templatePath(file),
          this.destinationPath(file)
        );
      });
    });
    this.log(chalk.green.bold('generate frontEnd files done!'));
  }

  installing() {
    this.log('fe generator start installing');
  }
}

module.exports = FeGenerator;