import angular from 'angular';
import 'angular-ui-router';

import { routerConfig } from './routes';
import { homeController } from "./controllers/home.js";
import { allProjects} from './projectArray.js'

angular
  .module('app', ['ui.router'])
  .config(routerConfig)
  .controller('homeController', homeController)
  .constant('allProjects', allProjects)
