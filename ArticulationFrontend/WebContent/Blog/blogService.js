app.factory('blogService', ['$http', '$q', '$rootScope',
		function($http, $q, $rootScope) {
			console.log("blogService...")

			var BASE_URL = 'http://localhost:8082/Articulation'
				return {
				
				//fetch All Blogs....................
				fetchAllBlogs : function() {
					console.log("--> blogService : calling 'fetchAllblogs' method.");
						return $http
				        .get(BASE_URL + '/bloglist')
						.then(function(response) {
						return response.data;
							}, 
						function(errResponse) {
						console.error('Error while fetching blogs');
						return $q.reject(errResponse);
							});
				        },
						//selected blogDetails	by blog id......................			
									
									getSelectedBlog : function(id) {
										console.log("-->blogService : calling getSelectedBlog() method with id : " + id);
										return $http
											.get(BASE_URL+'/blog/'+ id)
											.then(function(response) {
											$rootScope.selectedBlog = response.data;
											return response.data;
												},
											function(errResponse) {
											console.error('Error while Fetching blog.');
											return $q.reject(errResponse);
														});
											},	
									
									
					//create blog ............................
											
											createBlog : function(blog) {
													console.log("--> blogService : calling 'createBlog' method.");
													return $http
													.post(BASE_URL + '/createNewBlog/', blog)
													.then(function(response) {
													return response.data;
															}, 
													function(errResponse) {
														console.error('Error while creating blog');
														return $q.reject(errResponse);
															});
													},
													
													
			//create BlogComment by blogId...............................
													
													createBlogComment : function(blogComment)
													{
														console.log("-->blogService : calling 'createBlogComment' method.");
														return $http.post(BASE_URL + '/createBlogComment/', blogComment).then
														(function(response)
																{
																		return response.data;
																}, 
																function(errResponse) 
																{
																		console.error('Error while creating blogComment');
																		return $q.reject(errResponse);
																}
														);
													},
																
													
													
									
								
																		
																						
																		
																		
							//update blog..............................
																							
																							updateBlog : function(blog, id) {
																								console.log("--> blogService : calling 'updateBlog' method.");
																								return $http
																											.put(BASE_URL+'/updateBlog/'+id, blog)
																											.then(function(response) {
																												return response.data;
																											},
																											function(errResponse) {
																												console.error('Error while updating Blog...');
																												return $q.reject(errResponse);
																											});
																							},						
																		
			
	//	fetchAllApprovedBlogs......................	
			
			fetchAllApprovedBlogs : function() {
				console.log("--> BlogService : calling 'fetchAllApprovedBlogs' method.");
				return $http
				.get(BASE_URL + '/approvedListOfBlog')
				.then(function(response) 
				{
				return response.data;
				}, 
				function(errResponse) 
				{
				console.error('Error while fetching Uss');
				return $q.reject(errResponse);
				});
				},


// likeBlog by blog Id...................

likeBlog : function(blog, id) 
{
	console.log("-->BlogService : calling likeBlog() method : getting blog with id : " + id);
	return $http.put(BASE_URL+'/likeBlog/'+id, blog).then
				(function(response) 
				{
					return response.data;
				},
				function(errResponse)
				{
					console.log("Error while liking Blog.");
					return $q.reject(errResponse);
				});
				
},


//Blog approved by Admin...........
approveBlog : function(blog, id)
{
	console.log("-->BlogService : calling approveBlog() method : getting blog with id : " + id);
	return $http.put(BASE_URL+'/approvedBlog/'+ id, blog).then
				(function(response) 
				{
					return response.data;
				},
				function(errResponse) 
				{
					console.log("Error while approving Blog");
					return $q.reject(errResponse);
				}
				);
},


//Blog reject by Admin..................
rejectBlog : function(blog, id) 
{
	console.log("-->BlogService : calling rejectBlog() method : getting blog with id : " + id);
	return $http.put(BASE_URL+'/rejectedBlog/'+ id, blog).then
				(function(response)
				{
					return response.data;
				},
				function(errResponse)
				{
					console.log("Error while rejecting Blog");
					return $q.reject(errResponse);
				}
			    );
},

// fetchAllBlogLikes by blog id...........
fetchAllBlogLikes : function(id)
{
	console.log("-->BlogService : calling 'fetchAllBlogLikes' method for id : " + id);
	return $http.get(BASE_URL + '/bloglike/'+id).then
	(function(response) 
			{
					$rootScope.selectedBlogLikes = response.data;
					return response.data;
			}, 
				function(errResponse) {
					console.error('Error while fetching BlogLikes');
					return $q.reject(errResponse);
				});
},

//get my blogs...........


			};

}]);