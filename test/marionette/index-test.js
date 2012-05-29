if (!cross.isNode) {
  require('/marionette.js');
}

describe('marionette/index', function() {
  var Index;

  before(function() {
    Index = typeof(window) === 'undefined' ?
      cross.requireLib('marionette/index') :
      Marionette;
  });

  it('should have paths', function() {
    expect(Index.Element).to.be.an(Object);
    expect(Index.Client).to.be.an(Object);
    expect(Index.Xhr).to.be.an(Object);
    expect(Index.Drivers).to.be.an(Object);

    expect(Index.Drivers.Abstract).to.be.an(Object);
    expect(Index.Drivers.Websocket).to.be.an(Object);
    expect(Index.Drivers.HttpdPolling).to.be.an(Object);

    if (typeof(window) === 'undefined') {
      expect(Index.Drivers.Tcp).to.be.an(Object);
    }
  });


});
