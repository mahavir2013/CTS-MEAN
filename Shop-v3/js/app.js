/**
 * http://usejsdoc.org/
 */

var storeModule = angular.module('store', []);

// Controller
storeModule.controller('StoreController', function($scope) {
	$scope.products = items;
});

storeModule.controller('TabsController', function($scope) {
	$scope.tab = 1; // ng-init="tab=1"
	$scope.changeTab = function(tabValue) {
		$scope.tab = tabValue;
	};
	$scope.isTabSelected = function(tabValue) {
		return $scope.tab === tabValue;
	};
});

// storeModule.controller('ReviewFormController', function($scope) {
// $scope.newReview={author:'nag@gmail.com'};
// $scope.addNewReview=function(product){
// // send to server..
// //
// product.reviews.push($scope.newReview);
// $scope.newReview={author:'nag@gmail.com'};
// };
// });

// Filter
storeModule.filter('priceDiscount', function() {
	return function(originalPrice, discount) {
		//
		if (discount) {
			return originalPrice - discount;
		}
		return originalPrice - 1;
	};
});

// Directives
storeModule.directive('productTitle', function() {
	return {
		restrict : "E",
		scope : false,
		replace : true,
		templateUrl : "templates/product-title.html",
		link : function(scope, jqEle, attr) {
			console.log('link function invoked...');
			jqEle.on('mouseenter', function() {
				jqEle.css('background-color', '#def');
			});
			jqEle.on('mouseleave', function() {
				jqEle.css('background-color', '#fff');
			});
		}
	};
});
storeModule.directive('productTabs', function() {
	return {
		restrict : "E",
		scope : false,
		templateUrl : "templates/product-tabs.html",
		controller : "TabsController"
	};
});
storeModule.directive('productReviewForm', function() {
	return {
		restrict : "E",
		scope : false,
		templateUrl : "templates/product-review-form.html",
		link : function(scope, jqEle, attr, controller, transcludeFunc) {
		},
		controller : function($scope) {
			$scope.newReview = {
				author : 'nag@gmail.com'
			};
			$scope.addNewReview = function(product) {
				// send to server..
				// 
				product.reviews.push($scope.newReview);
				$scope.newReview = {
					author : 'nag@gmail.com'
				};
			};
		}
	};
});

// Model ( Business Data )
var items = [ {
	name : 'Laptop',
	price : 148000, // number
	description : 'New Model',
	canBuy : true,
	notAvailable : false,
	make : Date.now(),
	reviews : [ {
		stars : '5',
		author : 'nag@gmail.com',
		body : 'good one..'
	}, {
		stars : '2',
		author : 'indu@gmail.com',
		body : 'bad one..'
	} ]
}, {
	name : 'Mobile',
	price : 28000,
	description : 'New Model',
	canBuy : true,
	notAvailable : false,
	make : Date.now(),
	reviews : [ {
		stars : '5',
		author : 'nag@gmail.com',
		body : 'good one..'
	}, {
		stars : '2',
		author : 'indu@gmail.com',
		body : 'bad one..'
	} ]
} ];

// Imperative programming
// document.querySelectorAll("h4")[0].innerHTML=item.name;
// document.querySelectorAll("h4")[1].innerHTML=item.price;
// document.querySelector("p").innerHTML=item.description;
