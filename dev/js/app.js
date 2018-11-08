app = angular.module('Dorrasset', 
[
	'ngMaterial', 
	'ngAnimate', 
	'ngMessages',
	'ngSanitize',
	'ngCsv',
	'nvd3',
	'pascalprecht.translate',
	'ngStorage',
	'printThis',

	'tvRealtimeChart',

	'appConfig',

	'MainCtrl',
	'basicDialogCtrl',
]);

//@koala-append "appConfig.js";
//@koala-append "MainCtrl.js";
//@koala-append "basicDialogCtrl.js";