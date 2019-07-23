app.controller('forumCommentController', [
		'$scope',
		'forumCommentService',
		'$location',
		'$rootScope',
		'$route',
		'$window',
		function($scope, forumCommentService, $location, $rootScope,$route,$window) {
			console.log("forumCommentController...")

			var self = this;
			self.forumComment = {
			    errorCode : '',
				errorMessage : '',
				forumCommentId : '',
				forumId : '',
				forumComment : '',
				forumCommentDate : '',
				userId : '',
				userName : '',
				
				}
			self.forumComments = [];
			
		//All ForumCommentList...................
			self.fetchAllComments = function() {
				console.log("--> ForumCommentController : calling fetchAllComments method.");
				forumCommentService.fetchAllComments().then(
				function(e) {
				self.forumComments = e;
								}, function(errResponse) {
									console.error('Error while fetchingForumComments...');
								});
					};
					self.fetchAllComments();
					
				//Create ForumComment.............	
					self.createForumComment = function(forumComment) {
						console.log("--> CommentController : calling createForumComment method.");
						forumCommentService.createForumComment(forumComment).then(
								function(e) {
									self.forumComments = e;
									alert('Comment Created Successfully...')
								},
								function(errResponse) {
									console.error('Error while creating comment...');
								});
					};
					
			//ForumComment Details..................		
					self.getSelectedForumComment = function(id) {
						console.log("-->CommentController : calling getSelectedComment method : getting Comment with id : " + id);
						forumCommentService.getSelectedForumComment(id).then(
								function(e) {
									self.forumComment = e;
									console.log('id '+ self.forumComment.forumCommentId);
									$rootScope.forumComment= self.forumComment;
									$location.path('/viewComment');
								}, 
								function(errResponse) {
									console.error('Error while fetching Comment...');
								});
					};
					
									
									//Edit Comment..............
									self.updateComment = function(blogComment,id) {
										console.log("-->CommentController : calling updateBlog method.");
										blogCommentService.updateComment(blogComment,id).then(
								         function(e) {
												self.blogComment = e;
												alert('Comment updated Successfully...')
												console.log(self.blogComment);
												},
										function(errResponse) {
										console.error('Error while updating comment...')
											});
										};
					
					
					
					
			self.reset = function() {
				console.log('submit a new comment', self.comment);
				self.comment = {
                errorCode : '',
                errorMessage : '',
                forumCommentId : '',
                forumId : '',
                forumComment : '',
                forumCommentDate : '',
                userId : '',
                userName : '',



				};
				$scope.myForm.$setPristine(); // reset form...
			};
		} ]);