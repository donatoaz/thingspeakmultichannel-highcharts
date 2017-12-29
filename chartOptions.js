;( function( namespace, undefined ) {
	var chartOptions = {
		chart: 
		{
			renderTo: 'chart-container',
			zoomType:'y',
		},
		rangeSelector: {
			buttons: [{
				count: 30,
				type: 'minute',
				text: '30M'
			}, {
				count: 12,
				type: 'hour',
				text: '12H'
			}, {
				count: 1,
				type: 'day',
				text: 'D'
			}, {
				count: 1,
				type: 'week',
				text: 'W'
			}, {
				count: 1,
				type: 'month',
				text: 'M'
			}, {
				count: 1,
				type: 'year',
				text: 'Y'
			}, {
				type: 'all',
				text: 'All'
			}],
			inputEnabled: true,
			selected: 1
		},
		title: {
	text: ''
	},
	plotOptions: {
		line: {
			gapSize:5
		},
		series: {
			marker: {
				radius: 2
			},
			animation: true,
			step: false,
			turboThreshold:1000,
			borderWidth: 0
		}
	},
	tooltip: {
		valueDecimals: 1,
		valueSuffix: '°C',
		xDateFormat:'%Y-%m-%d %l:%M:%S %p'
		// reformat the tooltips so that local times are displayed
		//formatter: function() {
			//var d = new Date(this.x + (myOffset*60000));
			//var n = (this.point.name === undefined) ? '' : '<br/>' + this.point.name;
			//return this.series.name + ':<b>' + this.y + '</b>' + n + '<br/>' + d.toDateString() + '<br/>' + d.toTimeString().replace(/\(.*\)/, "");
		//}
	},
	xAxis: {
		type: 'datetime',
		ordinal:false,
		min: Date.UTC(2013,02,28),
		dateTimeLabelFormats : {
			hour: '%l %p',
			minute: '%l:%M %p'
		},
		title: {
			text: 'test'
		}
	},
	yAxis: [
		{
			title: {
				text: 'Temperature °C'
			},
			id: 'T'
		}, 
		{
			title: {
	    		text: 'Other'
			},
			opposite: true,
			id: 'O'
		}],
		exporting: {
			enabled: true,
			csv: {
				dateFormat: '%d/%m/%Y %I:%M:%S %p'
			}
		},
		legend: {
			enabled: true
		},
		navigator: {
			baseSeries: 0,  //select which series to show in history navigator, First series is 0
			series: {
				includeInCSVExport: false
			}
		},
		series: []
		//series: [{data:[[getChartDate("2013-06-16T00:32:40Z"),75]]}]      
	};
	
	namespace.updateInterval = 15000;
	namespace.opts = chartOptions;
})(window.chartOpts = window.chartOpts || {});