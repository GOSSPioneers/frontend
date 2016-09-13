/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('DashboardLineChartCtrlThird', DashboardLineChartCtrlThird);

  /** @ngInject */
  function DashboardLineChartCtrlThird(baConfig, layoutPaths, baUtil, DashboardLineChartService) {

    var vm = this;
    vm.service = DashboardLineChartService;

    var chartData = [];

    var layoutColors = baConfig.colors;
    var graphColor = baConfig.theme.blur ? '#1C2B36' : layoutColors.primary;

    vm.loadChart = function() {  
      vm.service.getBnaTransactionsByHour().then(function(response) {
        var parsedArray = [];
        angular.forEach(response, function(data){
          var parsedDate = new Date(data.key);
          parsedArray.push( { date : parsedDate, count: data.count } );
        });
        vm.chartData = parsedArray;
        var chart = AmCharts.makeChart('amchart3', {
          type: 'serial',
          theme: 'blur',
          marginTop: 15,
          marginRight: 15,
          dataProvider: vm.chartData,
          categoryField: 'date',
          categoryAxis: {
            minPeriod: 'mm',
            parseDates: true,
            gridAlpha: 0,
            color: layoutColors.defaultText,
            axisColor: layoutColors.defaultText
          },
          valueAxes: [
            {
              minVerticalGap: 50,
              gridAlpha: 0,
              color: layoutColors.defaultText,
              axisColor: layoutColors.defaultText
            }
          ],
          graphs: [
            {
              id: 'g0',
              bullet: 'none',
              useLineColorForBulletBorder: true,
              lineColor: baUtil.hexToRGB(graphColor, 0.8),
              lineThickness: 1,
              negativeLineColor: layoutColors.danger,
              type: 'smoothedLine',
              valueField: 'count',
              fillAlphas: 1,
              fillColorsField: 'lineColor'
            }
          ],
          chartCursor: {
            categoryBalloonDateFormat: 'JJ:NN, DD MMMM',
            categoryBalloonColor: '#4285F4',
            categoryBalloonAlpha: 0.7,
            cursorAlpha: 0,
            valueLineEnabled: true,
            valueLineBalloonEnabled: true,
            valueLineAlpha: 0.5
          },
          export: {
            enabled: true,
            dateFormat: 'YYYY-MM-DD HH:NN:SS'
          },
          creditsPosition: 'bottom-right',
          zoomOutButton: {
            backgroundColor: '#fff',
            backgroundAlpha: 0
          },
          zoomOutText: '',
          pathToImages: layoutPaths.images.amChart
        });
      }, function(error) {
        console.log(error);
      });

    };

    function activate() {
      vm.loadChart();
    };

    /*
     * Default controller entry point
     */
    activate();

  }
})();