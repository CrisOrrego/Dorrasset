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

angular.module('appConfig', [])
.config(['$mdThemingProvider', '$mdIconProvider', '$mdThemingProvider', '$translateProvider', 
	function($mdThemingProvider, $mdIconProvider, $mdThemingProvider, $translateProvider){

		var icons = {
			'md-plus' 			: '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
			'md-close' 			: '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>',
			'md-arrow-back' 	: '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>',
			'md-apps' 			: '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g transform="translate(3, 3)"><circle cx="2" cy="2" r="2"></circle><circle cx="2" cy="9" r="2"></circle><circle cx="2" cy="16" r="2"></circle><circle cx="9" cy="2" r="2"></circle><circle cx="9" cy="9" r="2"></circle><circle cx="16" cy="2" r="2"></circle><circle cx="16" cy="9" r="2"></circle><circle cx="16" cy="16" r="2"></circle><circle cx="9" cy="16" r="2"></circle></g></svg>',
			'md-enter' 			: '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5h-2zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6z"/></svg>',
			'md-save' 			: '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></svg>',
			'md-delete' 		: '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
			'md-bars' 			: '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>',
			'md-more-v' 		: '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>',
			'md-search'			: '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
			'md-chevron-down' 	: '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
			'md-check'			: '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>',
			'md-edit'			: '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
			'md-settings'		: '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg>',
		};

		iconp = $mdIconProvider.defaultFontSet( 'fa' );

		angular.forEach(icons, function(icon, k) {
			iconp.icon(k, 'data:image/svg+xml, '+icon, 24);
		});

		$mdThemingProvider.definePalette('DorrAssetPallete', {
		  '50': 'f4f5ec',
		  '100': 'e4e7d1',
		  '200': 'd2d7b2',
		  '300': 'c0c793',
		  '400': 'b3bb7b',
		  '500': 'a5af64',
		  '600': '9da85c',
		  '700': '939f52',
		  '800': '8a9648',
		  '900': '798636',
		  'A100': 'f8ffd4',
		  'A200': 'efffa1',
		  'A400': 'e6ff6e',
		  'A700': 'e1ff54',
		  'contrastDefaultColor': 'light',
		  'contrastDarkColors': [
		    '50',
		    '100',
		    '200',
		    '300',
		    '400',
		    '500',
		    '600',
		    '700',
		    '800',
		    'A100',
		    'A200',
		    'A400',
		    'A700'
		  ],
		  'contrastLightColors': [
		    '900'
		  ]
		});

		$mdThemingProvider.theme('default')
			.primaryPalette('DorrAssetPallete');
			



  }
]);


angular.module('MainCtrl', [])
.controller('MainCtrl', ['$scope', '$rootScope', '$timeout', '$translate', '$mdDialog', '$localStorage', '$window', 
	function ($scope, $rootScope, $timeout, $translate, $mdDialog, $localStorage, $window) {
		
		Rs = $scope;
		var Ctrl = {};

		Rs.activateWidget = true;

		Rs.Symbols = {
			'USDMXN':  	{ id: 'USDMXN',  	title: 'U.S. Dollar / Mexican Peso', 	symbol: 'FX:USDMXN', 		interval: 'W', active: true },
			'FTSEMIB': 	{ id: 'FTSEMIB', 	title: 'FTSE MIB INDEX', 				symbol: 'MIL:FTSEMIB', 		interval: 'W', active: true },
			'BTPBUND': 	{ id: 'BTPBUND', 	title: 'SPREAD BTP-BUND', 				symbol: 'TVC:BTPBUND', 		interval: 'W', active: true },
			'COCOA':   	{ id: 'COCOA',   	title: 'COCOA FUTURES', 				symbol: 'ICEUSA_EOD:CC1!', 	interval: 'W', active: true },
			'COFFEE':   { id: 'COFFEE',   	title: 'COFFEE FUTURES', 				symbol: 'ICEUSA_EOD:KC1!', 	interval: 'W', active: true },
		};


		Rs.AccordionPages = [
			{ title: 'Global Macro', 		  									open: false, animate: false, url: 'pages/global-macro.html' },
			{ title: 'Austrian Economics', 		  								open: false, animate: false, url: 'pages/austrian-economics.html' },
			{ title: 'Austrian Vs. Keynsian (Austrian Business Cycle Theory)', 	open: false, animate: false, url: 'pages/austrian-vs-keynsian.html' },
			{ title: 'Kelly Criterion vs. VaR', 								open: false, animate: false, url: 'pages/kelly-criterion-vs-var.html' },
			{ title: 'Global Macro Allocation vs Traditional & Modern',  		open: false, animate: false, url: 'pages/global-macro-allocation.html' },
			{ title: 'Passive Management vs. Active Management',  				open: false, animate: false, url: 'pages/passive-vs-active-management.html' },
			{ title: 'Global Macro Performance Model',  						open: false, animate: false, url: 'pages/global-macro-performance-model.html' },
			{ title: 'Italy back in crisis focus',  							open: false, animate: false, url: 'pages/italy.html' },
			{ title: 'NAFTA is Now USMCA',  									open: false, animate: false, url: 'pages/nafta-usmca.html' },
			{ title: 'Cocoa & Coffee – Markets We Love',  						open: false, animate: false, url: 'pages/cocoa-coffee.html' },
			{ title: 'Investment Methodology',  				  				open: false, animate: false, url: 'pages/investment-methodology.html' },
			{ title: 'Landscape is Rapidly Shifting',  							open: false, animate: false, url: 'pages/landscape.html' },
			{ title: 'Investor Information',  									open: false, animate: false, url: 'pages/investor-info.html' },
			{ title: 'Legal Disclaimer',  										open: false, animate: false, url: 'pages/legal-disclaimer.html' },
		];

		Rs.openAccordionPage = (P) => {
			Rs.AccordionPages.forEach((Page) => {
				if(P.title == Page.title){
					Page.loaded = true;
					Page.open = !Page.open;

					if(!Page.open){
						Page.animate = false;
					}else{
						$timeout(() => {
							Page.animate = true;
							window.dispatchEvent(new Event('resize'));
						}, 300);
					};

				}else{
					//Page.animate = false;
				};
			});
		};
        


		//Drawdowns Area chart 
		Rs.blackAreaOps = {
			title: {
            	enable: true,
            	text: 'S&P 500 Historical Drawdowns: 1927-2016',
            	className: 'text-20px padding'
            },
            chart: {
                type: 'stackedAreaChart',
                height: 400,
                margin : {
                    top: 0,
                    right: 20,
                    bottom: 30,
                    left: 40
                },
                x: function(d){return d[0];},
                y: function(d){return d[1]/100;},
                useVoronoi: false,
                clipEdge: false,
                duration: 0,
                useInteractiveGuideline: false,
                showLegend: false,
                showControls: false,
                xAxis: {
                    showMaxMin: false,
                    tickFormat: function(d) {
                        return d3.time.format('%x')(new Date(d))
                    }
                },
                yAxis: {
                    tickFormat: function(d){
                        return d3.format(',.0%')(d);
                    }
                }
            }
        };

        Rs.drawdownData = [{
        	'key': 'Historical Drawdown',
        	'values': [ [1541462400000,-5.8758],[1538092800000,0],[1530230400000,0],[1522368000000,-1.2246],[1514505600000,0],[1506643200000,0],[1498780800000,0],[1490918400000,0],[1483056000000,0],[1475193600000,0],[1467244800000,0],[1459382400000,-0.3941],[1451520000000,-1.1582],[1443571200000,-7.1503],[1435622400000,-0.2311],[1427760000000,0],[1419984000000,0],[1412035200000,0],[1404086400000,0],[1396224000000,0],[1388448000000,0],[1380499200000,0],[1372377600000,0],[1364515200000,0],[1356912000000,-6.5864],[1348790400000,-5.6379],[1340928000000,-10.7803],[1333065600000,-7.7471],[1325203200000,-17.6285],[1317340800000,-25.8934],[1309392000000,-13.4998],[1301529600000,-13.16],[1293753600000,-17.6264],[1285804800000,-25.2528],[1277856000000,-32.4898],[1269993600000,-23.4037],[1262217600000,-26.9622],[1254268800000,-30.7627],[1246320000000,-39.7854],[1238457600000,-47.7407],[1230681600000,-40.8379],[1222732800000,-23.6048],[1214784000000,-16.1616],[1206921600000,-13.3646],[1199059200000,-3.8246],[1190937600000,0],[1183075200000,0],[1175212800000,-5.186],[1167350400000,-5.357],[1159488000000,-10.8591],[1151625600000,-15.2395],[1143763200000,-13.5963],[1135900800000,-16.7016],[1128038400000,-18.0016],[1120089600000,-20.5029],[1112227200000,-21.2194],[1104451200000,-19.129],[1096502400000,-25.6241],[1088553600000,-23.8722],[1080691200000,-24.8481],[1072828800000,-25.802],[1064880000000,-33.5394],[1056931200000,-34.9717],[1049068800000,-43.4011],[1041292800000,-41.2898],[1033344000000,-45.5962],[1025222400000,-33.9499],[1017360000000,-23.4351],[1009756800000,-23.3886],[1001635200000,-30.5382],[993772800000,-18.2946],[985910400000,-22.5714],[978048000000,-11.8979],[970185600000,-4.1419],[962323200000,-2.9348],[954460800000,0],[946598400000,0],[938649600000,-6.5564],[930700800000,0],[922838400000,0],[915062400000,0],[907113600000,-10.3039],[899164800000,0],[891302400000,0],[883526400000,0],[875577600000,0],[867628800000,0],[859766400000,0],[851990400000,0],[844041600000,0],[835920000000,0],[828057600000,0],[820195200000,0],[812332800000,0],[804470400000,0],[796608000000,0],[788745600000,-1.5393],[780883200000,-0.8061],[772934400000,-4.7551],[765072000000,-4.4335],[757296000000,0],[749347200000,0],[741398400000,-0.2524],[733536000000,0],[725760000000,0],[717811200000,0],[709862400000,-2.1458],[702000000000,-3.2127],[694137600000,0],[686188800000,0],[678067200000,-1.082],[670204800000,0],[662601600000,-7.7649],[654480000000,-14.5159],[646617600000,0],[638755200000,-3.8087],[630892800000,0],[623030400000,0],[615168000000,-1.1963],[607305600000,-8.3771],[599443200000,-13.706],[591580800000,-15.5113],[583632000000,-15.0172],[575769600000,-19.5569],[567907200000,-23.2265],[559958400000,0],[552009600000,0],[544147200000,0],[536371200000,-3.4564],[528422400000,-7.7818],[520473600000,0],[512611200000,0],[504835200000,0],[496886400000,-5.0925],[488764800000,0],[480902400000,0],[473299200000,-0.5175],[465177600000,-1.1956],[457315200000,-8.8811],[449452800000,-5.312],[441590400000,-1.8916],[433728000000,-1.2135],[425779200000,0],[417916800000,0],[410140800000,0],[402192000000,-11.4559],[394243200000,-19.4044],[386380800000,-17.6765],[378604800000,-9.8897],[370656000000,-14.5735],[362707200000,-3.5221],[354844800000,0],[347068800000,0],[339120000000,0],[331171200000,-3.2275],[323308800000,-13.5197],[315446400000,-8.5642],[307324800000,-7.3952],[299462400000,-12.8251],[291600000000,-13.9432],[283737600000,-18.5853],[275875200000,-13.1385],[268012800000,-19.0767],[260150400000,-24.4303],[252288000000,-19.4409],[244425600000,-18.2296],[236476800000,-14.8835],[228614400000,-16.6286],[220838400000,-8.9708],[212889600000,-10.8513],[204940800000,-11.6646],[197078400000,-12.9437],[189216000000,-23.6002],[181267200000,-28.9538],[173318400000,-19.3647],[165456000000,-29.3859],[157680000000,-41.9229],[149731200000,-46.1754],[141609600000,-27.1495],[133747200000,-20.3897],[126144000000,-17.3655],[118022400000,-8.1491],[110160000000,-11.6815],[102297600000,-5.5316],[94435200000,0],[86572800000,0],[78710400000,-0.056],[70848000000,0],[62985600000,-1.7042],[55036800000,-5.3149],[47088000000,-4.0054],[39225600000,-3.4181],[31449600000,-11.2748],[23500800000,-18.9197],[15552000000,-29.9827],[7689600000,-13.7011],[-86400000,-11.3615],[-8035200000,-10.3408],[-15984000000,-5.9214],[-23846400000,-2.2627],[-31622400000,0],[-39571200000,0],[-47692800000,0],[-55555200000,-6.7315],[-63417600000,-0.2482],[-71280000000,0],[-79142400000,-1.9366],[-87004800000,-2.4126],[-94867200000,-13.091],[-102729600000,-17.1698],[-110678400000,-8.3198],[-118540800000,-3.4621],[-126316800000,0],[-134265600000,0],[-142214400000,-2.3677],[-150076800000,0],[-157852800000,0],[-165801600000,0],[-173750400000,0],[-181612800000,0],[-189475200000,0],[-197424000000,0],[-205545600000,-3.0468],[-213408000000,-6.9602],[-221011200000,-11.8099],[-229132800000,-21.3557],[-236995200000,-23.4801],[-244857600000,-2.7952],[-252720000000,0],[-260582400000,0],[-268444800000,-0.6456],[-276307200000,0],[-284169600000,-2.9721],[-292032000000,-10.6362],[-299980800000,-4.9591],[-307843200000,-7.5973],[-315705600000,0],[-323654400000,-2.7193],[-331603200000,0],[-339465600000,0],[-347241600000,0],[-355190400000,0],[-363139200000,-6.6832],[-371001600000,-13.1601],[-378777600000,-17.5124],[-386726400000,-12.5],[-394848000000,-2.2896],[-402710400000,-9.014],[-410313600000,-3.7335],[-418435200000,-6.4563],[-426297600000,-3.1147],[-434160000000,0],[-442022400000,0],[-449884800000,0],[-457833600000,0],[-465696000000,0],[-473472000000,0],[-481420800000,0],[-489369600000,-3.1499],[-497232000000,-10.6764],[-505008000000,-17.7387],[-512956800000,-22.5796],[-520905600000,-19.9602],[-528768000000,-16.1472],[-536544000000,-11.9032],[-544492800000,-18.6339],[-552441600000,-17.2414],[-560304000000,-19.1976],[-568166400000,-21.187],[-576288000000,-22.878],[-584150400000,-30.504],[-592012800000,-28.7798],[-599875200000,-32.2613],[-607737600000,-35.5106],[-615600000000,-41.3462],[-623462400000,-42.6724],[-631324800000,-44.3302],[-639187200000,-48.3422],[-647136000000,-53.0504],[-654998400000,-50.0663],[-662774400000,-49.6021],[-670723200000,-48.6406],[-678672000000,-44.496],[-686534400000,-50],[-694396800000,-49.2706],[-702345600000,-49.9005],[-710294400000,-49.569],[-718156800000,-49.7016],[-725932800000,-49.2706],[-733881600000,-50.3979],[-742003200000,-38.8926],[-749865600000,-40.1857],[-757468800000,-42.4403],[-765590400000,-46.7838],[-773452800000,-50.6963],[-781315200000,-54.874],[-789177600000,-55.9682],[-797040000000,-57.7586],[-804902400000,-56.9629],[-812764800000,-60.1459],[-820627200000,-61.3064],[-828576000000,-59.9469],[-836524800000,-59.0517],[-844387200000,-61.6048],[-852163200000,-67.6061],[-860112000000,-70.6565],[-868060800000,-72.4801],[-875923200000,-73.4416],[-883699200000,-71.187],[-891648000000,-66.1804],[-899596800000,-67.3409],[-907459200000,-66.9761],[-915235200000,-64.9204],[-923184000000,-64.6552],[-931305600000,-66.9098],[-939168000000,-59.6154],[-947030400000,-58.687],[-954892800000,-57.5928],[-962755200000,-63.992],[-970617600000,-63.5942],[-978480000000,-56.4324],[-986342400000,-59.4164],[-994291200000,-61.6711],[-1002153600000,-71.817],[-1009929600000,-65.0199],[-1017878400000,-54.3767],[-1025827200000,-48.939],[-1033689600000,-40.5836],[-1041465600000,-43.0371],[-1049414400000,-46.9164],[-1057363200000,-50.7958],[-1065225600000,-50.5305],[-1073088000000,-55.4708],[-1081036800000,-61.5716],[-1089158400000,-66.0477],[-1097020800000,-71.9828],[-1104624000000,-68.5013],[-1112745600000,-69.8939],[-1120608000000,-67.4735],[-1128470400000,-64.7878],[-1136332800000,-66.943],[-1144195200000,-67.7719],[-1152057600000,-63.8263],[-1159920000000,-80.6034],[-1167782400000,-77.0557],[-1175644800000,-73.2095],[-1183593600000,-85.3117],[-1191456000000,-75.7626],[-1199318400000,-73.0769],[-1207267200000,-67.805],[-1215216000000,-50.8289],[-1223078400000,-44.6618],[-1230854400000,-49.1379],[-1238803200000,-38.3621],[-1246752000000,-32.1618],[-1254614400000,-16.6446],[-1262390400000,-28.8793],[-1270339200000,0],[-1278460800000,0],[-1286323200000,0],[-1293926400000,0],[-1302048000000,0],[-1309910400000,-0.7261],[-1317772800000,0],[-1325635200000,0] ]
        }];





		//Tortas
		Rs.pieOptions = {
            chart: {
                type: 'pieChart',
                height: 400,
                x: function(d){return d.key;},
                y: function(d){return d.y;},
                showLabels: true,
                duration: 1000,
                labelThreshold: 0.02,
                showLegend: false,
                legendPosition: 'right',
                donutRatio: 0.5,
                labelsOutside: false,
                donut: true,
                labelSunbeamLayout: false,
                labelType: 'percent',
                color: ['#88A80B','#BCDA45','#A7CB1B','#6F8B00','#526700','#579E0A','#8ACD41','#70BF19','#448300','#326100','#AFAA0B','#E3DE48','#D4CE1C','#918C00','#6B6800'],
            	margin : {
                    top: -20,
                    right: 0,
                    bottom: 0,
                    left: 5
                },
                /*labelType: function(a,b,c){
                	var percent = d3.format('.0%')((a.endAngle - a.startAngle) / (2 * Math.PI));
                	return c.key + ' (' + percent + ')';
                }*/
            }
        };

        Rs.pie1 = [	
         	{ key: "Equities", 		y: 60 },
         	{ key: "Bonds", 		y: 40 }
        ];

        Rs.pie2 = [	
         	{ key: "Domestic Equities", 		y: 45 },
         	{ key: "International Equities", 	y: 15 },
         	{ key: "Domestic Bonds", 			y: 30 },
         	{ key: "International Bonds", 		y: 10 }
        ];


        Rs.pie3 = [	
			{ key: "Long Domestic Equities", 	y: 10 },
			{ key: "Short Domestic Equities", 	y: 10 },
			{ key: "Long Domestic Bonds", 		y: 10 },
			{ key: "Short Domestic Bonds", 		y: 10 },
			{ key: "Long Commodities", 			y: 10 },
			{ key: "Short Commodities", 		y: 10 },
			{ key: "Long FX", 					y: 10 },
			{ key: "Short FX", 					y: 10 },
			{ key: "Long Futures", 				y: 10 },
			{ key: "Short Futures", 			y: 10 },
        ];


        //Investment Methodology
        Rs.InvM = [
        	{ Title: 'BIS', 												Content: 'We first begin our investment analysis by evaluating the policy recommendations issued by the Bank of International Settlements (BIS) and the International Monetary Fund (IMF). The BIS is known as the “central bank to central banks” yet few investors follow their research and policy recommendations. Naturally because of BIS’s position in the financial system their research and policies are influential and very often signal the exact policies developed market central banks ultimately adopt.' },
        	{ Title: 'IMF', 												Content: 'The IMF is also vitally important to follow. The IMF is a major lender to developing countries around the globe. With the rise of foreign direct investments pouring into emerging markets it is vital to monitor the IMF and their sister organization, the World Bank’s, financing activities. Also since the Euro crisis began the IMF has played a large role in the Euro zone member bailouts and will likely do so for the foreseeable future.' },
        	{ Title: 'G7 Central Bank', 									Content: 'The policies of the largest central banks deeply impact all markets. Recent examples dominate the headlines with QE from the FED, LTRO from the ECB and inflation targeting by the BOJ. These banks move the world. We carefully watch everything they do.' },
        	{ Title: 'Emerging Market Central Banks', 						Content: 'Not to be ignored, the central banks of emerging economies such as Brazil, Russia, China, and India are playing an ever more important role in policy. Predictably however they tend to follow the lead of their more experienced developed market counterparts.' },
        	{ Title: 'Analysis of money, credit and securities supply', 	Content: 'This stage is vital to what we do. We create a proprietary view of bank money supply. Let’s take the Federal Reserve for example. The Fed publishes M1 and M2 but no longer publishes M3. We work to reconstruct M3 and add back in other shadow banking liabilities and offshore sweep transactions to get a better idea of credit expansion and its impact on global assets. We do the same in other economies like China where shadow banking makes up an even larger part of their GDP than in the U.S.. Last but not least we analyze the impact of collateral re-hypothecation in different financial centers, like London and Singapore. Risk is deeply embedded in the daisy-chain like pledging of securities as collateral among global financial institutions. Lehman Brothers proved this.' },
        	{ Title: 'Asset Class Impact Analysis', 						Content: 'Now that we have a framework for the policy decisions coming down from central banks and an unadulterated view of their resulting expansionary or contractionary stock and flow, we then determine which asset classes will continue in price direction and which asset classes will reverse price direction. ' },
        	{ Title: 'Trade Expression Risk/Reward', 						Content: 'Once we have identified the asset classes that we expect to make the most significant moves we further refine our analysis towards sourcing the best risk/reward trade expression. This  may be done through options, outright positions, indirect assets with high correlations but better risk/reward payoffs, spread trades, carry trades, reverse carry trades, and other expression tools.' },
        	{ Title: 'Risk manage and optimize live position', 				Content: 'Many of our trade themes can take 6 months or longer to reach their event horizon. Because of this time frame there are often opportunities to fine tune a trade during that period with better risk/reward characteristics or conversely events may change that necessitate reducing the position, increasing the position, or closing a position.' },
        	{ Title: 'Harvest Profit/Loss', 								Content: 'If a trade theme has come to fruition and we feel that it has expressed itself in line with our views we will start taking profits. This is both a qualitative decision and quantitative. For example if we feel that 75% of the market has recognized our theme we will close at least half of a position. When we feel the whole market is onboard we will exit the remaining half of the trade. This may also be accomplished simply by hitting predetermined price targets and utilizing trailing stops.' },
        ];

        Rs.showInfo = (ev, Title, Content) => {

        	$mdDialog.show({
        		controller: 'basicDialogCtrl',
        		templateUrl: 'pages/basic-dialog.html',
        		targetEvent: ev,
        		locals:{ Title: Title, Content: Content },
        		fullscreen: true,
        		clickOutsideToClose : true
        	});
        };


		Rs.toogleAll = (val) => {
			Rs.AccordionPages.forEach((P) => {
				P.loaded = true;
				P.open = val;

				if(P.open){
					$timeout(() => {
						P.animate = true;
						window.dispatchEvent(new Event('resize'));
					}, 300);
				}else{
					P.animate = false;
				};
				
			});
		};


        Rs.mainClass = '';
        $timeout(() => {
        	window.dispatchEvent(new Event('resize'));
        	Rs.mainClass = 'Ready';
        }, 500);


	}
]);

angular.module('basicDialogCtrl', [])
.controller('basicDialogCtrl', ['$scope', '$mdDialog', 'Title', 'Content',
	function ($scope, $mdDialog, Title, Content) {

		var Ctrl = $scope;
		Ctrl.Title = Title;
		Ctrl.Content = Content;

		Ctrl.Cancel = () => {
			$mdDialog.cancel();
		};

	}
]);