angular.module('basicDialogCtrl', [])
.controller('basicDialogCtrl', ['$scope', '$mdDialog', 'Title', 'Content',
	function ($scope, $mdDialog, Title, Content) {

		var Ctrl = $scope;
		Ctrl.Title = Title;
		Ctrl.Content = Content;

		Ctrl.Cancel = () => {
			$mdDialog.cancel();
		};

	}
]);