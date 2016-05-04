/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app = angular.module('app', ['ui.router', 'ngAnimate','controllers']);
app.constant('Config',{
    
});

var ctrls = angular.module('controllers', []);

console.log('angular configured');

app.config(function ($stateProvider, $urlRouterProvider,$locationProvider) {
    $stateProvider.
            state('animations', {
                url: '/animations',
                templateUrl: 'animations.html',
                controller: 'animationsCtrl',
                data: {displayName: 'Animations'}
            }).
            state('forms', {
                url: '/forms',
                templateUrl: 'forms.html',
                controller: 'formsCtrl',
                data: {displayName: 'Forms'}
            });

//    $urlRouterProvider.when('/profile','/posts/jokes');
    $urlRouterProvider.otherwise('/animations');

//      $locationProvider.html5Mode(true);
});
