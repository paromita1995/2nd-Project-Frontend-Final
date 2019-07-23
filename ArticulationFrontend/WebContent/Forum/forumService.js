app.factory('forumService', ['$http', '$q', '$rootScope',
		function($http, $q, $rootScope) {
			console.log("forumService...")

			var BASE_URL = 'http://localhost:8082/Articulation'
				return {
				//Fetch All ForumList............................
				fetchAllForums : function() {
					console.log("--> forumService : calling 'fetchAllForum' method.");
									return $http
									.get(BASE_URL + '/forumlist')
									.then(function(response) {
									return response.data;
										}, 
									function(errResponse) {
									console.error('Error while fetching Forum');
									return $q.reject(errResponse);
										});
									},
						//Create Forum..............................			
									createForum : function(forum) {
										console.log("--> ForumService : calling 'createForum' method.");
										return $http
										.post(BASE_URL + '/createNewForum/', forum )
										.then(function(response) {
										return response.data;
												}, 
										function(errResponse) {
											console.error('Error while creating forum');
											return $q.reject(errResponse);
												});
										
									},
									
//selected forumDetails	by forum id......................			
									
									getSelectedForum : function(id) {
										console.log("-->forumService : calling getSelectedForum() method with id : " + id);
										return $http
											.get(BASE_URL+'/forumById/'+ id)
											.then(function(response) {
											$rootScope.selectedForum = response.data;
											return response.data;
												},
											function(errResponse) {
											console.error('Error while Fetching forum.');
											return $q.reject(errResponse);
														});
											},	
									
					
									 //Edit Forum...............		
									updateForum : function(forum, id) {
									     console.log("--> ForumService : calling 'updateForum' method.");
										return $http
									    .put(BASE_URL+'/updateForum/'+id, forum)
										.then(function(response) {
									     return response.data;
										 },
										function(errResponse) {
									    console.error('Error while updating Forum...');
								    	return $q.reject(errResponse);
									     });
									},	
						//Create forumComment.................			
									createForumComment : function(forumComment)
									{
										console.log("-->forumService : calling 'createForumComment' method.");
										return $http.post(BASE_URL + '/createNewComment/', forumComment).then
										(function(response)
												{
														return response.data;
												}, 
												function(errResponse) 
												{
														console.error('Error while creating forumComment');
														return $q.reject(errResponse);
												}
										);
									},
//									fetchAllApprovedForums......................	
									
									fetchAllApprovedForums : function() {
										console.log("--> ForumService : calling 'fetchAllApprovedForums' method.");
										return $http
										.get(BASE_URL + '/Approvedforumlist')
										.then(function(response) 
										{
										return response.data;
										}, 
										function(errResponse) 
										{
										console.error('Error while fetching Forums');
										return $q.reject(errResponse);
										});
										},
										
										
										//Forum approved by Admin...........
										approveForum : function(forum, id)
										{
											console.log("-->ForumService : calling approveForum() method : getting forum with id : " + id);
											return $http.put(BASE_URL+'/approvedForums/'+ id, forum).then
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
										
										//Forum reject by Admin..................
										rejectForum  : function(forum, id) 
										{
											console.log("-->ForumService : calling rejectForum() method : getting forum with id : " + id);
											return $http.put(BASE_URL+'/rejectForums/'+ id, forum).then
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
										
										//get my Forums..........
										

									
							    	
			}
}]);
			