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

        	/*$mdDialog.show(
				$mdDialog.alert()
					.clickOutsideToClose(true).fullscreen(false)
					.title(Title)
					.textContent(Content)
					.ok('OK')
			);*/
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