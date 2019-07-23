"use strict";
app.factory('userService', ['$http', '$q', '$rootScope',
		function($http, $q, $rootScope) {
			console.log("userService...")

			var BASE_URL = 'http://localhost:8082/Articulation'
				return {
				//Fetch All UserList............................
				fetchAllUser : function() {
					console.log("--> userService : calling 'fetchAllUser' method.");
									return $http
									.get(BASE_URL + '/userlist')
									.then(function(response) {
									return response.data;
										}, 
									function(errResponse) {
									console.error('Error while fetching Users');
									return $q.reject(errResponse);
										});
									},
						//Create user..............................			
									createUser : function(user) {
										console.log("--> UserService : calling 'createUser' method.");
										return $http
										.post(BASE_URL + '/joinUser/', user)
										.then(function(response) {
										return response.data;
												}, 
										function(errResponse) {
											console.error('Error while creating user');
											return $q.reject(errResponse);
												});
										
									},
									
					//Login user..............................			
									login : function(user) {
										console.log("--> UserService : calling 'login' method.");
										return $http
										.post(BASE_URL + '/profile/authenticate/', user)
										.then(function(response) {
										return response.data;
												}, 
										function(errResponse) {
											console.error('Error while login user');
											return $q.reject(errResponse);
												});
										
									},
									
									
					//Profile Check..............................			
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
							//Edit Profile...............		
									updateUser : function(user, id) {
										console.log("--> UserService : calling 'updateUser' method.");
										return $http
											      .put(BASE_URL+'/updateUser/'+id, user)
												  .then(function(response) {
												  return response.data;
														},
												  function(errResponse) {
												  console.error('Error while updating User...');
												  return $q.reject(errResponse);
														});
									},
									
									

									logout: function(user, id) 
									{
										console.log("--> userService : calling 'logout' method.");
										
										return $http.put(BASE_URL+'/logout/'+id,user).then
										(function(response) 
												{
														return response.data;
												},
												function(errResponse) 
												{
														console.error('Error while logging out.');
														return $q.reject(errResponse);
												}
										);
									},
									
									sendFriendRequest : function(friendId) {
										alert(friendId)
										return $http
												.post(
														BASE_URL + '/addFriend/'+ friendId)
												.then(function(response) {
															return response.data;
														},
														function(errResponse) {
															console.error("-->FriendRequest : Error while creating friend.")
															return $q.reject(errResponse);
																	
														});
									},
									
				//my profile......
			}
}]);
			