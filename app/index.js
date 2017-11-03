'use stricts';

const Generator = require('yeoman-generator');
const path = require('path');
const chalk = require('chalk');
const mkdirp = require('mkdirp');
const chalkRainbow = require('chalk-rainbow');

class nutCheeseGenerator extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.answer = {};

    this.argument('appname', { type: String, required: false });

    this.option('default');

    this.log(args, opts);

    this.appname = this.options.appname || '';

    this.log(this.config)
  }

  initializing() {}

  // 用户交互
  prompting() {
    this.log('prompting');
    const questions = [{
      type: 'confirm',
      name: 'reduxFlag',
      message: 'Would you like to use redux?'
    }];
    const appnameQuestion = {
      type: 'input',
      name: 'projectName',
      message: "What's your project name?"
    };
    if (this.options.default) {
      this.answer.reduxFlag = false;
      this.answer.immutableFlag = false;
      this.answer.domPluginFlag = '';
      this.answer.expressFlag = false;
      if (!this.appname) {
        return this.prompt([appnameQuestion]).then(answer => {
          this.appname = answer.projectName;
        })
      }
      return;
    }
    if (!this.options.appname) {
      questions.unshift(appnameQuestion);
    }
    return this.prompt(questions)
      .then(answer => {
        this.appname = answer.projectName;
        this.answer.reduxFlag = answer.reduxFlag;
        this.log(answer);
        if (answer.reduxFlag) {
          return this.prompt([{
            type: 'confirm',
            name: 'immutableFlag',
            message: 'Would you like to use immutable?'
          }]).then(immutableFlag => this.answer.immutableFlag = immutableFlag);
        }
      })
      .then(() => {
        return this.prompt([{
            type: 'list',
            name: 'domPluginFlag',
            message: 'Would you like to use jQuery or zepto?',
            choices: ['jQuery', 'zepto', "i don't need this"]
          },
          {
            type: 'confirm',
            name: 'expressFlag',
            message: 'Whether you need to use express at the same time?'
          }
        ]).then(finalAnswer => {
          this.answer.domPluginFlag = finalAnswer.domPluginFlag;
          this.answer.expressFlag = finalAnswer.expressFlag;
          this.log('user answers', this.answer);
        });
      });
  }

  default () {
    const basePathName = path.basename(this.destinationPath());
    if (basePathName !== this.appname) {
      mkdirp(this.appname);
      this.destinationRoot(this.destinationPath(this.appname));
    }
    this.composeWith(require.resolve('../subgenerators/fegenerator'))
    if (this.answer.expressFlag) {
      this.composeWith(require.resolve('../subgenerators/begenerator'))
    }
  }



  // 处理文件
  writing() {
    this.log(chalk.yellow.bold('Main generator is writing config files...'));
    this._generatePackageJson();
    this.fs.copy(
      this.templatePath('_.gitignore'),
      this.destinationPath('.gitignore')
    );
    this.fs.copy(
      this.templatePath('_.eslintrc.json'),
      this.destinationPath('.eslintrc.json')
    );
    this.fs.copy(
      this.templatePath('_.editorconfig'),
      this.destinationPath('.editorconfig')
    );
    this.fs.copyTpl(
      this.templatePath('_README.md'),
      this.destinationPath('README.md'), { name: this.appname }
    );
    this.log(chalk.green.bold('done!'));
  }

  _generatePackageJson() {
    const answer = this.answer;
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'), { name: this.appname, expressFlag: answer.expressFlag }
    );
  }


  // 安装文件
  install() {
    this.log('main generator install npm package')
      // this.npmInstall();
  }

  end() {
    this.log(chalkRainbow('All the work has been done, have fun!'));
  }
}

module.exports = nutCheeseGenerator;