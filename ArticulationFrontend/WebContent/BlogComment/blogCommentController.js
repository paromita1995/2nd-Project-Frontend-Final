app.controller('blogCommentController', [
		'$scope',
		'blogCommentService',
		'$location',
		'$rootScope',
		'$route',
		'$window',
		function($scope, blogCommentService, $location, $rootScope,$route,$window) {
			console.log("blogCommentController...")

			var self = this;
			self.blogComment = {
			    errorCode : '',
				errorMessage : '',
				blogCommentId : '',
				blogId : '',
				userId : '',
				blogComment : '',
				userName : '',
				blogCommentDate : '',
				
				}
			self.blogComments = [];
		//All BlogCommentList...................
			self.fetchAllComments = function() {
				console.log("--> BlogCommentController : calling fetchAllComments method.");
				blogCommentService.fetchAllComments().then(
				function(e) {
				self.blogComments = e;
								}, function(errResponse) {
									console.error('Error while fetchingBlogComments...');
								});
					};
					self.fetchAllComments();
				
					
			//Comment Details by CommentId..................		
					self.getSelectedBlogComment = function(id) {
						console.log("-->CommentController : calling getSelectedComment method : getting Comment with id : " + id);
						blogCommentService.getSelectedBlogComment(id).then(
								function(e) {
									self.blogComment = e;
									console.log('id '+ self.blogComment.blogCommentId);
									$rootScope.blogComment= self.blogComment;
									$location.path('/commentDetails');
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
                blogCommentId : '',
				blogId : '',
				userId : '',
				blogComment : '',
				userName : '',
				blogCommentDate : '',



				};
				$scope.myForm.$setPristine(); // reset form...
			};
		} ]);