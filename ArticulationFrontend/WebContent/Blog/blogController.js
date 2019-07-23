     app.controller('blogController', [
		'$scope',
		'blogService',
		'blogCommentService',
		'$location',
		'$rootScope',
		'$route',
		'$window',
		function($scope, blogService,blogCommentService, $location, $rootScope,$route,$window) {
			console.log("blogController...")

			var self = this;
			self.blog = {
			    errorCode : '',
				errorMessage : '',
				blogId : '',
				blogContent : '',
				blogTitle : '',
				blogDate : '',
				userId : '',
				blogStatus : '',
				blogCountLike : '',
				blogCommentCount : '',
				}
			self.blogs = [];
			
			self.blogComments = [];
			
			
			
			self.blogLike={
					
					errorCode : '',
		    		errorMessage : '',
	 				blogLikeId:'',
					userId:'',
					blogId:'',
					userName:'',
					blogLikeDate:'',
	    		
	    	}
	    
	    self.blogLikes=[];
			
			
			
			
			
			
			//fetching all blogs........................
			self.fetchAllBlogs = function() {
				console.log("--> BlogController : calling fetchAllBlogs method.");
				blogService.fetchAllBlogs().then(
				function(s) {
				self.blogs = s;
								}, function(errResponse) {
									console.error('Error while fetchingBlogs...');
								});
					};
					self.fetchAllBlogs();
       
				
				
				
				
				
				
				
				//show blogDetails by Id..........................
					
				self.getSelectedBlog = function(id) {
					console.log("-->blogController : calling getSelectedBlog method : getting blog with id : " + id);
					blogService.getSelectedBlog(id).then(
							function(d) {
							self.blog = d;
							console.log('id '+ self.blog.blogId);
							$rootScope.blog= self.blog;
							console.log(' r id '+ $rootScope.blog.blogId);
							$location.path('/blogDetails');
							self.getSelectedBlogComment(id);
							console.log('comments '+$rootScope.blogcomment);
								}, 
							function(errResponse) {
							console.error('Error while fetching Blog...');
								});
									};
						
									
				
				//create blog...........................
									self.createBlog = function(blog) {
										console.log("--> BlogController : calling createBlog method.");
										blogService.createBlog(blog).then(
												function(e) {
													self.blogs = e;
													alert('Blog Created Successfully...')
													$location.path('/index');
												},
												function(errResponse) {
													console.error('Error while creating blog...');
												});
									};
								  					
								  					
								  					
								  					
								  // getSelectedBlogComment by blogId...................
								  					
								  					self.getSelectedBlogComment = function(id) {
														console.log("-->BlogCommentController : calling getSelectedBlogComment method : getting blogComment with id : " + id);
														blogCommentService.getSelectedBlogComment(id).then(
																function(d) {
																self.blogComments = d;
																console.log(self.blogComment);
																console.log('id '+ self.blogComments.blogCommentId);
																$rootScope.blogComments= self.blogComments;
																console.log(' r id '+ $rootScope.blogComments.blogCommentId);
																
																	}, 
																function(errResponse) {
																console.error('Error while fetching BlogComment...');
																	});
																		};	
																		
												//created blogComment.................................... 	
																		self.createBlogComment = function(blogComment) {
																			blogComment.blogId= $rootScope.blog.blogId ;
																			console.log("-->blogController : calling 'createBlogComment' method.", blogComment);
																			console.log("-->blogController BlogId :" +blogComment.blogId);
																			blogService.createBlogComment(blogComment).then
																						(function(d) 
																						{
																							console.log('Current User :',$rootScope.currentUser.userId)
																							self.blogComment = d;
																							console.log(self.blogComment)
																							
																							self.getSelectedBlogComment(self.blogComment.blogId);
																							$location.path('/blogDetails');
																						},
																						function(errResponse) {
																							console.error('Error while creating blogComment...');
																						}
																						);
																		};				
							
																		
																		
																	
								  									  					
								  									  					
								  									  					
								  									  					
								  									  					
								  									  					
								  									  					
				
				
						
				                            //update Blog.....................................
				
				          

												  					self.updateBlog = function(blog, id) {
												  						console.log("--> blogController : calling updateBlog method.");
												  						blogService.updateBlog(blog, id).then(function(d) {
												  							self.blogs = d;
												  							$location.path('/EditBlog');
												  							}, function(errResponse) {
												  								console.error('--> blogController : Error while updating Blog...');
												  							});
												  					};
												  					
												  					
												  					
							// blog approve by admin......................					  					
												  					self.approveBlog = function(blog, id)
												  					{
												  						console.log("-->BlogController : calling approveBlog() method : Blog id is : " + id);
												  						console.log("-->BlogController",self.blog);
												  						blogService.approveBlog(blog, id).then
												  						(
												  								function(d)
												  								{
												  								alert('Accept Blog?'),
												  								self.blog=d,
												  								
												  								$location.path('/allBlogs');
												  								},
												  								function(errResponse) 
												  								{
												  									console.error("Error while approving blog...")
												  								});
												  						
												  					};
												  					
												  					
								//	fetchAllApprovedBlogs..........			  					
												  					
												  					self.fetchAllApprovedBlogs = function() {
												  						console.log("--> BlogController : calling fetchAllAprovedBlogs method.");
												  						blogService.fetchAllApprovedBlogs().then(
												  						function(d) {
												  						self.approvedBlogs = d;
												  								}, 
												  						function(errResponse) {
												  						console.error('Error while fetching Blogs...');
												  								});
												  					};
												  					
												  					self.fetchAllApprovedBlogs();
												  	//Blog reject by admin........................				
												  					self.rejectBlog = function(blog, id) 
												  					{
												  						console.log("-->BlogController : calling rejectBlog() method : Blog id is : " + id);
												  						console.log("-->BlogController",self.blog);
												  						blogService.rejectBlog(blog, id).then
												  						(
												  								function(d)
												  								{
												  								alert('Reject Blog?'),
												  								self.blog=d,
												  								
												  								$location.path('/allBlogs');
												  								},
												  								function(errResponse) 
												  								{
												  									console.error("Error while rejecting blog...")
												  								}
												  						);
												  					};
				
				
				
		//****************************************** Blog Like ************************************************//		
				
													//like blog by blog id................						
																	self.likeBlog = function(blog, id)
																	{
																		console.log("-->BlogController : calling likeBlog() method : Blog id is : "+id);
																		console.log("-->BlogController", self.blog);
																		blogService.likeBlog(blog, id).then
																		( function() 
																			{
																			self.getSelectedBlog(id);
																			self.listblogs;
																			self.fetchAllBlogLikes(id);
																			$location.path('/blogDetails');
																			} ,
																			function(errResponse)
																			{
																				console.error("Error while liking the blog...");
																			});
																		
																		
																	};
																	
																	
												//	fetchAllBlogLikes by blog id.............				
																	self.fetchAllBlogLikes = function(id)
																	{
																		console.log("-->BlogController : calling fetchAllBlogLikes method with id : "+ id);
																		blogService.fetchAllBlogLikes(id).then
																		(function(d) 
																		{
																			self.blogLikes = d;
																		},
																		function(errResponse) 
																		{
																			console.error('Error while fetching BlogLikes...');
																		}
																		);
																	};
							// getMyBlogs................										
																	
																	
																	
				
				
				
				
					self.reset = function() {
						console.log('submit a new Blog', self.blogs);
						self.blog = {
							    errorCode : '',
								errorMessage : '',
								blogId : '',
								blogContent : '',
								blogTitle : '',
								blogDate : '',
								userId : '',
								blogStatus : '',
								blogCountLike : '',
								blogCommentCount : '',
								

						};
						$scope.myForm.$setPristine(); // reset form...
					};
		} ]);