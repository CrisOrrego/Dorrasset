angular.module('tvRealtimeChart', []).directive('tvRealtimeChart',
  function () {
    return {
      restrict: 'AE',
      scope: {
        config: '=config'
      },
      template: '<div class="tradingview-widget-container"><div id="tradingview_{{ config.id }}"></div><div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/{{ config.symbol }}/" rel="noopener" target="_blank"><span class="blue-text">{{ config.id }} chart</span></a> by TradingView</div></div>',
      link: function(scope, element, attrs){
        var c = scope.config;
        var elm_id = 'tradingview_' + c.id;

        //console.log(elm_id);

        if(c.active){
          setTimeout(function(){
            new TradingView.widget(
            {
              "autosize": true,
              "symbol": c.symbol,
              "interval": c.interval,
              "timezone": "Etc/UTC",
              "theme": "Dark",
              "style": "1",
              "locale": "en",
              "toolbar_bg": "#f1f3f6",
              "enable_publishing": false,
              "allow_symbol_change": false,
              "container_id": elm_id
            });
          }, 1000);
        };


      }
    };
  }
);


/**
<!-- TradingView Widget BEGIN -->
<div class="tradingview-widget-container">
  <div id="tradingview_44de1"></div>
  <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/TVC-BTPBUND/" rel="noopener" target="_blank"><span class="blue-text">BTPBUND chart</span></a> by TradingView</div>
  <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
  <script type="text/javascript">

  );
  </script>
</div>
<!-- TradingView Widget END -->


 */