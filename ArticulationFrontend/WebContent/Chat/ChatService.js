(function(angular, SockJS, Stomp) {
  app.service("ChatService", function($q, $timeout) {
    
    var service = {}, listener = $q.defer(), socket = {
      client: null,
      stomp: null
    }, messageIds = [];
    
    service.RECONNECT_TIMEOUT = 30000;
    service.SOCKET_URL = "/bridge/chat";
    service.CHAT_TOPIC = "/topic/message";
    service.CHAT_BROKER = "/app/chat";
    
    service.receive = function() {
    	
      return listener.promise;
    };
    
    service.send = function(message,user) {
      var id = Math.floor(Math.random() * 1000000);
      socket.stomp.send(service.CHAT_BROKER, {
        priority: 9
      }, JSON.stringify({
        message: message,
        id: id,
        userId: user.userId,
       
      }));
      messageIds.push(id);
    };
    
    var reconnect = function() {
    	$timeout(function() {
        initialize();
      }, 
      this.RECONNECT_TIMEOUT);
    };
    
    var getMessage = function(data) {
    	var message = JSON.parse(data), out = {};
    	out.message = message.message;
    	out.userId = message.userId;
    	//out.time = new Date(message.time);	//*****
    	out.time = message.time;
      return out;
    };
    
    var startListener = function() {
    	socket.stomp.subscribe(service.CHAT_TOPIC, function(data) {
        listener.notify(getMessage(data.body));
      });
    };
    
    var initialize = function() {
    	socket.client = new SockJS('http://localhost:8082/Articulation/chat');
    	socket.stomp = Stomp.over(socket.client);
    	socket.stomp.connect({}, startListener);
    	socket.stomp.onclose = reconnect;
    };
    
    initialize();
    return service;
  });
})(angular, SockJS, Stomp);
