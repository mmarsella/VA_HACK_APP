
// USER DASHBOARD
app.controller("MainController", function($scope,$auth,$compile,$timeout, uiCalendarConfig){
   $scope.currentUser = $auth.getPayload().user;

});  // END CONTROLLER








app.controller("LoginController", function($scope, $auth, $location, UserService){
  $scope.showSignUp = false;

    $scope.video = {
    id: 'ssutK1Gei4A'
  };


  $scope.authenticate = function(provider) {
    $auth.authenticate(provider)
      .then(function(res) {
        console.log('You have successfully signed in with ' + provider + '!');
        $location.path('/home');
      })
      .catch(function(error) {
        if (error.error) {
          // Popup error - invalid redirect_uri, pressed cancel button, etc.
          console.log(error.error);
        } else if (error.data) {
          // HTTP response error from server
          console.log(error.data.message, error.status);
        } else {
          console.log(error);
        }
      });
  };

  $scope.login = function(user){
    $auth.login(user).then(function(data){
      UserService.setCurrentUser(data);
      $location.path('/home');
    }).catch(function(data){
      $scope.errors = data.data;
    });
  };
}); // end LoginController


app.controller('LogoutController', function($location, $auth) {
    if (!$auth.isAuthenticated()) { return; }
    $auth.logout()
      .then(function() {
        console.log('You have been logged out');
        $location.path('/');
      });
  });

app.controller('SignupController', function($scope, $location, $auth, UserService) {
    $scope.isVet = false;
    $scope.isEmp = false;

    





    $scope.signup = function() {
      $auth.signup($scope.user)
        .then(function(response) {
          $auth.setToken(response);
          $location.path('/');
          console.log('You have successfully created a new account and have been signed-in');
        })
        .catch(function(response) {
          console.log(response);
        });
    };
    $scope.authenticate = function(provider) {
      $auth.authenticate(provider)
        .then(function(res) {
          console.log('You have successfully signed in with ' + provider + '!');
          $location.path('/home');
        })
        .catch(function(error) {
          if (error.error) {
            // Popup error - invalid redirect_uri, pressed cancel button, etc.
            console.log(error.error);
          } else if (error.data) {
            // HTTP response error from server
            console.log(error.data.message, error.status);
          } else {
            console.log(error);
          }
        });
    };
});
