# generator-nut-cheese [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> generate scaffold for build react project


## Installation

First, install [Yeoman](http://yeoman.io) and generator-nut-cheese using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-nut-cheese
```

Then generate your new project:

```bash
yo generator-nut-cheese
```

## 逻辑
 包含 *main generator*, *fe generator*, *be generator*。

#### main generator

包含 *README*, *package.json*, 一些编辑器约定文件(.editorconfig), *.gitignore*, *lint文件*, *travis.yml/gitlab-ci.yml*, *babel*

### fe generator

生成 `react`, `webpack`, `redux` 系列文件，同时包含test文件

### be generator

生成 `express`后台，同时结合 `webpack-dev-middleware` 托管前端并提供接口。

#### prompting

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

## License

MIT © [mrkou47](kbscript.me)


[npm-image]: https://badge.fury.io/js/generator-nut-cheese.svg
[npm-url]: https://npmjs.org/package/generator-nut-cheese
[travis-image]: https://travis-ci.org/nut-cheese/generator-nut-cheese.svg?branch=master
[travis-url]: https://travis-ci.org/nut-cheese/generator-nut-cheese
[daviddm-image]: https://david-dm.org/nut-cheese/generator-nut-cheese.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/nut-cheese/generator-nut-cheese
