

app
		.factory(
				'friendService',
				[
						'$http',
						'$q',
						'$rootScope',
						function($http, $q, $rootScope) {
							console.log("friendService...");

							var BASE_URL = 'http://localhost:8082/Articulation'
							return {
								getMyFriends : function() {
									return $http
											.get(BASE_URL + '/myFriends')
											.then(
													function(response) {
														return response.data;
													},
													function(errResponse) {
														console
																.error("-->updateFriendRequest : Error while fetching friends.");
														return $q
																.reject(errResponse);
													});
								},
								
								
								
								
								getNewFriendRequests : function() {
									return $http
											.get(BASE_URL + '/newFriendRequest')
											.then(
													function(response) {
														return response.data;
													},
													function(errResponse) {
														console
																.error("-->updateFriendRequest : Error while fetching friends.");
														return $q
																.reject(errResponse);
													});
								},
								
								unFriend : function(friend, id) {
									console
											.log("--> friendService : calling 'unFriend' method with id : "
													+ id);
									return $http
											.put(
													BASE_URL
															+ '/unFriend/'
															+ id, friend)
															
											.then(
													function(response) {
														return response.data;
													},
													function(errResponse) {
														console
																.error("-->friendService : Error while unFriending existing friend.")
													});
								},
								sendFriendRequest : function(friendId) {
									return $http
											.post(
													BASE_URL + '/addFriend/'
															+ friendId)
											.then(
													function(response) {
														return response.data;
													},
													function(errResponse) {
														console
																.error("-->updateFriendRequest : Error while creating friend.")
														return $q
																.reject(errResponse);
													});
								},
								
								rejectFriend : function(friend,id) {
									console.log("--> friendService : calling 'rejectFriend' method with id : "+id);
									
									return $http.put(BASE_URL+'/rejectFriend/'+id,friend)
									.then(function(response) {
												return response.data;
											},
											function(errResponse) {
												console.error("-->friendService : Error while rejecting friend request.")
											});
								},
								

								acceptFriend : function(friend,id) {
									console.log("--> friendService : calling 'acceptFriend' method with id : "+id);
									
									return $http.put(BASE_URL+'/acceptFriend/'+id,friend)
									.then(function(response) {
												return response.data;
											},
											function(errResponse) {
												console.error("-->friendService : Error while accepting friend request.")
											});
								},
								
								
						//selected user......
								
								getSelectedUser : function(id) {
									console.log("-->UserService : calling getSelectedUser() method with id : " + id);
											return $http
										.get(BASE_URL+'/userprofile/'+ id)
										.then(function(response) {
											$rootScope.selectedUser = response.data;
											return response.data;
											},
										function(errResponse) {
							            console.error('Error while Fetching User.');
										return $q.reject(errResponse);
										});
													
														},

								
								
							};
						} ]);