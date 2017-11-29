// const path = require('path');
const Generator = require('yeoman-generator');

class BeGenerator extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  initializing() {
    this.log('start be generator');
  }

  prompting() {

  }

  writing() {
    this.log('be generator start writing');
  }

  installing() {
    this.log('be generator start installing');
  }
}

module.exports = BeGenerator;