
// USER DASHBOARD
app.controller("MainController", function($scope,$auth,$compile,$timeout, uiCalendarConfig){
   $scope.currentUser = $auth.getPayload().user;
   // $scope.jobs = [{name:"Google",position:"Software Engineer",description:"Searching for someone with experience in NodeJS, AngularJS, JavaScript and SQL.",experience:"5 Years",education:"BA Computer Science"},
   // {name:"Ebay",position:"Front End Engineer",description:"Searching for someone with experience in NodeJS, AngularJS, JavaScript and SQL.",experience:"5 Years",education:"BA Computer Science"},
   // {name:"Facebook",position:"Backend Software Engineer",description:"Searching for someone with experience in NodeJS, AngularJS, JavaScript and SQL.",experience:"5 Years",education:"BA Computer Science"}]
   // $scope.details = true;
   $scope.showDetails = function(){
    $scope.details = $scope.details ? false : true;
    }

    $scope.formVisible = false;
  
    $scope.jobs = [
      {
        name: "Cattle Empire, LLC",
        position: "Staff Accountant",
        description: "This position reports financial performance, performs various accounting and banking duties, and provides financial expertise to others in the company.",
        image: "https://pbs.twimg.com/profile_images/3354297056/4cf064bd5891504e21d888fea0bcaaf8_400x400.png",
        postRating: 0,
        category: "Business",
        salary: "$60k-80k"
        // job_title: "Health Care"
      },  
      {
        name: "Endsight",
        position: "Help Desk Engineer",
        description: "A Help Desk Engineer provides support to Endsight’s clients on all supported networks, platforms, and applications. Generally, the person in this role troubleshoots and then determines the source of the computer problems, and advises/implements appropriate action/solutions.",
        image: "https://pbs.twimg.com/profile_images/1174150167/Arrow_Bug_reversed.jpg",
        postRating: 0,
        category: "Information Technology",
        salary: "$40k-50k"

      },
      {
        name: "Polyclinic",
        position: "IT Help Desk Analyst",
        description: "The IT Help Desk Analyst’s primary role is to act as a first-level problem identification and resolution resource for physicians, administrators, patients, and other Polyclinic employees.  This includes: answering questions, providing advice, troubleshooting, coordinating resolution with other IT groups, and following-up with users to help them solve their IT and EHR problems.",
        image: "https://www.nhgp.com.sg/uploadedImages/About_Us/V_NHGP_logo_RGB(1).png",
        postRating: 0,
        category: "Information Technology",
        salary: "$60k-80k"
      },
      {
        name: "Critical Mass",
        position: "Technical Support Analyst",
        description: "The Technical Support Analyst provides support covering all aspects of Critical Mass’ desktop computing environment. This includes providing support from building new systems to supporting the end user on PC or Mac platforms. This role requires a motivated, personable individual willing to learn all aspects of supporting our dynamic environment in a team setting. The Technical Support Analyst is part of a team that applies the latest Internet technologies in creating world class on-line experiences for our clients.",
        image: "https://media.glassdoor.com/lst/15389/critical-mass-office.jpg",
        postRating: 0,
        category: "Business",
        salary: "$60k-80k"
      }    
    ];
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

app.controller('ProfileController', function($scope, $location, $auth) {
     $scope.currentUser = $auth.getPayload().user;


  });

app.controller('TrainingController', function($scope,$location, $auth) {
  $scope.training = [{name:"VetsInTech",website:"www.vetsintech.com"},{name:"VetForce",website:"veterans.force.com"}]
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

app.controller('ProfileController', function($location, $auth) {

  });

app.controller('PostJobController', function($location, $auth) {

  });
