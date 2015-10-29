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