/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .directive('dashboardLineChartSecond', dashboardLineChartSecond);

  /** @ngInject */
  function dashboardLineChartSecond() {
    return {
      restrict: 'E',
      controller: 'DashboardLineChartCtrlSecond',
      templateUrl: 'app/pages/dashboard/dashboardLineChart/dashboardLineChartSecond.html'
    };
  }
})();