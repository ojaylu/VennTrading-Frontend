(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{492:function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});var i,r=o(7294),a=r&&"object"==typeof r&&"default"in r?r:{default:r},l=function(){return(l=Object.assign||function(e){for(var t,o=1,i=arguments.length;o<i;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function n(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,i=Object.getOwnPropertySymbols(e);r<i.length;r++)0>t.indexOf(i[r])&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(o[i[r]]=e[i[r]]);return o}var d=function(e){for(var t="",o="abcdef0123456789",i=o.length,r=0;r<e;r++)t+=o.charAt(Math.floor(Math.random()*i));return t},s=function(e){var t=e.href,o=e.spanText,i=e.text,r=e.copyrightStyles,l={parent:{fontSize:"13px",lineHeight:"32px",textAlign:"center",verticalAlign:"center",fontFamily:"Trebuchet MS, Arial, sans-serif",color:"#9db2bd"},link:{textDecoration:"none",color:"#9db2bd"},span:{color:"#2962FF"}};return a.default.createElement("div",{style:Object.assign({},l.parent,null==r?void 0:r.parent)},a.default.createElement("a",{style:Object.assign({},l.link,null==r?void 0:r.link),href:t,target:"_blank"},a.default.createElement("span",{style:Object.assign({},l.span,null==r?void 0:r.span)},o," ")),void 0===i?"By TradingView":i)},c=function(e){var t=e.scriptHTML,o=e.scriptSRC,i=e.containerId,l=e.type,n=r.createRef();return r.useEffect(function(){var e;if(n.current){var i=document.createElement("script");i.setAttribute("data-nscript","afterInteractive"),i.src=o,i.async=!0,i.type="text/javascript","Widget"===l||"MediumWidget"===l?i.onload=function(){TradingView,i.innerHTML=JSON.stringify("Widget"===l?new TradingView.widget(t):"MediumWidget"===l?new TradingView.MediumWidget(t):void 0)}:i.innerHTML=JSON.stringify(t),n.current.appendChild(i),e=n.current}return function(){if(e)for(;e.firstChild;)e.removeChild(e.firstChild)}},[n,t,l,o]),a.default.createElement("div",{ref:n,id:i})},h=function(e){var t=e.width,o=e.height,i=e.autosize,r=void 0!==i&&i,h=e.symbol,g=void 0===h?"NASDAQ:AAPL":h,m=e.interval,p=e.range,v=void 0===p?void 0:p,w=e.timezone,y=e.theme,u=e.style,C=e.locale,b=e.toolbar_bg,T=e.enable_publishing,f=e.hide_top_toolbar,S=e.hide_legend,E=e.withdateranges,F=e.hide_side_toolbar,U=e.allow_symbol_change,_=e.save_image,L=e.details,M=e.hotlist,D=e.calendar,k=e.show_popup_button,N=void 0!==k&&k,x=e.popup_width,B=e.popup_height,R=e.watchlist,O=e.studies,X=e.disabled_features,A=e.enabled_features,P=e.container_id,G=void 0===P?"tradingview_".concat(d(5)):P,z=e.copyrightStyles,H=n(e,["width","height","autosize","symbol","interval","range","timezone","theme","style","locale","toolbar_bg","enable_publishing","hide_top_toolbar","hide_legend","withdateranges","hide_side_toolbar","allow_symbol_change","save_image","details","hotlist","calendar","show_popup_button","popup_width","popup_height","watchlist","studies","disabled_features","enabled_features","container_id","copyrightStyles"]);return a.default.createElement("div",{id:"tradingview_widget_wrapper"},a.default.createElement(c,{scriptHTML:l(l(l(l(l(l(l(l({},r?{width:"100%"}:{width:void 0===t?980:t}),r?{height:"100%"}:{height:void 0===o?610:o}),{autosize:r,symbol:g}),v?{range:v}:{interval:void 0===m?"1":m}),{timezone:void 0===w?"UTC":w,theme:void 0===y?"light":y,style:void 0===u?"1":u,locale:void 0===C?"en":C,toolbar_bg:void 0===b?"#f1f3f6":b,enable_publishing:void 0!==T&&T,hide_top_toolbar:void 0!==f&&f,hide_legend:void 0!==S&&S,withdateranges:void 0===E||E,hide_side_toolbar:void 0!==F&&F,allow_symbol_change:void 0===U||U,save_image:void 0===_||_,details:void 0!==L&&L,hotlist:void 0!==M&&M,calendar:void 0!==D&&D}),N&&{show_popup_button:N,popup_width:void 0===x?"600":x,popup_height:void 0===B?"400":B}),{watchlist:void 0===R?void 0:R,studies:void 0===O?void 0:O,disabled_features:void 0===X?void 0:X,enabled_features:void 0===A?void 0:A,container_id:G}),H),scriptSRC:"https://s3.tradingview.com/tv.js",containerId:G,type:"Widget"}),a.default.createElement(s,{copyrightStyles:z,href:"https://www.tradingview.com/symbols/".concat(g),spanText:"".concat(g," Chart")}))},g=function(e){var t=e.symbol,o=void 0===t?"NASDAQ:AAPL":t,i=e.width,r=e.height,d=e.autosize,h=void 0!==d&&d,g=e.colorTheme,m=e.isTransparent,p=e.locale,v=e.largeChartUrl,w=e.copyrightStyles,y=n(e,["symbol","width","height","autosize","colorTheme","isTransparent","locale","largeChartUrl","copyrightStyles"]);return a.default.createElement("div",{id:"tradingview_widget_wrapper"},a.default.createElement(c,{scriptHTML:l(l(l(l({},h?{width:"100%"}:{width:void 0===i?480:i}),h?{height:"100%"}:{height:void 0===r?650:r}),{symbol:o,colorTheme:void 0===g?"light":g,isTransparent:void 0!==m&&m,locale:void 0===p?"en":p,largeChartUrl:void 0===v?void 0:v}),y),scriptSRC:"https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js"}),a.default.createElement(s,{copyrightStyles:w,href:"https://www.tradingview.com/symbols/".concat(o,"/"),spanText:"".concat(o," Profile")}))},m=function(e){var t=e.width,o=e.height,i=e.autosize,r=void 0!==i&&i,d=e.defaultColumn,h=e.screener_type,g=e.displayCurrency,m=e.colorTheme,p=e.locale,v=e.isTransparent,w=e.copyrightStyles,y=n(e,["width","height","autosize","defaultColumn","screener_type","displayCurrency","colorTheme","locale","isTransparent","copyrightStyles"]);return a.default.createElement("div",{id:"tradingview_widget_wrapper"},a.default.createElement(c,{scriptHTML:l(l(l(l({},r?{width:"100%"}:{width:void 0===t?1e3:t}),r?{height:"100%"}:{height:void 0===o?490:o}),{defaultColumn:void 0===d?"overview":d,screener_type:void 0===h?"crypto_mkt":h,displayCurrency:void 0===g?"USD":g,colorTheme:void 0===m?"light":m,locale:void 0===p?"en":p,isTransparent:void 0!==v&&v}),y),scriptSRC:"https://s3.tradingview.com/external-embedding/embed-widget-screener.js"}),a.default.createElement(s,{copyrightStyles:w,href:"https://www.tradingview.com/markets/cryptocurrencies/prices-all/",spanText:"Cryptocurrency Markets"}))},p=function(e){var t=e.colorTheme,o=e.isTransparent,i=e.width,r=e.height,d=e.autosize,h=void 0!==d&&d,g=e.locale,m=e.importanceFilter,p=e.currencyFilter,v=e.copyrightStyles,w=n(e,["colorTheme","isTransparent","width","height","autosize","locale","importanceFilter","currencyFilter","copyrightStyles"]);return a.default.createElement("div",{id:"tradingview_widget_wrapper"},a.default.createElement(c,{scriptHTML:l(l(l(l({colorTheme:void 0===t?"light":t,isTransparent:void 0!==o&&o},h?{width:"100%"}:{width:void 0===i?510:i}),h?{height:"100%"}:{height:void 0===r?600:r}),{locale:void 0===g?"en":g,importanceFilter:void 0===m?"-1,0,1":m,currencyFilter:void 0===p?void 0:p}),w),scriptSRC:"https://s3.tradingview.com/external-embedding/embed-widget-events.js"}),a.default.createElement(s,{copyrightStyles:v,href:"https://www.tradingview.com/markets/currencies/economic-calendar/",spanText:"Economic Calendar"}))},v=["EUR","USD","JPY","GBP","CHF","AUD","CAD","NZD","CNY",],w=function(e){var t=e.width,o=e.height,i=e.autosize,r=void 0!==i&&i,d=e.currencies,h=e.isTransparent,g=e.colorTheme,m=e.locale,p=e.largeChartUrl,w=e.copyrightStyles,y=n(e,["width","height","autosize","currencies","isTransparent","colorTheme","locale","largeChartUrl","copyrightStyles"]);return a.default.createElement("div",{id:"tradingview_widget_wrapper"},a.default.createElement(c,{scriptHTML:l(l(l(l({},r?{width:"100%"}:{width:void 0===t?770:t}),r?{height:"100%"}:{height:void 0===o?400:o}),{currencies:void 0===d?v:d,isTransparent:void 0!==h&&h,colorTheme:void 0===g?"light":g,locale:void 0===m?"en":m,largeChartUrl:void 0===p?void 0:p}),y),scriptSRC:"https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js"}),a.default.createElement(s,{copyrightStyles:w,href:"https://www.tradingview.com/markets/currencies/forex-cross-rates/",spanText:"Exchange Rates"}))},y=["EUR","USD","JPY","GBP","CHF","AUD","CAD","NZD","CNY",],u=function(e){var t=e.width,o=e.height,i=e.autosize,r=void 0!==i&&i,d=e.currencies,h=e.isTransparent,g=e.colorTheme,m=e.locale,p=e.largeChartUrl,v=e.copyrightStyles,w=n(e,["width","height","autosize","currencies","isTransparent","colorTheme","locale","largeChartUrl","copyrightStyles"]);return a.default.createElement("div",{id:"tradingview_widget_wrapper"},a.default.createElement(c,{scriptHTML:l(l(l(l({},r?{width:"100%"}:{width:void 0===t?700:t}),r?{height:"100%"}:{height:void 0===o?400:o}),{currencies:void 0===d?y:d,isTransparent:void 0!==h&&h,colorTheme:void 0===g?"light":g,locale:void 0===m?"en":m,largeChartUrl:void 0===p?void 0:p}),w),scriptSRC:"https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js"}),a.default.createElement(s,{copyrightStyles:v,href:"https://www.tradingview.com/markets/currencies/forex-heat-map/",spanText:"Forex Heat Map"}))},C=function(e){var t=e.symbol,o=void 0===t?"NASDAQ:AAPL":t,i=e.colorTheme,r=e.isTransparent,d=e.largeChartUrl,h=e.displayMode,g=e.width,m=e.height,p=e.autosize,v=void 0!==p&&p,w=e.locale,y=e.copyrightStyles,u=n(e,["symbol","colorTheme","isTransparent","largeChartUrl","displayMode","width","height","autosize","locale","copyrightStyles"]);return a.default.createElement("div",{id:"tradingview_widget_wrapper"},a.default.createElement(c,{scriptHTML:l(l(l(l({},v?{width:"100%"}:{width:void 0===g?480:g}),v?{height:"100%"}:{height:void 0===m?830:m}),{symbol:o,colorTheme:void 0===i?"light":i,isTransparent:void 0!==r&&r,largeChartUrl:void 0===d?void 0:d,displayMode:void 0===h?"regular":h,locale:void 0===w?"en":w}),u),scriptSRC:"https://s3.tradingview.com/external-embedding/embed-widget-financials.js"}),a.default.createElement(s,{copyrightStyles:y,href:"https://www.tradingview.com/symbols/".concat(o.replace(":","-"),"/financials-overview/"),spanText:"".concat(o," Fundamental Data")}))},b=[{name:"Indices",originalName:"Indices",symbols:[{name:"FOREXCOM:SPXUSD",displayName:"S&P 500"},{name:"FOREXCOM:NSXUSD",displayName:"Nasdaq 100"},{name:"FOREXCOM:DJI",displayName:"Dow 30"},{name:"INDEX:NKY",displayName:"Nikkei 225"},{name:"INDEX:DEU30",displayName:"DAX Index"},{name:"FOREXCOM:UKXGBP",displayName:"UK 100"},]},{name:"Commodities",originalName:"Commodities",symbols:[{name:"CME_MINI:ES1!",displayName:"S&P 500"},{name:"CME:6E1!",displayName:"Euro"},{name:"COMEX:GC1!",displayName:"Gold"},{name:"NYMEX:CL1!",displayName:"Crude Oil"},{name:"NYMEX:NG1!",displayName:"Natural Gas"},{name:"CBOT:ZC1!",displayName:"Corn"},]},{name:"Bonds",originalName:"Bonds",symbols:[{name:"CME:GE1!",displayName:"Eurodollar"},{name:"CBOT:ZB1!",displayName:"T-Bond"},{name:"CBOT:UB1!",displayName:"Ultra T-Bond"},{name:"EUREX:FGBL1!",displayName:"Euro Bund"},{name:"EUREX:FBTP1!",displayName:"Euro BTP"},{name:"EUREX:FGBM1!",displayName:"Euro BOBL"},]},{name:"Forex",originalName:"Forex",symbols:[{name:"FX:EURUSD"},{name:"FX:GBPUSD"},{name:"FX:USDJPY"},{name:"FX:USDCHF"},{name:"FX:AUDUSD"},{name:"FX:USDCAD"},]},],T=function(e){var t=e.width,o=e.height,i=e.autosize,r=void 0!==i&&i,d=e.symbolsGroups,h=e.showSymbolLogo,g=e.colorTheme,m=e.isTransparent,p=e.locale,v=e.largeChartUrl,w=e.copyrightStyles,y=n(e,["width","height","autosize","symbolsGroups","showSymbolLogo","colorTheme","isTransparent","locale","largeChartUrl","copyrightStyles"]);return a.default.createElement("div",{id:"tradingview_widget_wrapper"},a.default.createElement(c,{scriptHTML:l(l(l(l({},r?{width:"100%"}:{width:void 0===t?770:t}),r?{height:"100%"}:{height:void 0===o?450:o}),{symbolsGroups:void 0===d?b:d,showSymbolLogo:void 0===h||h,colorTheme:void 0===g?"light":g,isTransparent:void 0!==m&&m,locale:void 0===p?"en":p,largeChartUrl:void 0===v?void 0:v}),y),scriptSRC:"https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js"}),a.default.createElement(s,{copyrightStyles:w,spanText:"Financial Markets",href:"https://www.tradingview.com/markets/"}))},f=[{title:"Indices",symbols:[{s:"FOREXCOM:SPXUSD",d:"S&P 500"},{s:"FOREXCOM:NSXUSD",d:"Nasdaq 100"},{s:"FOREXCOM:DJI",d:"Dow 30"},{s:"INDEX:NKY",d:"Nikkei 225"},{s:"INDEX:DEU30",d:"DAX Index"},{s:"FOREXCOM:UKXGBP",d:"UK 100"},],originalTitle:"Indices"},{title:"Commodities",symbols:[{s:"CME_MINI:ES1!",d:"S&P 500"},{s:"CME:6E1!",d:"Euro"},{s:"COMEX:GC1!",d:"Gold"},{s:"NYMEX:CL1!",d:"Crude Oil"},{s:"NYMEX:NG1!",d:"Natural Gas"},{s:"CBOT:ZC1!",d:"Corn"},],originalTitle:"Commodities"},{title:"Bonds",symbols:[{s:"CME:GE1!",d:"Eurodollar"},{s:"CBOT:ZB1!",d:"T-Bond"},{s:"CBOT:UB1!",d:"Ultra T-Bond"},{s:"EUREX:FGBL1!",d:"Euro Bund"},{s:"EUREX:FBTP1!",d:"Euro BTP"},{s:"EUREX:FGBM1!",d:"Euro BOBL"},],originalTitle:"Bonds"},{title:"Forex",symbols:[{s:"FX:EURUSD"},{s:"FX:GBPUSD"},{s:"FX:USDJPY"},{s:"FX:USDCHF"},{s:"FX:AUDUSD"},{s:"FX:USDCAD"},],originalTitle:"Forex"},],S=function(e){var t=e.colorTheme,o=e.dateRange,i=e.showChart,r=void 0===i||i,d=e.locale,h=e.largeChartUrl,g=e.isTransparent,m=e.showSymbolLogo,p=e.showFloatingTooltip,v=e.width,w=e.height,y=e.autosize,u=void 0!==y&&y,C=e.plotLineColorGrowing,b=e.plotLineColorFalling,T=e.gridLineColor,S=e.scaleFontColor,E=e.belowLineFillColorGrowing,F=e.belowLineFillColorFalling,U=e.belowLineFillColorGrowingBottom,_=e.belowLineFillColorFallingBottom,L=e.symbolActiveColor,M=e.tabs,D=e.copyrightStyles,k=n(e,["colorTheme","dateRange","showChart","locale","largeChartUrl","isTransparent","showSymbolLogo","showFloatingTooltip","width","height","autosize","plotLineColorGrowing","plotLineColorFalling","gridLineColor","scaleFontColor","belowLineFillColorGrowing","belowLineFillColorFalling","belowLineFillColorGrowingBottom","belowLineFillColorFallingBottom","symbolActiveColor","tabs","copyrightStyles"]);return a.default.createElement("div",{id:"tradingview_widget_wrapper"},a.default.createElement(c,{scriptHTML:l(l(l(l(l({colorTheme:void 0===t?"light":t,dateRange:void 0===o?"12M":o,showChart:r,locale:void 0===d?"en":d,largeChartUrl:void 0===h?void 0:h,isTransparent:void 0!==g&&g,showSymbolLogo:void 0===m||m,showFloatingTooltip:void 0!==p&&p},u?{width:"100%"}:{width:void 0===v?400:v}),u?{height:"100%"}:{height:void 0===w?660:w}),r&&{plotLineColorGrowing:void 0===C?"rgba(33, 150, 243, 1)":C,plotLineColorFalling:void 0===b?"rgba(33, 150, 243, 1)":b,gridLineColor:void 0===T?"rgba(240, 243, 250, 1)":T,scaleFontColor:void 0===S?"rgba(120, 123, 134, 1)":S,belowLineFillColorGrowing:void 0===E?"rgba(33, 150, 243, 0.12)":E,belowLineFillColorFalling:void 0===F?"rgba(33, 150, 243, 0.12)":F,belowLineFillColorGrowingBottom:void 0===U?"rgba(41, 98, 255, 0)":U,belowLineFillColorFallingBottom:void 0===_?"rgba(41, 98, 255, 0)":_,symbolActiveColor:void 0===L?"rgba(33, 150, 243, 0.12)":L}),{tabs:void 0===M?f:M}),k),scriptSRC:"https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js"}),a.default.createElement(s,{copyrightStyles:D,spanText:"Financial Markets",href:"https://www.tradingview.com/markets/"}))},E=function(e){var t=e.symbol,o=void 0===t?"FX:EURUSD":t,i=e.width,r=e.height,d=e.locale,h=e.dateRange,g=e.colorTheme,m=e.trendLineColor,p=e.underLineColor;e.underLineBottomColor;var v=e.isTransparent,w=e.autosize,y=void 0!==w&&w,u=e.largeChartUrl,C=e.copyrightStyles,b=n(e,["symbol","width","height","locale","dateRange","colorTheme","trendLineColor","underLineColor","underLineBottomColor","isTransparent","autosize","largeChartUrl","copyrightStyles"]);return a.default.createElement("div",{id:"tradingview_widget_wrapper"},a.default.createElement(c,{scriptHTML:l(l(l(l({symbol:o},y?{width:"100%"}:{width:void 0===i?350:i}),y?{height:"100%"}:{height:void 0===r?220:r}),{locale:void 0===d?"en":d,dateRange:void 0===h?"12M":h,colorTheme:void 0===g?"light":g,trendLineColor:void 0===m?"rgba(41, 98, 255, 1)":m,underLineColor:void 0===p?"rgba(41, 98, 255, 0.3)":p,isTransparent:void 0!==v&&v,autosize:y,largeChartUrl:void 0===u?void 0:u}),b),scriptSRC:"https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js"}),a.default.createElement(s,{copyrightStyles:C,href:"https://www.tradingview.com/symbols/".concat(o,"/"),spanText:"".concat(o," Rates")}))},F=function(e){var t=e.width,o=e.height,i=e.autosize,r=void 0!==i&&i,d=e.defaultColumn,h=e.defaultScreen,g=e.market,m=e.showToolbar,p=e.colorTheme,v=e.locale,w=e.isTransparent,y=e.largeChartUrl,u=e.copyrightStyles,C=n(e,["width","height","autosize","defaultColumn","defaultScreen","market","showToolbar","colorTheme","locale","isTransparent","largeChartUrl","copyrightStyles"]);return a.default.createElement("div",{id:"tradingview_widget_wrapper"},a.default.createElement(c,{scriptHTML:l(l(l(l({},r?{width:"100%"}:{width:void 0===t?1100:t}),r?{height:"100%"}:{height:void 0===o?512:o}),{defaultColumn:void 0===d?"overview":d,defaultScreen:void 0===h?"general":h,market:void 0===g?"forex":g,showToolbar:void 0===m||m,colorTheme:void 0===p?"light":p,locale:void 0===v?"en":v,isTransparent:void 0!==w&&w,largeChartUrl:void 0===y?void 0:y}),C),scriptSRC:"https://s3.tradingview.com/external-embedding/embed-widget-screener.js"}),a.default.createElement(s,{copyrightStyles:u,href:"https://www.tradingview.com/forex-screener/",spanText:"Forex Screener"}))},U=function(e){var t=e.symbol,o=void 0===t?"FX:EURUSD":t,i=e.width,r=e.autosize,d=e.colorTheme,h=e.isTransparent,g=e.locale,m=e.largeChartUrl,p=e.copyrightStyles,v=n(e,["symbol","width","autosize","colorTheme","isTransparent","locale","largeChartUrl","copyrightStyles"]);return a.default.createElement("div",{id:"tradingview_widget_wrapper"},a.default.createElement(c,{scriptHTML:l(l(l({symbol:o},void 0!==r&&r?{width:"100%"}:{width:void 0===i?350:i}),{colorTheme:void 0===d?"light":d,isTransparent:void 0!==h&&h,locale:void 0===g?"en":g,largeChartUrl:void 0===m?void 0:m}),v),scriptSRC:"https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js"}),a.default.createElement(s,{copyrightStyles:p,href:"https://www.tradingview.com/symbols/".concat(o,"/"),spanText:"".concat(o," Rates")}))},_=function(e){var t=e.colorTheme,o=e.dateRange,i=e.exchange,r=e.showChart,d=void 0===r||r,h=e.locale,g=e.largeChartUrl,m=e.isTransparent,p=e.showSymbolLogo;e.showFloatingTooltip;var v=e.width,w=e.height,y=e.autosize,u=void 0!==y&&y,C=e.plotLineColorGrowing,b=e.plotLineColorFalling,T=e.gridLineColor,f=e.scaleFontColor,S=e.belowLineFillColorGrowing,E=e.belowLineFillColorFalling,F=e.belowLineFillColorGrowingBottom,U=e.belowLineFillColorFallingBottom,_=e.symbolActiveColor,L=e.copyrightStyles,M=n(e,["colorTheme","dateRange","exchange","showChart","locale","largeChartUrl","isTransparent","showSymbolLogo","showFloatingTooltip","width","height","autosize","plotLineColorGrowing","plotLineColorFalling","gridLineColor","scaleFontColor","belowLineFillColorGrowing","belowLineFillColorFalling","belowLineFillColorGrowingBottom","belowLineFillColorFallingBottom","symbolActiveColor","copyrightStyles"]);return a.default.createElement("div",{id:"tradingview_widget_wrapper"},a.default.createElement(c,{scriptHTML:l(l(l(l({colorTheme:void 0===t?"light":t,dateRange:void 0===o?"12M":o,exchange:void 0===i?"US":i,showChart:d,locale:void 0===h?"en":h,largeChartUrl:void 0===g?void 0:g,isTransparent:void 0!==m&&m,showSymbolLogo:void 0===p||p},u?{width:"100%"}:{width:void 0===v?400:v}),u?{height:"100%"}:{height:void 0===w?600:w}),d&&{plotLineColorGrowing:void 0===C?"rgba(33, 150, 243, 1)":C,plotLineColorFalling:void 0===b?"rgba(33, 150, 243, 1)":b,gridLineColor:void 0===T?"rgba(240, 243, 250, 1)":T,scaleFontColor:void 0===f?"rgba(120, 123, 134, 1)":f,belowLineFillColorGrowing:void 0===S?"rgba(33, 150, 243, 0.12)":S,belowLineFillColorFalling:void 0===E?"rgba(33, 150, 243, 0.12)":E,belowLineFillColorGrowingBottom:void 0===F?"rgba(41, 98, 255, 0)":F,belowLineFillColorFallingBottom:void 0===U?"rgba(41, 98, 255, 0)":U,symbolActiveColor:void 0===_?"rgba(33, 150, 243, 0.12)":_}),M),scriptSRC:"https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js"}),a.default.createElement(s,{copyrightStyles:L,href:"https://www.tradingview.com/markets/stocks-usa/",spanText:"Stock market Today"}))},L=function(e){var t=e.symbol,o=void 0===t?"NASDAQ:AAPL":t,i=e.width,r=e.autosize,d=e.locale,h=e.colorTheme,g=e.isTransparent,m=e.largeChartUrl,p=e.copyrightStyles,v=n(e,["symbol","width","autosize","locale","colorTheme","isTransparent","largeChartUrl","copyrightStyles"]);return a.default.createElement("div",{id:"tradingview_widget_wrapper"},a.default.createElement(c,{scriptHTML:l(l(l({symbol:o},void 0!==r&&r?{width:"100%"}:{width:void 0===i?1e3:i}),{locale:void 0===d?"en":d,colorTheme:void 0===h?"light":h,isTransparent:void 0!==g&&g,largeChartUrl:void 0===m?void 0:m}),v),scriptSRC:"https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js"}),a.default.createElement(s,{copyrightStyles:p,href:"https://www.tradingview.com/symbols/".concat(o,"/"),spanText:"".concat(o," Price Today")}))},M=[["Apple","AAPL"],["Google","GOOGL"],["Microsoft","MSFT"],],D=function(e){var t=e.symbols,o=void 0===t?M:t,i=e.chartOnly,r=e.width,h=e.height,g=e.locale,m=e.colorTheme,p=e.gridLineColor,v=e.fontColor,w=e.isTransparent,y=e.showFloatingTooltip,u=e.scalePosition,C=e.scaleMode,b=e.fontFamily,T=e.noTimeScale,f=e.chartType,S=void 0===f?"area":f,E=e.lineColor,F=e.bottomColor,U=e.topColor,_=e.upColor,L=e.downColor,D=e.borderUpColor,k=e.borderDownColor,N=e.wickUpColor,x=e.wickDownColor,B=e.autosize,R=void 0!==B&&B,O=e.container_id,X=void 0===O?"tradingview_".concat(d(5)):O,A=e.copyrightStyles,P=n(e,["symbols","chartOnly","width","height","locale","colorTheme","gridLineColor","fontColor","isTransparent","showFloatingTooltip","scalePosition","scaleMode","fontFamily","noTimeScale","chartType","lineColor","bottomColor","topColor","upColor","downColor","borderUpColor","borderDownColor","wickUpColor","wickDownColor","autosize","container_id","copyrightStyles"]);return a.default.createElement("div",{id:"tradingview_widget_wrapper"},a.default.createElement(c,{scriptHTML:l(l(l(l(l(l(l(l({symbols:o,chartOnly:void 0!==i&&i},R?{width:"100%"}:{width:void 0===r?1e3:r}),R?{height:"100%"}:{height:void 0===h?400:h}),{locale:void 0===g?"en":g,colorTheme:void 0===m?"light":m,gridLineColor:void 0===p?"rgba(42, 46, 57, 0)":p,fontColor:void 0===v?"#787B86":v,isTransparent:void 0!==w&&w,showFloatingTooltip:void 0===y||y,scalePosition:void 0===u?"no":u,scaleMode:void 0===C?"Normal":C,fontFamily:void 0===b?"Trebuchet MS, sans-serif":b,noTimeScale:void 0!==T&&T,chartType:S}),"area"===S&&{lineColor:void 0===E?"#2962FF":E,bottomColor:void 0===F?"rgba(41, 98, 255, 0)":F,topColor:void 0===U?"rgba(41, 98, 255, 0.3)":U}),("bars"===S||"candlesticks"===S)&&{upColor:void 0===_?"#26a69a":_,downColor:void 0===L?"#ef5350":L}),"candlesticks"===S&&{borderUpColor:void 0===D?"#26a69a":D,borderDownColor:void 0===k?"#ef5350":k,wickUpColor:void 0===N?"#26a69a":N,wickDownColor:void 0===x?"#ef5350":x}),{autosize:R,container_id:X}),P),scriptSRC:"https://s3.tradingview.com/tv.js",containerId:X,type:"MediumWidget"}),a.default.createElement(s,{copyrightStyles:A,href:"https://www.tradingview.com/symbols/".concat(o[0][1]),spanText:"".concat(o[0][1])}))},k=function(e){var t=e.interval,o=e.width,i=e.height,r=e.autosize,d=void 0!==r&&r,h=e.isTransparent,g=e.symbol,m=void 0===g?"NASDAQ:AAPL":g,p=e.showIntervalTabs,v=e.locale,w=e.colorTheme,y=e.largeChartUrl,u=e.copyrightStyles,C=n(e,["interval","width","height","autosize","isTransparent","symbol","showIntervalTabs","locale","colorTheme","largeChartUrl","copyrightStyles"]);return a.default.createElement("div",{id:"tradingview_widget_wrapper"},a.default.createElement(c,{scriptHTML:l(l(l(l({interval:void 0===t?"1m":t},d?{width:"100%"}:{width:void 0===o?425:o}),d?{height:"100%"}:{height:void 0===i?450:i}),{isTransparent:void 0!==h&&h,symbol:m,showIntervalTabs:void 0===p||p,locale:void 0===v?"en":v,colorTheme:void 0===w?"light":w,largeChartUrl:void 0===y?void 0:y}),C),scriptSRC:"https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js"}),a.default.createElement(s,{copyrightStyles:u,href:"https://www.tradingview.com/symbols/".concat(m.replace(":","-"),"/technicals/"),spanText:"Technical Analysis for ".concat(m)}))},N=[{proName:"FOREXCOM:SPXUSD",title:"S&P 500"},{proName:"FOREXCOM:NSXUSD",title:"Nasdaq 100"},{proName:"FX_IDC:EURUSD",title:"EUR/USD"},{proName:"BITSTAMP:BTCUSD",title:"BTC/USD"},{proName:"BITSTAMP:ETHUSD",title:"ETH/USD"},],x=function(e){var t=e.colorTheme,o=e.isTransparent,i=e.showSymbolLogo,r=e.locale,d=e.symbols,h=e.copyrightStyles,g=n(e,["colorTheme","isTransparent","showSymbolLogo","locale","symbols","copyrightStyles"]);return a.default.createElement("div",{id:"tradingview_widget_wrapper"},a.default.createElement(c,{scriptHTML:l({colorTheme:void 0===t?"light":t,isTransparent:void 0!==o&&o,showSymbolLogo:void 0===i||i,locale:void 0===r?"en":r,symbols:void 0===d?N:d},g),scriptSRC:"https://s3.tradingview.com/external-embedding/embed-widget-tickers.js"}),a.default.createElement(s,{copyrightStyles:h,href:"https://www.tradingview.com/",spanText:"Qoutes"}))},B=[{proName:"FOREXCOM:SPXUSD",title:"S&P 500"},{proName:"FOREXCOM:NSXUSD",title:"Nasdaq 100"},{proName:"FX_IDC:EURUSD",title:"EUR/USD"},{proName:"BITSTAMP:BTCUSD",title:"BTC/USD"},{proName:"BITSTAMP:ETHUSD",title:"ETH/USD"},],R=function(e){var t=e.symbols,o=e.showSymbolLogo,i=e.colorTheme,r=e.isTransparent,d=e.largeChartUrl,h=e.displayMode,g=e.locale,m=e.copyrightStyles,p=n(e,["symbols","showSymbolLogo","colorTheme","isTransparent","largeChartUrl","displayMode","locale","copyrightStyles"]);return a.default.createElement("div",{id:"tradingview_widget_wrapper"},a.default.createElement(c,{scriptHTML:l({symbols:void 0===t?B:t,showSymbolLogo:void 0===o||o,colorTheme:void 0===i?"light":i,isTransparent:void 0!==r&&r,largeChartUrl:void 0===d?void 0:d,displayMode:void 0===h?"adaptive":h,locale:void 0===g?"en":g},p),scriptSRC:"https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"}),a.default.createElement(s,{copyrightStyles:m,href:"https://www.tradingview.com/markets/",spanText:"Markets"}))},O=function(e){var t=e.feedMode,o=void 0===t?"all_symbols":t,i=e.colorTheme,d=e.isTransparent,h=e.displayMode,g=e.width,m=e.height,p=e.autosize,v=void 0!==p&&p,w=e.locale,y=e.largeChartUrl,u=e.copyrightStyles,C=e.symbol,b=void 0===C?"BTCUSD":C,T=e.market,f=void 0===T?"crypto":T,S=n(e,["feedMode","colorTheme","isTransparent","displayMode","width","height","autosize","locale","largeChartUrl","copyrightStyles","symbol","market"]),E=r.useState(""),F=E[0],U=E[1],_=r.useState(""),L=_[0],M=_[1];return r.useEffect(function(){if("all_symbols"==o)U("key_events"),M("Daily news roundup");else if("market"==o)switch(f){case"crypto":U("markets/cryptocurrencies/key-events/"),M("Daily cryptocurrency news");break;case"forex":U("markets/currencies/key-events/"),M("Daily currency news");break;case"stock":U("markets/stocks-usa/key-events/"),M("Daily stock news");break;case"index":U("markets/indices/key-events/"),M("Daily index news");break;case"futures":U("markets/futures/key-events/"),M("Daily futures news");break;case"cfd":U("markets/bonds/key-events/"),M("Daily bonds news")}else"symbol"==o&&(U("symbols/".concat(b,"/history-timeline/")),M("".concat(b," History")))},[o,b,f]),a.default.createElement("div",{id:"tradingview_widget_wrapper"},a.default.createElement(c,{scriptHTML:l(l(l(l(l(l({},v?{width:"100%"}:{width:void 0===g?480:g}),v?{height:"100%"}:{height:void 0===m?830:m}),{feedMode:o}),"market"==o?{market:f}:"symbol"==o?{symbol:b}:{}),{colorTheme:void 0===i?"light":i,isTransparent:void 0!==d&&d,displayMode:void 0===h?"regular":h,locale:void 0===w?"en":w,largeChartUrl:void 0===y?void 0:y}),S),scriptSRC:"https://s3.tradingview.com/external-embedding/embed-widget-timeline.js"}),a.default.createElement(s,{copyrightStyles:u,href:"https://www.tradingview.com/".concat(F),spanText:L}))};t.AdvancedRealTimeChart=h,t.CompanyProfile=g,t.CryptoCurrencyMarket=m,t.EconomicCalendar=p,t.ForexCrossRates=w,t.ForexHeatMap=u,t.FundamentalData=C,t.MarketData=T,t.MarketOverview=S,t.MiniChart=E,t.Screener=F,t.SingleTicker=U,t.StockMarket=_,t.SymbolInfo=L,t.SymbolOverview=D,t.TechnicalAnalysis=k,t.Ticker=x,t.TickerTape=R,t.Timeline=O}}]);