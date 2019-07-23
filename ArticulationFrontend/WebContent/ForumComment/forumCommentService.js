app.factory('forumCommentService', ['$http', '$q', '$rootScope',
		function($http, $q, $rootScope) {
			console.log("forumCommentService...")

			var BASE_URL = 'http://localhost:8082/Articulation'
				return {
				//All ForumComment List............................
				fetchAllComments : function() {
					console.log("--> CommentService : calling 'fetchAllcomments' method.");
									return $http
									.get(BASE_URL + '/forumCommentlist')
									.then(function(response) {
									return response.data;
										}, 
									function(errResponse) {
									console.error('Error while fetching comments');
									return $q.reject(errResponse);
										});
				                   },
				                   
				          //Create ForumComment..............................			
									createForumComment : function(forumComment) {
										console.log("--> ForumCommentService : calling 'createForumComment' method.");
										return $http
										.post(BASE_URL + '/createNewComment/', forumComment)
										.then(function(response) {
											alert(response.data);
										return response.data;
												}, 
										function(errResponse) {
											console.error('Error while creating blogComment');
											return $q.reject(errResponse);
												});
										
									},
									
									//ForumComment Details by forum id..............................			
									getSelectedForumComment : function(id) {
										console.log("-->ForumCommentService : calling getSelectedForumComment() method with id : " + id);
										return $http
											.get(BASE_URL+'/commentByforumId/'+ id)
											.then(function(response) {
												alert(response.data);
											$rootScope.selectedForumComment = response.data;
											
											return response.data;
												},
											function(errResponse) {
											console.error('Error while Fetching forumcomment.');
											return $q.reject(errResponse);
														});
											},
													
									    
										     //Edit ForumComment...............		
													updateForumComment : function(forumComment, id) {
												     console.log("--> ForumCommentService : calling 'updateForumComment' method.");
													return $http
												    .put(BASE_URL+'/updateForumComment/'+id, forumComment)
													.then(function(response) {
														alert(response.data);
												     return response.data;
													 },
													function(errResponse) {
												    console.error('Error while updating Blog...');
											    	return $q.reject(errResponse);
												     });
													},
											    	}
			
																		     
				                   
						
					
				
			
}]);