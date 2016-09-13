/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('TrafficChartCtrl', TrafficChartCtrl);

  /** @ngInject */
  function TrafficChartCtrl($scope, baConfig, colorHelper, TrafficChartService) {

    var vm = this;
    vm.service = TrafficChartService;

    $scope.transparent = baConfig.theme.blur;
    var dashboardColors = baConfig.colors.dashboard;

    vm.loadChart = function() {  
      vm.service.getErrorHits().then(function(response) {        
      console.log(response);
      var totalCount = response[0].count + response[1].count + response[2].count+ response[3].count + response[4].count;
      $scope.doughnutData = [
        {
          value: response[0].count,
          color: dashboardColors.white,
          highlight: colorHelper.shade(dashboardColors.white, 15),
          label: response[0].id,
          percentage: response[0].count / totalCount * 100,
          order: 1,
        }, {
          value: response[1].count,
          color: dashboardColors.blueStone,
          highlight: colorHelper.shade(dashboardColors.blueStone, 15),
          label: response[1].id,
          percentage: response[1].count / totalCount * 100,
          order: 4,
        }, {
          value: response[2].count,
          color: dashboardColors.surfieGreen,
          highlight: colorHelper.shade(dashboardColors.surfieGreen, 15),
          label: response[2].id,
          percentage: response[2].count / totalCount * 100,
          order: 3,
        }, {
          value: response[3].count,
          color: dashboardColors.silverTree,
          highlight: colorHelper.shade(dashboardColors.silverTree, 15),
          label: response[3].id,
          percentage: response[3].count / totalCount * 100,
          order: 2,
        }, {
          value: response[4].count,
          color: dashboardColors.gossip,
          highlight: colorHelper.shade(dashboardColors.gossip, 15),
          label: response[4].id,
          percentage: response[4].count / totalCount * 100,
          order: 0,
        },
      ];

      var ctx = document.getElementById('chart-area').getContext('2d');
      window.myDoughnut = new Chart(ctx).Doughnut($scope.doughnutData, {
        segmentShowStroke: false,
        percentageInnerCutout : 64,
        responsive: true
      });
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