"use strict";
app.controller('userController', [
		'$scope',
		'userService',
		'$location',
		'$rootScope',
		'$route',
		'$window',
		'NotificationService',
		function($scope, userService, $location, $rootScope,$route,$window,NotificationService) {
			console.log("userController...")

			var self = this;
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
				DOB : '',
				address : '',
				contactNo : '',
				IsOnline : '',
				status : '',
				image : ''
				}
			self.users = [];
			
			
			//fetching all users.............
			self.fetchAllUser = function() {
				console.log("--> userController : calling fetchAllUser method.");
				userService.fetchAllUser().then(
				function(e) {
				self.users = e;
								}, function(errResponse) {
									console.error('Error while fetching Users...');
								});
					};
				self.fetchAllUser();
		//Create User...................		
				self.createUser = function(user) {
					console.log("--> UserController : calling createUser method.");
					userService.createUser(user).then(
							function(e) {
								self.users = e;
								alert('User Created Successfully...')
								$location.path('/login');
							},
							function(errResponse) {
								console.error('Error while creating user...');
							});
				};
				
				//Login User...................		
				self.login = function(user) {
						console.log("-->UserController : calling login method.");
						userService.login(user).then(
								function(e) {
									self.user = e;
									$rootScope.currentUser = self.user;
									console.log (self.user.userId);
								console.log ($rootScope.currentUser.role);
									$location.path('/index');
								}, 
								function(errResponse) {
									console.error('Error while fetching User...');
								});
					};
					
			//Profile Check...................		
					self.getSelectedUser = function(id) {
						console.log("-->UserController : calling getSelectedUser method : getting user with id : " + id);
						userService.getSelectedUser(id).then(
								function(e) {
									self.user = e;
									$location.path('/profile');
								}, 
								function(errResponse) {
									console.error('Error while fetching User...');
								});
					};
				
			//Edit Profile..............
					self.updateUser = function(user,id) {
						console.log("-->UserController : calling updateUser method.");
						userService.updateUser(user,id).then(
				         function(s) {
								self.user = s;
								alert('User updated Successfully...')
								console.log(self.user);
								$location.path('/index');
								},
						function(errResponse) {
						console.error('Error while updating user...')
							});
						};
						
						
						// send friend request..........
						
						self.sendFriendRequest = function sendFriendRequest(friendId) {
							console.log("--> sendFriendRequest : "+friendId);
							userService.sendFriendRequest(friendId).then(
							function(d) {
							self.friend = d;
							alert('Friend request sent...')
							$location.path('/index');
							},
							function(errResponse) {
							console.error('Error while friends...');
							});
							
									
								
						};
						
						
						//logout............
						self.logout = function(user,id) 
						{
							console.log("--> UserController : calling logout method.");
							alert(user.userId);
							userService.logout(user,id);
							$rootScope.currentUser = {};
							//$localStorage.currentUser.remove('currentUser');
						    //$cookieStore.remove('currentUser');
							
							console.log("-->UserController : User Logged out.");
							$window.location.reload();
							$location.path('/index');
						}
						
		 //my profile.........
						
						
						
			self.reset = function() {
				console.log('submit a new User', self.user);
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
							DOB : '',
							address : '',
							contactNo : '',
							IsOnline : '',
							status : '',
							image : '' 

				};
				$scope.myForm.$setPristine(); // reset form...
			};
		} ]);