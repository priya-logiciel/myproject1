angular
  .module("starter.controllers", [])

  .controller("AppCtrl", function ($scope, $ionicModal, $timeout) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal
      .fromTemplateUrl("templates/login.html", {
        scope: $scope,
      })
      .then(function (modal) {
        $scope.modal = modal;
      });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
      console.log("Doing login", $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function () {
        $scope.closeLogin();
      }, 1000);
    };
  })
  .controller("PlaylistsCtrl", function ($scope, $ionicModal) {
    $scope.numberPerPage = 5;
    $scope.currentPage = 1;
    $scope.userDetail = {};
    $scope.userList = [];
    $scope.searchInput = {};
    //CREATE LIST
    $scope.list = [
      {
        address: "Metro",
        age: 17,
        fname: "Prince",
        id: 1,
        lname: "Kumar",
      },
      {
        address: "Jasiya",
        age: 22,
        fname: "Shivam",
        id: 2,
        lname: "Kumar",
      },
      {
        address: "Tajpur",
        age: 23,
        fname: "Rohit",
        id: 3,
        lname: "kumar",
      },
      {
        address: "Metro",
        age: 19,
        fname: "priyanka",
        id: 4,
        lname: "Kumari",
      },
      {
        address: "Jasiya",
        age: 24,
        fname: "geeta",
        id: 5,
        lname: "Kumari",
      },
    ];
    //MODAL
    $ionicModal
      .fromTemplateUrl("templates/addmodal.html", {
        scope: $scope,
        animation: "slide-in-up",
      })
      .then(function (modal) {
        $scope.modal = modal;
      });
    //open button function
    $scope.openmodal = function () {
      $scope.modal.show();
    };
    //CLOSE BUTTON FUNCTION
    $scope.closeModal = function () {
      $scope.modal.hide();
    };
    //delete function
    $scope.delete = function (index) {
      //Find the record using Index from Array.
      var name = $scope.list[index].Name;
      if ("Do you want to delete: " + name) {
        //Remove the item from Array using Index.
        $scope.list.splice(index, 1);
      }
    };
    //add function
    $scope.addItem = function () {
      $scope.list.push({
        id: new Date().valueOf(),
        fname: $scope.userDetail.fname,
        lname: $scope.userDetail.lname,
        age: $scope.userDetail.age,
        address: $scope.userDetail.address,
      });
      $scope.modal.hide();
    };
    //cancel button function
    $scope.cancelmodal = function () {
      $scope.userDetail = {};
      $scope.modal.hide();
    };
    //search button function
    $scope.searchuser = function () {
      console.log($scope.searchInput);
      $scope.loadlist();
    };
    $scope.loadlist = function () {
      $scope.userList = $scope.list.filter(function (item) {
        return item.fname.includes($scope.searchInput.value);
      });
      console.log($scope.userList);
      console.log($scope.list);
    };

    //pagination next nd previuos button function
    $scope.nextpage = function () {
      currentPage += 1;
    };
    $scope.previouspage = function () {
      currentpage -= 1;
    };
    $scope.checkpage = function () {
      $scope.disabled = currentPage == 1 ? true : false;
      $scope.disabled =
        numberPerPage * currentPage < value.length ? false : true;
    };
    $scope.loadlist();
  });
