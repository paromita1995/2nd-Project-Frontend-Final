app.factory('blogCommentService', ['$http', '$q', '$rootScope',
		function($http, $q, $rootScope) {
			console.log("blogCommentService...")

			var BASE_URL = 'http://localhost:8082/Articulation'
				return {
				//All Blog List............................
				fetchAllComments : function() {
					console.log("--> CommentService : calling 'fetchAllcomments' method.");
									return $http
									.get(BASE_URL + '/blogCommentlist')
									.then(function(response) {
									return response.data;
										}, 
									function(errResponse) {
									console.error('Error while fetching comments');
									return $q.reject(errResponse);
										});
				                   },
				                   
				         
									
									//BlogComment Details by blog id..............................	
									
									getSelectedBlogComment : function(id) {
										console.log("-->BlogCommentService : calling getSelectedBlogComment() method with id : " + id);
										return $http
											.get(BASE_URL+'/commentByBlogId/'+ id)
											.then(function(response) {
												alert(response.data);
											$rootScope.selectedBlogComment = response.data;
											
											return response.data;
												},
											function(errResponse) {
											console.error('Error while Fetching blogcomment.');
											return $q.reject(errResponse);
														});
											},	
													
									    
										     //Edit BlogComment...............		
													updateComment : function(blogComment, id) {
												     console.log("--> BlogCommentService : calling 'updateBlogComment' method.");
													return $http
												    .put(BASE_URL+'/updateBlogComment/'+id, blogComment)
													.then(function(response) {
												     return response.data;
													 },
													function(errResponse) {
												    console.error('Error while updating Blog...');
											    	return $q.reject(errResponse);
												     });
													},
						
			
																		     
				                   
						
			
			
			};


				
			
}]);