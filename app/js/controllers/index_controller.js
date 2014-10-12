Chats.IndexController = Ember.ArrayController.extend({
  needs: ['application'],
  newChat: '',

  actions: {
    createChat: function(){
      var username = this.get('controllers.application.currentUser.username');
      var chat = this.store.createRecord('chat', {
        username: username,
        message: this.get('newChat'),
        timestamp: new Date()
      });
      chat.save();
      this.set('newChat', '');
    }
  }

});
