var RecordStore = require("../RecordStore");
var assert = require("assert");


describe("RecordStore", function(){

  var recordstore;


  beforeEach(function() {
    recordstore = new RecordStore("Sound HQ", "Glasgow", 2000);
  });

  it('should have a name', function() {
    assert.equal("Sound HQ", recordstore.name);
  });

  it("should have a city", function() {
    assert.equal("Glasgow" , recordstore.city);
  });

  it("should have notthing in the inventory to begin", function(){
    assert.equal(0, recordstore.inventory.length);
  });

  
})