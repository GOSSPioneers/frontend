(function() {
	"use strict";

	angular.module('BlurAdmin.pages.dashboard')
		.factory('TrafficChartService', ['$q', '$http', TrafficChartService]);
	
	/*
	 * The TransactionService handles all the mobile-transactions related data
	 */
	function TrafficChartService($q, $http) {
	
		var service = {};
		service.getErrorHits = function(paramsObj) {
			var deferred = $q.defer();
			$http.get('http://10.28.65.141:5000/api/metric/errors', { params : { statcd: 7813 } })
				.success(function(data) {
					deferred.resolve(data);
				})
				.error(function(data) {
					deferred.reject(data.error.message);
				}
			);
			return deferred.promise;
		};

		return service;
	}

})();