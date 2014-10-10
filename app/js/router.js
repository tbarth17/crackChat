Chats.Router.map(function(){
  this.route('login');
});

Chats.ApplicationRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('chat');
  }
});
