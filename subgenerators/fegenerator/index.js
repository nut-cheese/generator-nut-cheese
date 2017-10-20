const path = require('path');
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
    this.fs.copy(
      this.templatePath('src'),
      this.destinationPath('src')
    );
    this.fs.copy(
      this.templatePath('webpack'),
      this.destinationPath('webpack')
    );
    this.fs.copy(
      this.templatePath('template'),
      this.destinationPath('template')
    );
    this.fs.copy(
      this.templatePath('.babelrc'),
      this.destinationPath('.babelrc')
    );
    this.fs.copy(
      this.templatePath('postcss.config.js'),
      this.destinationPath('postcss.config.js')
    );
    this.log(chalk.green.bold('done!'));
  }

  installing() {
    this.log('fe generator start installing');
  }
}

module.exports = FeGenerator;