import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service('store'),

  // poller setup for 800ms
  poll: function(){
    this.get("store").query("marketdatum", {}).then(function(records){
      var size = records.get("firstObject").get('_internalModel._recordArrays.size');
      console.log('_internalModel._recordArrays is now ' + size + ' items long.')
      records.destroy();
    });
    Ember.run.later(this, this.poll.bind(this), 1000);
  }
});
