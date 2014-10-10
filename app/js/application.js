window.Chats = Ember.Application.create();

Chats.ApplicationAdapter = DS.FirebaseAdapter.extend({
  firebase: new Firebase('http://crack.firebaseio.com/rooms/')
});
