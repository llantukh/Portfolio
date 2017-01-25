function routerConfig ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html',
      controller: 'homeController as home'
    })
    .state('root.home', {
      url: '/',
      templateUrl: 'templates/home.tpl.html',
    })

    $urlRouterProvider.otherwise('/');
}

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
export { routerConfig };
