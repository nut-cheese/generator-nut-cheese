# generator-my-own-generator [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> haha

## Installation

First, install [Yeoman](http://yeoman.io) and generator-my-own-generator using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-my-own-generator
```

Then generate your new project:

```bash
yo my-own-generator
```

## 逻辑
 包含 *main generator*, *fe generator*, *be generator*。

#### main generator

包含 *README*, *package.json*, 一些编辑器约定文件(.editorconfig), *.gitignore*, *lint文件*, *travis.yml/gitlab-ci.yml*, *babel*

### fe generator

生成 `react`, `webpack`, `redux` 系列文件，同时包含test文件

### be generator

生成 `express`后台，同时结合 `webpack-dev-middleware` 托管前端并提供接口。

#### prompting

```shell
What's your project name?

Would you like to use redux(y/N)?

Would you like to use immutable(y/N)?

Would you like to use jQuery or zepto?
[x] jQuery
[x] zepto
[x] i don't need this

Whether you need to use express at the same time(y/N)? 
```


## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [mrkou47](kbscript.me)


[npm-image]: https://badge.fury.io/js/generator-my-own-generator.svg
[npm-url]: https://npmjs.org/package/generator-my-own-generator
[travis-image]: https://travis-ci.org/nut-cheese/generator-my-own-generator.svg?branch=master
[travis-url]: https://travis-ci.org/nut-cheese/generator-my-own-generator
[daviddm-image]: https://david-dm.org/nut-cheese/generator-my-own-generator.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/nut-cheese/generator-my-own-generator
