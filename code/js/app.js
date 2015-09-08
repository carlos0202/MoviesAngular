(function(){
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.products = gems;
		
	});

    //directives
	app.directive('productTitle', function () {
	    return {
	        restrict: 'E',
	        templateUrl: 'product-title.html'
	    }
	});

	app.directive('productPanels', function () {
	    return {
	        restrict: 'E',
	        templateUrl: 'product-panels.html',
	        controller: function () {
	            this.tab = 1;
	            this.selectTab = function (setTab) {
	                this.tab = setTab;
	            };
	            this.isSelected = function (checkTab) {
	                return this.tab === checkTab;
	            };
	        },
	        controllerAs: 'panel'
	    };
	});

	//app.controller('PanelController', function(){
	//	this.tab = 1;

	//	this.selectTab = function(tabNumber){
	//		this.tab = tabNumber;
	//	}

	//	this.isTabSelected = function(tabNumber){
	//		return this.tab === tabNumber;
	//	}
	//});

	app.controller('ReviewController', function () {
	    this.review = {};

	    this.addReview = function (product) {
	        product.reviews.push(this.review);
	        this.review = {};
	    }
	});

    

	var gems = [
		{
			name:  'Dodecaherdron',
			price: 2.95,
			description: 'add a description here, xD',
			canPurchase: true,
			images: [
			{
				"full": "http://atheiman.github.io/codeschool-angular-tutorial/images/gem-01.gif",
				"thumb": "http://atheiman.github.io/codeschool-angular-tutorial/images/gem-01.gif"
			},
			{
				"full": "http://atheiman.github.io/codeschool-angular-tutorial/images/gem-02.gif",
				"thumb": "http://atheiman.github.io/codeschool-angular-tutorial/images/gem-02.gif"
			},
			{
				"full": "http://atheiman.github.io/codeschool-angular-tutorial/images/gem-03.gif",
				"thumb": "http://atheiman.github.io/codeschool-angular-tutorial/images/gem-03.gif"
			}
			],
			reviews: [
				{
					stars: 4,
					body: "I felt in love with this product!",
					author: "Ukelele@mail.com"
				},
				{
					stars: 2,
					body: "This product is terrible!!!",
					author: "jeffTamp@mail.com"
				}
			]
			//soldOut: true,
		},
		{
			name: "Pentagonal Gem",
			price: 3500.35,
			description: "A weird gem found in the Alpes",
			canPurchase: false,
			images: [
			{
				"full": "http://atheiman.github.io/codeschool-angular-tutorial/images/gem-01.gif",
				"thumb": "http://atheiman.github.io/codeschool-angular-tutorial/images/gem-01.gif"
			},
			{
				"full": "http://atheiman.github.io/codeschool-angular-tutorial/images/gem-02.gif",
				"thumb": "http://atheiman.github.io/codeschool-angular-tutorial/images/gem-02.gif"
			},
			{
				"full": "http://atheiman.github.io/codeschool-angular-tutorial/images/gem-03.gif",
				"thumb": "http://atheiman.github.io/codeschool-angular-tutorial/images/gem-03.gif"
			}
			],
			reviews: [
				{
					stars: 5,
					body: "I really like this product!",
					author: "Ukelele@mail.com"
				},
				{
					stars: 1,
					body: "This product sucks!",
					author: "jeffTamp@mail.com"
				}
			],
		},
		];
	})();
