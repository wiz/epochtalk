module.exports = ['$scope', '$route', '$timeout', 'Auth', 'BreadcrumbSvc',
  function($scope, $route, $timeout, Auth, BreadcrumbSvc) {
    $scope.loggedIn = Auth.isAuthenticated;
    $scope.currentUser = Auth.currentUser;
    $scope.user = {};

    Auth.checkAuthentication();

    $scope.breadcrumbs = BreadcrumbSvc.crumbs;

    $scope.enterLogin = function(keyEvent) {
      if (keyEvent.which === 13) {
        $scope.login();
      }
    };

    $scope.login = function() {
      Auth.login($scope.user,
        function(data) {
          $scope.user.username = '';
          $scope.user.password = '';
          $timeout(function() { $route.reload(); });
        }
      );
    };

    $scope.logout = function() {
      Auth.logout(function(data) {
        $timeout(function() { $route.reload(); });
      });
    };
  }
];
