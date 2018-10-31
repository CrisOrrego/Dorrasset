angular.module('MainCtrl', [])
.controller('MainCtrl', ['$scope', '$rootScope', '$timeout', '$translate', '$mdDialog', '$localStorage', '$window', 
	function ($scope, $rootScope, $timeout, $translate, $mdDialog, $localStorage, $window) {
		
		Rs = $scope;
		var Ctrl = {};

		Rs.activateWidget = true;

		Rs.Symbols = [
			{ id: 'USDMXN',  title: 'U.S. Dollar / Mexican Peso', symbol: 'FX:USDMXN', interval: 'W', active: true },
			{ id: 'FTSEMIB', title: 'FTSE MIB INDEX', 			symbol: 'MIL:FTSEMIB', interval: 'W', active: true },
			{ id: 'BTPBUND', title: 'SPREAD BTP-BUND', 			symbol: 'TVC:BTPBUND', interval: 'W', active: true },
		];


		Rs.AccordionPages = [
			//{ title: 'Global Macro Investing', 		  						open: true, url: 'pages/global-macro-investing.html' },
			{ title: 'Global Macro', 		  									open: false,   	url: 'pages/global-macro.html' },
			{ title: 'Austrian Economics', 		  								open: false,  	url: 'pages/austrian-economics.html' },
			{ title: 'Austrian Vs. Keynsian (Austrian Business Cycle Theory)', 	open: false,  	url: 'pages/austrian-vs-keynsian.html' },
			{ title: 'Kelly Criterion vs. VaR', 								open: true,  	url: 'pages/kelly-criterion-vs-var.html' },
			{ title: 'Global Macro Allocation vs Traditional & Modern',  		open: false,  	url: 'pages/global-macro-allocation.html' },
		];

		Rs.openAccordionPage = (P) => {
			Rs.AccordionPages.forEach((Page) => {
				if(P.title == Page.title){
					Page.open = !Page.open;
					$timeout(() => {
						window.dispatchEvent(new Event('resize'));
					}, 500);
					
				}else{
					Page.open = false;
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
                labelsOutside: false,
                donut: true,
                labelSunbeamLayout: false,
                labelType: 'percent',
                color: ['#88A80B','#BCDA45','#A7CB1B','#6F8B00','#526700','#579E0A','#8ACD41','#70BF19','#448300','#326100','#AFAA0B','#E3DE48','#D4CE1C','#918C00','#6B6800'],
            	margin : {
                    top: -20,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
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
			{ key: "Long Int FX", 				y: 10 },
			{ key: "Short Int FX", 				y: 10 },
        ];





        $timeout(() => {
        	window.dispatchEvent(new Event('resize'));
        }, 1000);


	}
]);