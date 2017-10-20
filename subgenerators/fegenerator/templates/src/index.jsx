import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router } from 'react-router';

import routerConfig from './router.config';

import './style/core.scss';

const Container = <Router history={browserHistory} routes={routerConfig} />;

ReactDOM.render(Container, document.getElementById('app'));