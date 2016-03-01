
var work= [
		{
			id:1,
			product: "DeepDive Microtool",
			whatisit:"In-house microtool used at ABC News Digital. This microtool allows an editor to build a long form, fully-responsive story-telling experience, without having to code the blocks from scratch.",
			howitworks: "The microtool communicates with the ABC News CMS Rest API via ajax to create, update and delete (CRUD). User's login with their credentials and begin the process. The microtool outputs markup based on the user interactions, including text input, image input, video input, etc. Once the page is ready, the microtool communictaes via REST and creates a general object that acts as the Deep Dive page",
			techused: ["AngularJS", "REST", "AJAX", "Bootstrap", "JavaScript & jQuery"],
			thumb:"thumb3.jpg",
			screenshots: ["thumb1.jpg", "thumb2.jpg", "thumb3.jpg", "thumb4.jpg", "thumb5.jpg", "thumb6.jpg"],
			url:"http://abcnews.go.com/Politics/fullpage/running-mates-2016-presidential-candidates-spouses-36167995",
			tech:"AngularJS, JSON",
			client:"Disney / ABC News"

		},	
		{
			id:2,
			product: "Oscars Brackets",
			description:"Lorem ipsum dolor sit amet, mauris ac lacus vel pellentesque nulla augue, nec massa eget, pede ad odio liber",
			thumb:"thumb1.jpg",
			url:"http://abcnews.go.com/Politics/fullpage/running-mates-2016-presidential-candidates-spouses-36167995",
			tech:"AngularJS, JSON",
			client:"Disney / ABC News"

		},
		{
			id:3,
			product: "Running Mates",
			description:"Lorem ipsum dolor sit amet, mauris ac lacus vel pellentesque nulla augue, nec massa eget, pede ad odio liber",
			thumb:"thumb2.jpg",
			url:"http://abcnews.go.com/Politics/fullpage/running-mates-2016-presidential-candidates-spouses-36167995",
			tech:"AngularJS, JSON",
			client:"Disney / ABC News"

		},		
		{
			id:4,
			product: "Notesday",
			description:"Lorem ipsum dolor sit amet, mauris ac lacus vel pellentesque nulla augue, nec massa eget, pede ad odio liber",
			thumb:"thumb6.jpg",
			url:"http://abcnews.go.com/Politics/fullpage/running-mates-2016-presidential-candidates-spouses-36167995",
			tech:"AngularJS, JSON",
			client:"Disney / ABC News"

		},
		{
			id:5,
			product: "Before/After Tool",
			description:"Lorem ipsum dolor sit amet, mauris ac lacus vel pellentesque nulla augue, nec massa eget, pede ad odio liber",
			thumb:"thumb4.jpg",
			url:"http://abcnews.go.com/Politics/fullpage/running-mates-2016-presidential-candidates-spouses-36167995",
			tech:"AngularJS, JSON",
			client:"Disney / ABC News"

		},	
		{
			id:6,
			product: "In A Minute",
			description:"Lorem ipsum dolor sit amet, mauris ac lacus vel pellentesque nulla augue, nec massa eget, pede ad odio liber",
			thumb:"thumb5.jpg",
			url:"http://abcnews.go.com/Politics/fullpage/running-mates-2016-presidential-candidates-spouses-36167995",
			tech:"AngularJS, JSON",
			client:"Disney / ABC News"

		},	
		{
			id:7,
			product: "Air Force One Interactive",
			description:"Lorem ipsum dolor sit amet, mauris ac lacus vel pellentesque nulla augue, nec massa eget, pede ad odio liber",
			thumb:"",
			url:"http://abcnews.go.com/Politics/fullpage/running-mates-2016-presidential-candidates-spouses-36167995",
			tech:"AngularJS, JSON",
			client:"Disney / ABC News"

		},														
	]
gregApp.controller('homeCtrl', function($scope, $rootScope){
	  $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute){
		$rootScope.animation = currRoute.animation;
	  });
$rootScope.isProject = "false";	  
}).controller('workCtrl', function($scope, $location, $rootScope){
	$rootScope.isProject = "false";
	console.log("WORK")
	$scope.work = work;

	$scope.showProject = function($event){
		var thisId = angular.element(event.currentTarget).data('id');
		$location.path('work/projects/' + thisId)
	}
}).controller('projectCtrl', function($scope, $routeParams, $rootScope, $timeout){
	$rootScope.isProject = "true";
	$rootScope.work = work;
	$scope.projectid = $routeParams.id;
	console.log(parseInt($routeParams.id))
	for (var i = 0; i < $scope.work.length; i++){
				if (parseInt($routeParams.id) === $scope.work[i].id){
					console.log("workeddd")
					$scope.project = $scope.work[i];

				}

	}
  $timeout(function(){
  	$('.activeproject').removeClass('activeproject');
	$('.directory li').eq(parseInt($routeParams.id)-1).addClass('activeproject');

  }, 10)


})


