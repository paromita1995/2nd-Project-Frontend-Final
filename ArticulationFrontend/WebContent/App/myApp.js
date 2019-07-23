var app = angular.module("myApp", ['ngRoute']);
app.config(['$routeProvider',function($routeProvider) {
	$routeProvider   
    
  // ******************************* User **************************************************************************//
    .when('/listUser', {
			templateUrl: 'User/listUser.html',
			controller: 'userController as contro'
		

}) 

 .when('/createUser', {
			templateUrl: 'User/createUser.html',
			controller: 'userController as contro'
		

})


.when('/login', {
			templateUrl: 'User/login.html',
			controller: 'userController as contro'
		

})

.when('/profile', {
			templateUrl: 'User/profile.html',
			controller: 'userController as contro'
})

.when('/logout', {
			templateUrl: '',
			controller: 'userController as contro'
		

})
.when('/editProfile', {
			templateUrl: 'User/editProfile.html',
			controller: 'userController as contro'
}) 

.when('/myProfile', {
			templateUrl: 'User/myProfile.html',
			controller: 'userController as contro'
		

})


//*************************************** Blog ***************************************************************************//
	
.when('/allBlogs', {
	templateUrl: 'Blog/allBlogs.html',
	controller: 'blogController as contro'
})
.when('/createBlog', {
	templateUrl: 'Blog/createBlog.html',
	controller: 'blogController as contro'
})
.when('/blogDetails', {
	templateUrl: 'Blog/blogDetails.html',
	controller: 'blogController as contro'
})
.when('/approvedBlogList', {
	templateUrl: 'Blog/approvedBlogList.html',
	controller: 'blogController as contro'
})


.when('/editBlog', {
	templateUrl: 'Blog/editBlog.html',
	controller: 'blogController as contro'
})

.when('/myBlogs', {
	templateUrl: 'Blog/myBlogs.html',
	controller: 'blogController as contro'
})

//*************************************** Forum ******************************************************************//
.when('/forumList', {
	templateUrl: 'Forum/forumList.html',
	controller: 'forumController as contro'
})
.when('/createForum', {
	templateUrl: 'Forum/createForum.html',
	controller: 'forumController as contro'
})
.when('/forumDetails', {
	templateUrl: 'Forum/forumDetails.html',
	controller: 'forumController as contro'
})
.when('/editForum', {
	templateUrl: 'Forum/editForum.html',
	controller: 'forumController as contro'
})

.when('/approvedForumList', {
	templateUrl: 'Forum/approvedForumList.html',
	controller: 'forumController as contro'
})

.when('/myForum', {
	templateUrl: 'Forum/myForum.html',
	controller: 'forumController as contro'
})
//*************************************** Blog Comment **************************************************************//

.when('/commentList', {
	templateUrl: 'BlogComment/commentList.html',
	controller: 'blogCommentController as contro'
})
.when('/createComment', {
	templateUrl: 'BlogComment/createComment.html',
	controller: 'blogCommentController as contro'
})
.when('/commentDetails', {
	templateUrl: 'BlogComment/commentDetails.html',
	controller: 'blogCommentController as contro'
})
.when('/editComment', {
	templateUrl: 'BlogComment/editComment.html',
	controller: 'blogCommentController as contro'
})

//*************************************** Forum Comment **************************************************************//

.when('/forumCommentList', {
	templateUrl: 'ForumComment/forumCommentList.html',
	controller: 'forumCommentController as contro'
})
.when('/newComment', {
	templateUrl: 'ForumComment/newComment.html',
	controller: 'forumCommentController as contro'
})
.when('/viewComment', {
	templateUrl: 'ForumComment/viewComment.html',
	controller: 'forumCommentController as contro'
})

//*************************************** Job **************************************************************//
.when('/viewJob', {
	templateUrl: 'Job/viewJob.html',
	controller: 'JobController as m'
})
.when('/addJob', {
	templateUrl: 'Job/addJob.html',
	controller: 'JobController as m'
})

.when('/viewJobById', {
	templateUrl: 'Job/viewJobById.html',
	controller: 'JobController as m'
})
.when('/updateJob', {
	templateUrl: 'Job/updateJob.html',
	controller: 'JobController as m'
})

.when('/jobApplied', {
	templateUrl: 'Job/jobApplied.html',
	controller: 'JobController as m'
})
.when('/allJobApplications', {
	templateUrl: 'Job/allJobApplications.html',
	controller: 'JobController as m'
})

//******************************************** Friend *******************************************************************//
		
		.when('/friend', {
			templateUrl: 'Friend/friend.html',
			controller: 'friendController as contro'
		})
		
		.when('/friendRequest', {
			templateUrl: 'Friend/friendRequest.html',
			controller: 'friendController as contro'
		})
		
		.when('/viewFriendProfile', {
			templateUrl: 'Friend/viewFriendProfile.html',
			controller: 'friendController as contro'
		})
		
//******************************************** Chat *******************************************************************//		
		.when('/chat', {
			templateUrl : 'Chat/chat.html',
			controller : 'ChatController as contro'
		})
//******************************************** Image Upload *******************************************************************//		
	.when('/ImageUpload', {
		templateUrl : 'Image/ImageUpload.html',
		controller : 'ImageController as ctrl'
	})
	
		// notification for users
		
		.when('/notificationindetail',{
				templateUrl: 'Notification/notificationindetail.html',
				controller: 'NotificationController as m'
	    })
	    
	    
}]);
		
		  // for uoloading image 
	    
		
app.directive('fileModel', ['$parse', function ($parse) {
    return {
       restrict: 'A',
       link: function(scope, element, attrs) {
          var model = $parse(attrs.fileModel);
          var modelSetter = model.assign;
          
          element.bind('change', function(){
             scope.$apply(function(){
                modelSetter(scope, element[0].files[0]);
             });
          });
       }
    };
 }]);