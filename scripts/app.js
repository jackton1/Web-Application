angular.module("WebApp", [])
// .controller("mainCtrl",function($scope){
// 	 angular.element(document).ready(function () {
// 	 	document.getElementById("")
// 	 })
// })
.controller("userCtrl",function($scope){
		$scope.user = {
			"name": "Irina Bykova",
			"job": "Photographer",
			"team": "works with Slack team"
		}
})
.controller("emailCtrl",function($scope){
		$scope.emailadd= {
			"email": ""
		}

});

