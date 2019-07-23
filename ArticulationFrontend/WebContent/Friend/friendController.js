

app.controller('friendController', [ 'friendService', 'userService', '$scope',
		'$location', '$rootScope',
		function(friendService, userService, $scope, $location, $rootScope) {
			console.log("friendController...");

			var self = this;
			self.friend = {
				id : '',
				userId : '',
				friendId : '',
				status : '' ,
				isOnline : ''
				
			};
			self.friends = [];
			self.newFriendRequests = [];
			self.user = {
					errorCode : '',
					errorMessage : '',
					userId : '',
					name : '',
					password : '',
					role : '',
					email : '',
					description : '',
					gender : '',
					dob : '',
					address : '',
					contactNo : '',
					IsOnline : '',
					status : ''
			};
			self.users = [];
			
		
			
			self.sendFriendRequest = function sendFriendRequest(friendId) {
				console.log("--> sendFriendRequest : "+friendId);
				friendService.sendFriendRequest(friendId).then(
				function(d) {
				self.friend = d;
				alert('Friend request sent...')
				},
				function(errResponse) {
				console.error('Error while friends...');
				});
				
						
					
			};
			
			
			
			
			
			
			
			
			self.getMyFriends = function() {
				console.log("--> getMyFriends");
								friendService.getMyFriends().then(
						function(d) {
							self.friends = d;
							console.log("Got the Friendlist.");
						},
						function(errResponse) {
							console.error("Error while fetching Friends.");
						}
					);
			};
			self.getMyFriends();
			
			
			self.getNewFriendRequests = function() {
				console.log("--> getMyFriendRequests");				
				friendService.getNewFriendRequests().then(
						function(d) {
							self.newFriendRequests = d;
							$rootScope.newFriendRequests=self.newFriendRequests;
							console.log("Got the Friendlist.");
						},
						function(errResponse) {
							console.error("Error while fetching Friends.");
						}
					);
			};
			
			self.getNewFriendRequests();
			
			
			
			self.acceptFriend = function(friend, id) {
				console.log("--> FriendController : calling accept  'acceptFriend' method with id : "+id);
				console.log("--> FriendController",self.friend);
				friendService
								.acceptFriend(friend, id)
								.then(function(d) {
									self.friend = d;
									
									alert('Friend request accepted successfully... accept');
									$location.path('/index');
									
								},
								function(errResponse) {
									console.error("Error while updating friend.");
								});
			};
			
			
			  self.rejectFriend = function(friend, id) {
					console.log("--> FriendController : calling reject  'rejectFriend' method with id : "+id);
					console.log("--> FriendController",self.friend);
					friendService
									.rejectFriend(friend, id)
									.then(function(d) {
										self.friend = d;
										
										alert('Friend request rejected successfully... reject');
										$location.path('/index');
										
									},
									function(errResponse) {
										console.error("Error while updating friend.");
									});
				};	
			
				self.unFriend = function(friend, id) {
					console.log("--> FriendController : calling 'unFriend' method with id : "+id);
					console.log("--> FriendController",self.friend);
					friendService
									.unFriend(friend, id)
									.then(function(d) {
										self.friend = d;
										self.getMyFriends();
										$location.path('/index');
									},
									function(errResponse) {
										console.error("Error while updating friend.");
									});
				};			
			
			self.getSelectedUser = function(id) {
				console.log("-->UserController : calling getSelectedUser method : getting user with id : " + id);
				userService.getSelectedUser(id).then(
						function(e) {
							self.user = e;
							console.log('id '+ self.user.userId);
							$rootScope.user= self.user;
							console.log(' r id '+ $rootScope.user.userId);
							$location.path('/viewFriendProfile');
						}, 
						function(errResponse) {
							console.error('Error while fetching User...');
						});
			};
			
			
			
			
			
			
			
		} ]);