gregApp.controller('homeCtrl', function($scope, $rootScope){
	  $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute){
		$rootScope.animation = currRoute.animation;
	  });
});

gregApp.controller('workCtrl', function($scope){
	console.log("WORK")
	$scope.work = [

		{
			product: "Running Mates",
			description:"Lorem ipsum dolor sit amet, mauris ac lacus vel pellentesque nulla augue, nec massa eget, pede ad odio liber",
			thumb:"",
			url:"http://abcnews.go.com/Politics/fullpage/running-mates-2016-presidential-candidates-spouses-36167995",
			tech:"AngularJS, JSON",
			client:"Disney / ABC News"

		},
		{
			product: "Oscars Brackets",
			description:"Lorem ipsum dolor sit amet, mauris ac lacus vel pellentesque nulla augue, nec massa eget, pede ad odio liber",
			thumb:"",
			url:"http://abcnews.go.com/Politics/fullpage/running-mates-2016-presidential-candidates-spouses-36167995",
			tech:"AngularJS, JSON",
			client:"Disney / ABC News"

		},
		{
			product: "DeepDive Microtool",
			description:"Lorem ipsum dolor sit amet, mauris ac lacus vel pellentesque nulla augue, nec massa eget, pede ad odio liber",
			thumb:"",
			url:"http://abcnews.go.com/Politics/fullpage/running-mates-2016-presidential-candidates-spouses-36167995",
			tech:"AngularJS, JSON",
			client:"Disney / ABC News"

		},
		{
			product: "GMA 40",
			description:"Lorem ipsum dolor sit amet, mauris ac lacus vel pellentesque nulla augue, nec massa eget, pede ad odio liber",
			thumb:"",
			url:"http://abcnews.go.com/Politics/fullpage/running-mates-2016-presidential-candidates-spouses-36167995",
			tech:"AngularJS, JSON",
			client:"Disney / ABC News"

		},
		{
			product: "Notesday",
			description:"Lorem ipsum dolor sit amet, mauris ac lacus vel pellentesque nulla augue, nec massa eget, pede ad odio liber",
			thumb:"",
			url:"http://abcnews.go.com/Politics/fullpage/running-mates-2016-presidential-candidates-spouses-36167995",
			tech:"AngularJS, JSON",
			client:"Disney / ABC News"

		},
		{
			product: "Before/After Tool",
			description:"Lorem ipsum dolor sit amet, mauris ac lacus vel pellentesque nulla augue, nec massa eget, pede ad odio liber",
			thumb:"",
			url:"http://abcnews.go.com/Politics/fullpage/running-mates-2016-presidential-candidates-spouses-36167995",
			tech:"AngularJS, JSON",
			client:"Disney / ABC News"

		},	
		{
			product: "In A Minute",
			description:"Lorem ipsum dolor sit amet, mauris ac lacus vel pellentesque nulla augue, nec massa eget, pede ad odio liber",
			thumb:"",
			url:"http://abcnews.go.com/Politics/fullpage/running-mates-2016-presidential-candidates-spouses-36167995",
			tech:"AngularJS, JSON",
			client:"Disney / ABC News"

		},	
		{
			product: "Air Force One Interactive",
			description:"Lorem ipsum dolor sit amet, mauris ac lacus vel pellentesque nulla augue, nec massa eget, pede ad odio liber",
			thumb:"",
			url:"http://abcnews.go.com/Politics/fullpage/running-mates-2016-presidential-candidates-spouses-36167995",
			tech:"AngularJS, JSON",
			client:"Disney / ABC News"

		},														
	]
})


