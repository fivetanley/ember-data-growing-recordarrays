export default function() {
  var originalHandle = this.pretender.handleRequest;
  this.pretender.handleRequest = function() {
    var ret = originalHandle.apply(this, arguments);
    console.log('handled requests size', this.handledRequests.length);
    return ret;
  }
  this.get('/marketdata', function() {
    return {
      marketdata: [
        {id: 1, instrument_id: 1, side: 'Bid'},
        {id: 2, instrument_id: 1, side: 'Ask'},
        {id: 3, instrument_id: 1, side: 'Last'},
      ]
    }
  });
}
