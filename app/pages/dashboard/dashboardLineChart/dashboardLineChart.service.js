(function() {
	"use strict";

	angular.module('BlurAdmin.pages.dashboard')
		.factory('DashboardLineChartService', ['$q', '$http', DashboardLineChartService]);
	
	/*
	 * The TransactionService handles all the mobile-transactions related data
	 */
	function DashboardLineChartService($q, $http) {
	
		var service = {};
		service.getCardInsertByHour = function(paramsObj) {
			var deferred = $q.defer();
			$http.get('http://10.28.65.141:5000/api/metric/cardinsert', { params : { statcd: 7813 } })
				.success(function(data) {
					deferred.resolve(data);
				})
				.error(function(data) {
					deferred.reject(data.error.message);
				}
			);
			return deferred.promise;
		};
		service.getCardTranByHour = function(paramsObj) {
			var deferred = $q.defer();
			$http.get('http://10.28.65.141:5000/api/metric/cardtran', { params : { statcd: 7813 } })
				.success(function(data) {
					deferred.resolve(data);
				})
				.error(function(data) {
					deferred.reject(data.error.message);
				}
			);
			return deferred.promise;
		};
		service.getFuellingByHour = function(paramsObj) {
			var deferred = $q.defer();
			$http.get('http://10.28.65.141:5000/api/metric/erogs', { params : { statcd: 7813 } })
				.success(function(data) {
					deferred.resolve(data);
				})
				.error(function(data) {
					deferred.reject(data.error.message);
				}
			);
			return deferred.promise;
		};
		service.getBnaTransactionsByHour = function(paramsObj) {
			var deferred = $q.defer();
			$http.get('http://10.28.65.141:5000/api/metric/bnatran', { params : { statcd: 7813 } })
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