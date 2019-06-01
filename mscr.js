var mainCtrl = function($scope) {
	$scope.addUser = function() {

	}

}

var userItemCtrl = function($scope) {
	$scope.increment = function() {
		$scope.user.score++;
	}
}

	function send(){
		document.myForm.action="mailto:usodarou11@yahoo.co.jp?subject=" + document.getElementById('content').value;
		// document.myForm.method="post";
		// document.myForm.encoding="text/plain";
		alert("‚ ‚è‚ª‚Æ‚¤‚²‚´‚¢‚Ü‚·");
	}