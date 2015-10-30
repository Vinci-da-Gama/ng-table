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