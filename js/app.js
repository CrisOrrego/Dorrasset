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

	'MainCtrl'
]);

//@koala-append "appConfig.js";
//@koala-append "MainCtrl.js";

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
                donutRatio: 0.5,
                labelsOutside: true,
                donut: true,
                labelSunbeamLayout: false,
                labelType: 'percent',
                color: ['#88A80B','#BCDA45','#A7CB1B','#6F8B00','#526700','#579E0A','#8ACD41','#70BF19','#448300','#326100','#AFAA0B','#E3DE48','#D4CE1C','#918C00','#6B6800'],
            	margin : {
                    top: 0,
                    right: 0,
                    bottom: 10,
                    left: 0
                },
                labelType: function(a,b,c){
                	var percent = d3.format('.0%')((a.endAngle - a.startAngle) / (2 * Math.PI));
                	return c.key + ' (' + percent + ')';
                }
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

        Rs.showInfo = (Title, Content) => {
        	$mdDialog.show(
				$mdDialog.alert()
					.clickOutsideToClose(true).fullscreen(false)
					.title(Title)
					.textContent(Content)
					.ok('OK')
			);
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