// service js Document
// $log.log("sigSrevice error line -- 14 --- data : "+data+" config: "+config+" status: "+status+".---");
/*sigM.service('inquireInfo', ['$http', '$log', 'appnameDb', function($http, $log, appnameDb){
	var dbPath = appnameDb.dbDot+appnameDb.delimiter+appnameDb.dbPrefix+appnameDb.delimiter+appnameDb.dbName+appnameDb.dbExtension;

	this.obtainDossier = function (func) {
		$http.get(dbPath)
		.then(function (testimony) {
			func(testimony.data);
			$log.log('get data successfully. '+dbPath);
		})
		.catch(function (data, config, status) {
			$log.log("sigSrevice error line -- 16 -\&\#1046\;- data : "+data+" config: "+config+" status: "+status+".---");
		})
		.finally(function () {
			$log.log('sigSrevice line 19, finally method.');
		});
	};

}]);*/
(function () {
	var ssM = angular.module('ntp.sig.service');

	ssM.service('inqueryInfo', ['$http', 'dataAisle', function($http, dataAisle){
		var dbPath = dataAisle.dbLane;

		this.ObtainDossier = function (func) {
			$http.get(dbPath)
			.then(function (testimony) {
				func(testimony);
				// console.log('the testimony is ...', testimony);
			})
			.catch(function (data, config, status) {
				console.log("sigSrevice error line -- 16 -\&\#1046\;- data : "+data+" config: "+config+" status: "+status+".---");
			})
			.finally(function () {
				console.log('anyway, finally...');
			});

		};

	}]);

})();