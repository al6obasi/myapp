    angular.module('App', [
        'ngRoute'
        ])
    .config(function($routeProvider, $httpProvider) {
        $routeProvider
            .when('/', {
                templateUrl : 'app/pages/home.html',
                controller  : 'mainController'
            })

            .when('/about', {
                templateUrl : 'app/pages/about.html',
                controller  : 'aboutController'
            })

            .when('/contact', {
                templateUrl : 'app/pages/contact.html',
                controller  : 'contactController'
            });
    })
    .controller('mainController', function($scope) {
        $scope.friends =  [
        {
            name:'sajeda',
            desc:"   Software   Devolper"
        },
        {
            name:'abdulazeez',
            desc:"   Software  Devolper"
        },
        {
            name:'muhaned',
            desc:"   Ping pong player "},
    ]

    })

    .controller('aboutController', function($scope) {
        $scope.message = 'hello';
    })

    .controller('contactController', function($scope) {
         
    })




