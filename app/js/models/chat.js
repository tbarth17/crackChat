Chats.Chat = DS.Model.extend({
  username: DS.attr('string'),
  timestamp: DS.attr('date'),
  message: DS.attr('string')
});

Chats.ChatAdapter = Chats.ApplicationAdapter.extend({
  pathForType: function(type) {
    return 'general';
  }
});
