function routerConfig ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      templateUrl: 'templates/home.tpl.html'
      // controller: 'homeController as home'
    })

    $urlRouterProvider.otherwise('/');
}

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
export { routerConfig };
