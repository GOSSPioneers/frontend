/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .directive('dashboardLineChartThird', dashboardLineChartThird);

  /** @ngInject */
  function dashboardLineChartThird() {
    return {
      restrict: 'E',
      controller: 'DashboardLineChartCtrlThird',
      templateUrl: 'app/pages/dashboard/dashboardLineChart/dashboardLineChartThird.html'
    };
  }
})();