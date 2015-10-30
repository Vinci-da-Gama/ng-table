(function () {

	var anguNg = ['ngAria', 'ngSanitize', 'ngAnimate', 'ngMessages', 'ngNotify', 'ngTable'];
	var anguEx = ['ui.bootstrap', 'mgcrea.ngStrap', 'angularMoment', 'bootstrapLightbox'];
	var routerCtrl = ['ntp.router', 'ntp.ctrl'];
	var cons = ['ntp.constant'];
	var serv = ['ntp.sig.service', 'ntp.service'];
	var dir = ['ntp.dir', 'ntp.cust.dir'];

	var depedencyArr = anguNg.concat(anguEx, routerCtrl, cons, serv, dir);
	/**
	* ntp Module
	*
	* The main module of this application...
	*/
	angular.module('ntp', depedencyArr);

	angular.module('ntp.router', ['ui.router']);
	angular.module('ntp.constant', []);
	angular.module('ntp.sig.service', []);
	angular.module('ntp.service', []);
	angular.module('ntp.ctrl', []);
	angular.module('ntp.dir', ['ntp.service', 'ntp.sig.service']);
	angular.module('ntp.cust.dir', ['ntp.service', 'ntp.sig.service']);

})();
(function () {
	var rM = angular.module('ntp.router');

	// rM

})();
(function () {
	var ctrlM = angular.module('ntp.ctrl');

	ctrlM.controller('IndexUibCtrl', ['$scope', function($scope){
		var cs = $scope;
		var uibArr = [
			{title: "ngtable-intro", gContent:"intro natable basic form..."},
			{title: "ngtable-load-Data", gContent:"load-Data natable"},
			{title: "ngtable-pagination", gContent:"pagination natable"},
			{title: "ngtable-sorting", gContent:"sorting natable"},
			{title: "ngtable-filtering", gContent:"filtering natable"},
			{title: "ngtable-grouping", gContent:"grouping natable"},
			{title: "ngtable-formatting", gContent:"formatting natable"},
			{title: "ngtable- show and hide Column", gContent:"Show and hide Column natable"},
			{title: "ngtable-editing", gContent:"editing natable"},
			{title: "ngtable-event", gContent:"event natable"}
		];
		cs.uibgps = uibArr;
	}]);

})();
(function () {
	var cosM = angular.module('ntp.constant');

	cosM.constant('dataAisle', {
		dbLane: "./db/dbName.json"
	});

})();
(function () {
	var cdM = angular.module('ntp.cust.dir');

	cdM.directive('ngtableLoaddataPagination', [function(){
		return {
			scope: {}, // {} = isolate, true = child, false/undefined = no change
			controller: function($scope, $element, $attrs, $transclude, inqueryInfo) {
				var cs = $scope;
				var initData = [];
				cs.tableData = [];
				inqueryInfo.ObtainDossier(gainTableData);
				function gainTableData (res) {
					initData = res.data.menu.items;
					cs.tableData = clearNullInArr (initData);
					console.log('line 15 -- the cs.tableData is --> ', cs.tableData);
				};
				cs.theEvent = function ($event) {
					console.log('the event is --> ', $event);
				};

				function clearNullInArr (tbdArr) {
					var notNullArr = [];
					tbdArr.forEach(function (elem, index) {
						if (angular.isObject(elem)) {
							notNullArr.push(elem);
						} else{
							console.log("This index of Element is not obj... the index is --> "+index);
						};
					});
					return notNullArr;
				};
			},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			templateUrl: './partials/ngtable-loaddata-pagination.html',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			link: function($scope, iElm, iAttrs, controller) {
				
			}
		};
	}]);

})();
(function () {
	var dM = angular.module('ntp.dir');

	// dM

})();
// service js Document
// $log.log("sigSrevice error line -- 15 --- data : "+data+" config: "+config+" status: "+status+".---");
	/*sM.service('verifyNumStrObjArrUndefinedElem', ['$log', function($log){
		
		this.IsNumberAndGreaterThanZero = function (figure) {
			var numBool = angular.isNumber(figure) && !isNaN(figure) && figure > 0;
			return numBool;
		};

		this.IsNumberAndGreaterThanWhileEqualZero = function (figure) {
			var numBool = angular.isNumber(figure) && !isNaN(figure) && figure >= 0;
			return numBool;
		};

		this.IsStringAndNotNull = function (str) {
			var strBool = angular.isString(str) && str.length > 0 && str !== null && str !== '';
			return strBool;
		};

		this.IsUndefined = function (testimony) {
			var refBool = angular.isUndefined(testimony);
			return refBool;
		};

		this.IsJqOrDomElem = function (jqdomElem) {
			var argBool = angular.isElement(jqdomElem) && typeof(jqdomElem) !== 'undefined';
			return argBool;
		};

		this.IsObjAndNotEmpty = function (obj) {
			var objBool = angular.isObject(obj) && Object.keys(obj).length > 0 && typeof(obj) !== 'undefined';
			return objBool;
		};

		this.IsArrayAndNotUnfilled = function (arr) {
			var arrBool = angular.isArray(arr) && arr.length > 0 && typeof(arr) !== 'undefined';
			return arrBool;
		}

	}]);*/
(function () {
	var sM = angular.module('ntp.service');

	// sM

})();
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
// jQuery Js Document
$(document).ready(function() {
});