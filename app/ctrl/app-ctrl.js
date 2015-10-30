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