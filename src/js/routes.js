function routerConfig ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      templateUrl: 'templates/home.tpl.html',
      controller: 'homeController as home'
    })
    .state('root.projects', {
      url: '/projects',
      templateUrl: 'templates/projects.tpl.html',
      controller: 'projectsController as projects'
    })
    .state('root.projects.single', {
      url: '/single/:name',
      templateUrl: 'templates/single.tpl.html',
      controller: 'singleController as single'
    })
    .state('root.resume', {
      url: '/resume',
      templateUrl: 'templates/resume.tpl.html'
    })
    .state('root.contact', {
      url: '/contact',
      templateUrl: 'templates/contact.tpl.html'
    })

    $urlRouterProvider.otherwise('/');
}

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
export { routerConfig };
