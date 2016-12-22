import angular from 'angular';
import 'angular-ui-router';

import { routerConfig } from './routes';

angular
  .module('app', ['ui.router'])
  .config(routerConfig)
