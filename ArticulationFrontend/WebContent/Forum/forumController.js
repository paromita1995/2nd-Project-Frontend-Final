app.controller('forumController', [
		'$scope',
		'forumService',
		'forumCommentService',
		'$location',
		'$rootScope',
		'$route',
		'$window',
		function($scope, forumService,forumCommentService, $location, $rootScope,$route,$window) {
			console.log("forumController...")

			var self = this;
			self.user = {
			    errorCode : '',
				errorMessage : '',
				forumId : '',
				forumName : '',
				forumDescription : '',
				userId : '',
				userName : '',
				forumCreationDate : '',
				forumStatus : '',
				forumCountComment : '',
				forumUserCount : '',
				}
			self.forums = [];
			self.forumComments = [];
			
			//fetching all forums.............
			self.fetchAllForums = function() {
				console.log("--> forumController : calling fetchAllForum method.");
				forumService.fetchAllForums().then(
				function(e) {
				self.forums = e;
								}, function(errResponse) {
									console.error('Error while fetching Forums...');
								});
					};
				self.fetchAllForums();
		//Create Forum...................		
				self.createForum = function(forum) {
					console.log("--> ForumController : calling createUser method.");
					forumService.createForum(forum).then(
							function(e) {
								self.forums = e;
								alert('Forum Created Successfully...')
								$location.path('/index');
							},
							function(errResponse) {
								console.error('Error while creating forum...');
							});
				};
				
				
					
			//Forum Details...................		
				self.getSelectedForum = function(id) {
					console.log("-->forumController : calling getSelectedForum method : getting forum with id : " + id);
					forumService.getSelectedForum(id).then(
							function(e) {
							self.forum = e;
							console.log('id '+ self.forum.forumId);
							$rootScope.forum= self.forum;
							console.log(' r id '+ $rootScope.forum.forumId);
							$location.path('/forumDetails');
							self.getSelectedForumComment(id);
							console.log('comments '+$rootScope.forumComment);
								}, 
							function(errResponse) {
							console.error('Error while fetching Forum...');
								});
									};
				
					//Edit Forum..............
					self.updateForum = function(forum,id) {
						console.log("-->ForumController : calling updateForum method.");
						forumService.updateForum(forum,id).then(
				         function(e) {
								self.forum = e;
								alert('Forum updated Successfully...')
								console.log(self.forum);
								},
						function(errResponse) {
						console.error('Error while updating forum...')
							});
						};
						
						// getSelectedForumComment by forumId...................
	  					
	  					self.getSelectedForumComment = function(id) {
							console.log("-->ForumCommentController : calling getSelectedForumComment method : getting forumComment with id : " + id);
							forumCommentService.getSelectedForumComment(id).then(
									function(e) {
									self.forumComments = e;
									console.log(self.forumComment);
									console.log('id '+ self.forumComments.forumCommentId);
									$rootScope.forumComments= self.forumComments;
									console.log(' r id '+ $rootScope.forumComments.forumCommentId);
									
										}, 
									function(errResponse) {
									console.error('Error while fetching forumComment...');
										});
											};
											
											self.createForumComment = function(forumComment) {
												forumComment.forumId= $rootScope.forum.forumId ;
												console.log("-->forumController : calling 'createForumComment' method.", forumComment);
												console.log("-->forumController ForumId :" +forumComment.forumId);
												forumService.createForumComment(forumComment).then
															(function(e) 
															{
																console.log('Current User :',$rootScope.currentUser.userId)
																self.forumComment = e;
																console.log(self.forumComment)
																self.getSelectedForumComment(self.forumComment.forumId);
																$location.path('/forumDetails');
																
															},
															function(errResponse) {
																console.error('Error while creating forumComment...');
															}
															);
											};	
											
											// Forum approve by admin......................					  					
						  					self.approveForum = function(forum, id)
						  					{
						  						console.log("-->ForumController : calling approveForum() method : Forum id is : " + id);
						  						console.log("-->ForumController",self.forum);
						  						forumService.approveForum(forum, id).then
						  						(
						  								function(e)
						  								{
						  								alert('Accept Forum?'),
						  								self.forum=e,
						  								
						  								$location.path('/forumList');
						  								},
						  								function(errResponse) 
						  								{
						  									console.error("Error while approving forum...")
						  								});
						  						
						  					};
						  					
						  				//Forum reject by admin........................				
						  					self.rejectForum = function(forum, id) 
						  					{
						  						console.log("-->ForumController : calling rejectForum() method : Forum id is : " + id);
						  						console.log("-->ForumController",self.forum);
						  						forumService.rejectForum(forum, id).then
						  						(
						  								function(e)
						  								{
						  								alert('Reject Forum?'),
						  								self.forum=e,
						  								
						  								$location.path('/forumList');
						  								},
						  								function(errResponse) 
						  								{
						  									console.error("Error while rejecting forum...")
						  								}
						  						);
						  					};
						  					
//						  					fetchAllApprovedForums..........			  					
						  					
						  					self.fetchAllApprovedForums = function() {
						  						console.log("--> ForumController : calling fetchAllAprovedForums method.");
						  						forumService.fetchAllApprovedForums().then(
						  						function(e) {
						  						self.approvedForums = e;
						  								}, 
						  						function(errResponse) {
						  						console.error('Error while fetching Forums...');
						  								});
						  					};
						  					
						  					self.fetchAllApprovedForums();
						
						  					
						  				// getMyForums................										
															
						
						
						
						
			self.reset = function() {
				console.log('submit a new Forum', self.user);
				self.user = {
						errorCode : '',
						errorMessage : '',
						forumId : '',
						forumName : '',
						forumDescription : '',
						userId : '',
						userName : '',
						forumCreationDate : '',
						forumStatus : '',
						forumCountComment : '',
						forumUserCount : '',
						};
				$scope.myForm.$setPristine(); // reset form...
			};
		} ]);