(function () {
    'use strict';
    // 1. Module definieren
    angular.module('myApp', ['ngRoute'])
        .config(moduleConfig);

    // 2. Inject dependencies
    moduleConfig.$inject = ['$routeProvider'];

    // 3. Routes configureren
    function moduleConfig($routeProvider) {
        $routeProvider.when('/', {
			templateUrl: 'views/login.html',
            //controller: 'loginController',
            //controllerAs: 'loginCtrl'
        })
            .when('/login', {
                templateUrl: 'views/login.html',
                //controller: 'loginController',
                //controllerAs: 'loginCtrl'
            })
			.when('/customerSelection', {
                templateUrl: 'views/customerSelection.html',
                //controller: 'customerSelectionController',
                //controllerAs: 'customerSelectionCtrl'
            })
			.when('/dashboard', {
                templateUrl: 'views/dashboardLanding.html',
                //controller: 'dashboardController',
                //controllerAs: 'dashboardCtrl'
            })
            .otherwise({
				//temporary
                redirectTo: '/'
				//redirectTo: 'views/404.html'
            });
    }
})();