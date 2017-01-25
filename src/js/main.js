import angular from 'angular';
import 'angular-ui-router';
// import _ from 'lodash';

import { routerConfig } from './routes';
import { homeController } from "./controllers/home.js";
// import { projectsController } from "./controllers/projects";
import { allProjects} from './projectArray.js'

angular
  .module('app', ['ui.router'])
  .config(routerConfig)
  .controller('homeController', homeController)
  // .controller('projectsController', projectsController)
  .constant('allProjects', allProjects)
